import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom"; 
import { AuthContext } from "../context/AuthContext";
import { useThemeContext } from "../context/ThemeContext"; 

const SubNavbar = () => {
  const { currentUser } = useContext(AuthContext);
  const { theme } = useThemeContext(); 
  const location = useLocation(); 

  if (!currentUser) return null;

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`sticky top-0 z-40 ${isHomePage ? (theme === 'dark' ? 'bg-gray-800' : 'bg-[#8A929D]') : (theme === 'dark' ? 'bg-gray-800' : 'bg-purple-400')} p-3 rounded-md shadow-lg`}>
      <div className="container mx-auto flex justify-center">
        <div className="flex space-x-8">
          <NavLink
            to="/add-equipment"
            className={({ isActive }) => isActive ? "text-yellow-500 text-lg font-semibold relative after:block after:content-[''] after:absolute after:h-0.5 after:bg-yellow-400 after:w-full after:left-0 after:bottom-0" : "text-white text-lg font-semibold relative after:block after:content-[''] after:absolute after:h-0.5 after:bg-yellow-400 after:w-0 after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"}
          >
            Add Equipment
          </NavLink>
          <NavLink
            to="/my-equipment-list"
            className={({ isActive }) => isActive ? "text-yellow-500 text-lg font-semibold relative after:block after:content-[''] after:absolute after:h-0.5 after:bg-yellow-400 after:w-full after:left-0 after:bottom-0" : "text-white text-lg font-semibold relative after:block after:content-[''] after:absolute after:h-0.5 after:bg-yellow-400 after:w-0 after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"}
          >
            My Equipment List
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default SubNavbar;
