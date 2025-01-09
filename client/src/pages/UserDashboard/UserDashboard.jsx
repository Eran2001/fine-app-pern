import { useState } from "react";
import "./UserDashboard.css";
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';

const UserDashboard = () => {
  // Initialize avatar state from localStorage if available
  const savedAvatar = localStorage.getItem("avatar");
  const [avatar, setAvatar] = useState(savedAvatar || "/avatar.jpg");

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result); // Update avatar with the uploaded image
        localStorage.setItem("avatar", reader.result); // Save new avatar to localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="min-h-screen flex bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg flex flex-col justify-between">
          <div>
            <div className="p-6 text-lg font-bold text-gray-800 border-b">
              Citizen Dashboard
            </div>
            <nav className="mt-6">
              <Link
                to="/"
                className="block px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-[#2934b1] transition"
              >
                Home
              </Link>
              <Link
                to="user-overview"
                className="block px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-[#2934b1] transition"
              >
                Overview
              </Link>
              <Link
                to="fine-pay"
                className="block px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-[#2934b1] transition"
              >
                Pay Fine
              </Link>
              <Link
                to="report-issue"
                className="block px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-[#2934b1] transition"
              >
                Report an Issue
              </Link>
            </nav>
          </div>
          <div className="p-6 border-t">
            <Link
              to="/login"
              className="block w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-800 text-white text-center rounded-lg transition"
            >
              Logout
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <nav className="bg-white shadow-lg pb-3">
            <div className="container mx-auto px-6 flex justify-between items-center h-16">
              <Link
                to="/"
                className="text-xl font-bold text-gray-800 hover:text-[#2934b1] transition"
              >
                Logo
              </Link>
              <div className="space-x-4 flex">
                <Link
                  to="#"
                  className="text-gray-600 hover:text-[#2934b1] transition"
                >
                  Settings
                </Link>
                <div className="relative">
                  {/* Displaying avatar */}
                  <img
                    src={avatar}
                    alt="Profile Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </nav>

          {/* Content Area */}
          <main className="flex-1 p-6">
            {/* The content inside this area */}
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
