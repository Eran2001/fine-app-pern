import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const getLinkClasses = (path) => {
    return `cursor-pointer px-4 py-2 rounded ${
      isActive(path) ? "text-[#00e3dc]" : "text-white"
    } hover:text-[#00e3dc] transition-colors duration-300`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar p-1 fixed w-full left-0 right-0 top-0 flex justify-between items-center transition-colors duration-300 z-[60] ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      {/* Logo */}
      <div
        className="logo text-[#fff] font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src="/logo.png" width="40px" alt="Logo" className="logoNav" />
      </div>

      <button
        className="toggle-bar text-white text-3xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <div
          className={getLinkClasses("/")}
          onClick={() => navigate("/")}
        >
          Home
        </div>
        <div
          className={getLinkClasses("/services")}
          onClick={() => navigate("/services")}
        >
          Services
        </div>
        <div
          className={getLinkClasses("/officers")}
          onClick={() => navigate("/officers")}
        >
          Officers
        </div>
        <div
          className={getLinkClasses("/post-offices")}
          onClick={() => navigate("/post-offices")}
        >
          Post Offices
        </div>
        <div
          className={getLinkClasses("/about")}
          onClick={() => navigate("/about")}
        >
          About
        </div>
        <div
          className={getLinkClasses("/contact")}
          onClick={() => navigate("/contact")}
        >
          Contact
        </div>

        {/* Login and Register Buttons Inside Toggle Bar */}
        <div className="toggle-buttons">
          <button
            className="login-button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="register-button"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>

      {/* Login and Register Buttons Visible Above 1433px */}
      <div className="buttons-above">
        <button
          className="login-button"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          className="register-button"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
