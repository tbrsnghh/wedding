import React, { useState } from "react";
import {
  HomeIcon,
  ChartPieIcon,
  UsersIcon,
  TableIcon,
  PlusCircleIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";

// Danh sách menu
const menuItems = [
  { name: "Tổng quan", path: "/admin", icon: HomeIcon },
  { name: "Thống kê", path: "/admin/charts", icon: ChartPieIcon },
  { name: "Khách hàng", path: "/admin/users", icon: UsersIcon },
  { name: "Menu", path: "/admin/forms", icon: TableIcon },
  { name: "Sảnh tiệc", path: "/admin/tables", icon: TableIcon },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative flex">
      {/* Nút mở sidebar */}
      <button
        className="p-2 bg-gray-200 rounded-full shadow-md absolute top-4 left-4 z-50 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuIcon className="w-6 h-6 text-gray-700" />
      </button>

      {/* Sidebar */}
      <aside
        className={`mt-10 bg-white border-r border-gray-200 h-screen px-6 py-6 transition-transform duration-300 ${
          isOpen ? "translate-x-0 w-64" : "-translate-x-full w-0"
        }`}
      >
        <nav className={`space-y-4 ${isOpen ? "opacity-100" : "opacity-0"}`}>
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="flex items-center space-x-3 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-100 transition"
            >
              <item.icon className="w-5 h-5 text-gray-600" />
              <span>{item.name}</span>
            </NavLink>
          ))}

          {/* Nút Create Account */}
          <NavLink
            to="/admin/create"
            className="flex items-center justify-center bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition shadow-md"
          >
            <PlusCircleIcon className="w-5 h-5" />
            <span className="ml-2">Nút gì đó</span>
          </NavLink>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
