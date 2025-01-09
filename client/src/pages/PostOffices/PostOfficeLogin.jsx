import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BASE_URL from '../../config';

const PostOfficeLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/api/post-office-login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Token:", data.token);
        navigate("/post-office-dashboard");
      } else {
        console.error("Error:", data.message);
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  return (
    <div className="p-20">
      <Navbar />
      <h1 className="text-4xl font-bold text-center mt-10 mb-10 home">
        Post Office Login
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium" htmlFor="post_office_name">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            required
          />
        </div>
        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium" htmlFor="postal_code">
            Password
          </label>
          <input
            type="text"
            id="postal_code"
            value={password}
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-52 h-12 shadow-sm rounded-full bg-[#0438e4] hover:bg-[#070250] transition-all duration-700 text-white text-base font-semibold leading-7 mx-auto block"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostOfficeLogin;