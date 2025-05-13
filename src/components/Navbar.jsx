"use client";

import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { useThemeContext } from "../context/ThemeContext";
import spLogo from "../assets/SportsGear logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const { theme, toggleTheme } = useThemeContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [showDashboardMenu, setShowDashboardMenu] = useState(false);

  const isHomePage = location.pathname === "/";
  const navbarColor = isHomePage
    ? "bg-gray-800"
    : theme === "dark"
    ? "bg-gray-900"
    : "bg-blue-600";

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleBuyNowClick = () => {
    navigate("/");
    setTimeout(() => {
      document
        .getElementById("products-section")
        .scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleDashboardMenu = () => {
    setShowDashboardMenu(!showDashboardMenu);
  };

  const closeDashboardMenu = () => {
    setShowDashboardMenu(false);
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className={`${navbarColor} p-4`}>
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center text-white font-bold text-2xl mb-4 sm:mb-0">
            <img
              src={spLogo || "/placeholder.svg"}
              alt="SportsGear Logo"
              className="h-10 w-10 rounded-full mr-2"
            />
            SportsGear
          </div>
          <div className="flex space-x-4 justify-center flex-1 mt-4 sm:mt-0 text-1xl font-bold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-white"
              }
              onClick={handleHomeClick}
            >
              Home
            </NavLink>
            <NavLink
              to="/all-sports-equipment"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-white"
              }
            >
              Equipments
            </NavLink>
          </div>
          <div className="flex items-center space-x-4">
            {currentUser ? (
              <div className="relative text-white">
                {currentUser.photoURL && (
                  <img
                    src={currentUser.photoURL || "/placeholder.svg"}
                    alt="User Avatar"
                    className="inline-block h-8 w-8 rounded-full cursor-pointer"
                    title={currentUser.displayName || currentUser.email}
                  />
                )}

                <div className="relative inline-block text-left ml-2">
                  <button
                    onClick={toggleDashboardMenu}
                    className="text-white hover:text-yellow-500 transition-colors duration-200 flex items-center"
                  >
                    Dashboard
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        showDashboardMenu ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {showDashboardMenu && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={closeDashboardMenu}
                      ></div>

                      <div
                        className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-20`}
                        style={{
                          transform:
                            window.innerWidth < 640
                              ? "translateX(29%)"
                              : "translateX(0)", 
                        }}
                      >
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                        >
                          <NavLink
                            to="/add-equipment"
                            className={({ isActive }) =>
                              `block px-4 py-2 text-sm ${
                                isActive
                                  ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                                  : "text-gray-700 dark:text-gray-200"
                              } hover:bg-gray-100 dark:hover:bg-gray-700`
                            }
                            onClick={closeDashboardMenu}
                          >
                            Add Equipment
                          </NavLink>
                          <NavLink
                            to="/my-equipment-list"
                            className={({ isActive }) =>
                              `block px-4 py-2 text-sm ${
                                isActive
                                  ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                                  : "text-gray-700 dark:text-gray-200"
                              } hover:bg-gray-100 dark:hover:bg-gray-700`
                            }
                            onClick={closeDashboardMenu}
                          >
                            My Equipment List
                          </NavLink>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <button
                  onClick={logout}
                  className="text-white ml-2 hover:text-yellow-500 transition-colors duration-200"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-500" : "text-white"
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-500" : "text-white"
                  }
                >
                  Register
                </NavLink>
              </>
            )}
            <button
              className="hidden sm:block text-white"
              onClick={toggleSearch}
            >
              🔍
            </button>
            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute top-14 right-16 p-2 rounded-md shadow-lg border focus:outline-none z-50"
                style={{ width: "200px", transition: "width 0.3s ease-in-out" }}
              />
            )}
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                (isActive ? "text-yellow-500" : "text-white") + " relative"
              }
            >
              <div className="flex items-center">
                <span className="text-3xl">🛒</span>
                {cartItems.length > 0 && (
                  <span className="absolute -right-2.5 -top-2.5 bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </NavLink>
            <button
              onClick={handleBuyNowClick}
              className="hidden md:hidden lg:block xl:block bg-blue-500 text-white px-3 py-2 rounded"
            >
              Buy Now
            </button>
            <button onClick={toggleTheme} className="text-white">
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
