import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import BASE_URL from '../../config';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    licenseID: "",
    phone_number: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/login");
        alert("Successfully Login")
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="p-20">
      <Navbar />
      <h1 className="text-4xl font-bold text-center mt-10 mb-10 home">
        Register Page
      </h1>
      <div>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg"
        >
          <div className="flex gap-x-6 mb-6">
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          <div className="relative mb-6">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="relative mb-6">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              License ID
            </label>
            <input
              type="number"
              name="licenseID"
              value={formData.licenseID}
              onChange={handleChange}
              className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
              placeholder="Enter your ID"
              required
            />
          </div>

          <div className="relative mb-6">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="flex gap-x-6 mb-6">
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                placeholder="Use at least 8 characters"
                required
              />
            </div>
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                placeholder="Re-enter your password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-52 h-12 shadow-sm rounded-full bg-[#0438e4] hover:bg-[#070250] transition-all duration-700 text-white text-base font-semibold leading-7"
          >
            Register
          </button>
          <p className="mt-4 text-sm text-gray-600">
            Already registered?{" "}
            <Link to="/login" className="text-[#0438e4] hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
