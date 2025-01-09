import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <div className="min-h-screen flex bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg flex flex-col justify-between">
          <div>
            <div className="p-6 text-lg font-bold text-gray-800 border-b">
              Admin Dashboard
            </div>
            <nav className="mt-6">
              <Link
                to="/"
                className="block px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-[#2934b1] transition"
              >
                Home
              </Link>
              <Link
                to="overview"
                className="block px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-[#2934b1] transition"
              >
                Overview
              </Link>
              <Link
                to="fines"
                className="block px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-[#2934b1] transition"
              >
                Fines
              </Link>
              <Link
                to="officer"
                className="block px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-[#2934b1] transition"
              >
                Officer
              </Link>
              <Link
                to="post-office"
                className="block px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-[#2934b1] transition"
              >
                Post Office
              </Link>
              <Link
                to="reported-issues"
                className="block px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-[#2934b1] transition"
              >
                Reported Issues
              </Link>
            </nav>
          </div>
          <div className="p-6 border-t">
            <Link
              to="/adminLogin"
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
              <div className="space-x-4">
                <Link
                  to="setting"
                  className="text-gray-600 hover:text-[#2934b1] transition"
                >
                  Settings
                </Link>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-[#2934b1] transition"
                >
                  Profile
                </Link>
              </div>
            </div>
          </nav>

          {/* Content Area */}
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
