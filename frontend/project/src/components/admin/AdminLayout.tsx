import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white">
        <div className="p-6">
          <h2 className="text-xl font-bold">Blog Admin</h2>
          <p className="text-gray-400 text-sm mt-1">Welcome, {user?.name}</p>
        </div>
        <nav className="mt-6">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition-colors ${
                isActive ? 'bg-gray-800 text-blue-400' : 'text-gray-400'
              }`
            }
          >
            <LayoutDashboard size={20} />
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/posts"
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition-colors ${
                isActive ? 'bg-gray-800 text-blue-400' : 'text-gray-400'
              }`
            }
          >
            <FileText size={20} />
            Posts
          </NavLink>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-6 py-3 text-gray-400 hover:bg-gray-800 transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-800">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}