import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import BASE_URL from '../../config';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      navigate("/user-dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="p-20">
      <Navbar />
      <h1 className="text-4xl font-bold text-center mt-10 mb-10 home">
        Login Page
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg"
      >
        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            Email
          </label>
        </div>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          onChange={handleChange}
          required
          className=" block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
        />
        <div className="relative mb-6">
          <label className="flex items-center mt-5 mb-6 text-gray-600 text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            onChange={handleChange}
            required
            className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-52 h-12 shadow-sm rounded-full bg-[#0438e4] hover:bg-[#070250] transition-all duration-700 text-white text-base font-semibold leading-7"
        >
          Login
        </button>
        <p className="mt-4 text-sm text-gray-600">
            Already registered?{" "}
            <Link to="/register" className="text-[#0438e4] hover:underline">
              Register here
            </Link>
          </p>
      </form>
    </div>
  );
};

export default Login;
