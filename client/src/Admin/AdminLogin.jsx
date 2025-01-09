import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import BASE_URL from '../config';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/api/adminLogin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      localStorage.setItem('adminToken', data.token);
      navigate('/admin-dashboard'); // Redirect to admin dashboard
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="admin-login p-20">
      <Navbar />
      <h3 className="text-4xl font-bold text-center mt-10">Admin Login</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin} className="w-full max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className=" block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            required
          />
        </div>
        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className=" block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            required
          />
        </div>
        <button type="submit" className="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
