"use client"

import { useContext, useState, useEffect } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { CartContext } from "../context/CartContext"
import { useThemeContext } from "../context/ThemeContext"
import spLogo from "../assets/SportsGear logo.png"
import { FaBars } from "react-icons/fa" 

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext)
  const { cartItems } = useContext(CartContext)
  const { theme, toggleTheme } = useThemeContext()
  const location = useLocation()
  const navigate = useNavigate()
  const [showDashboardMenu, setShowDashboardMenu] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false) 

 
  useEffect(() => {
    setShowMobileMenu(false)
  }, [location.pathname])

  const isHomePage = location.pathname === "/"
  const navbarColor = isHomePage ? "bg-gray-800" : theme === "dark" ? "bg-gray-900" : "bg-blue-600"

  const handleHomeClick = (e) => {
    e.preventDefault()
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      navigate("/")
    }
  }

  const handleBuyNowClick = () => {
    navigate("/")
    setTimeout(() => {
      document.getElementById("products-section").scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const toggleDashboardMenu = () => {
    setShowDashboardMenu(!showDashboardMenu)
  }

  const closeDashboardMenu = () => {
    setShowDashboardMenu(false)
  }

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <div className="sticky top-0 z-50">
      <nav className={`${navbarColor} p-4`}>
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-full sm:w-auto text-white font-bold text-2xl mb-4 sm:mb-0">
            <div className="flex items-center">
              <img src={spLogo || "/placeholder.svg"} alt="SportsGear Logo" className="h-10 w-10 rounded-full mr-2" />
              SportsGear
            </div>

          
            <button
              className="lg:hidden xl:hidden text-white text-2xl"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <FaBars />
            </button>
          </div>

      
          <div className="hidden lg:flex xl:flex space-x-4 justify-center flex-1 mt-4 sm:mt-0 text-1xl font-bold">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-yellow-500" : "text-white")}
              onClick={handleHomeClick}
            >
              Home
            </NavLink>
            <NavLink
              to="/all-sports-equipment"
              className={({ isActive }) => (isActive ? "text-yellow-500" : "text-white")}
            >
              Equipments
            </NavLink>
            <NavLink to="/special-deals" className={({ isActive }) => (isActive ? "text-yellow-500" : "text-white")}>
              Special Deals
            </NavLink>
            
            
          </div>

         
          <div className="flex items-center space-x-4">
          
            {!currentUser && (
              <div className="hidden lg:flex xl:flex space-x-4">
                <NavLink to="/login" className={({ isActive }) => (isActive ? "text-yellow-500" : "text-white")}>
                  Login
                </NavLink>
                <NavLink to="/register" className={({ isActive }) => (isActive ? "text-yellow-500" : "text-white")}>
                  Register
                </NavLink>
              </div>
            )}

          
            {currentUser && (
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {showDashboardMenu && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={closeDashboardMenu}></div>

                      <div
                        className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-20`}
                        style={{
                          transform: window.innerWidth < 640 ? "translateX(29%)" : "translateX(0)",
                        }}
                      >
                        <div className="py-1" role="menu" aria-orientation="vertical">
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
                          <NavLink
                            to="/add-special-deal"
                            className={({ isActive }) =>
                              `block px-4 py-2 text-sm ${
                                isActive
                                  ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                                  : "text-gray-700 dark:text-gray-200"
                              } hover:bg-gray-100 dark:hover:bg-gray-700`
                            }
                            onClick={closeDashboardMenu}
                          >
                            Add Special Deal
                          </NavLink>
                          <NavLink
                            to="/handle-special-deals"
                            className={({ isActive }) =>
                              `block px-4 py-2 text-sm ${
                                isActive
                                  ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                                  : "text-gray-700 dark:text-gray-200"
                              } hover:bg-gray-100 dark:hover:bg-gray-700`
                            }
                            onClick={closeDashboardMenu}
                          >
                            Handle Special Deals
                          </NavLink>
                          <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                              `block px-4 py-2 text-sm ${
                                isActive
                                  ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                                  : "text-gray-700 dark:text-gray-200"
                              } hover:bg-gray-100 dark:hover:bg-gray-700`
                            }
                            onClick={closeDashboardMenu}
                          >
                            Profile
                          </NavLink>
                        </div>
                      </div>
                    </>
                  )}
                </div>

            
                <button
                  onClick={logout}
                  className="text-white ml-2 hover:text-yellow-500 transition-colors duration-200 hidden lg:inline xl:inline"
                >
                  Log Out
                </button>
              </div>
            )}

        
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "text-yellow-500" : "text-white") + " relative"}
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

    
        {showMobileMenu && (
          <div className="lg:hidden xl:hidden mt-4 bg-gray-700 dark:bg-gray-800 rounded-lg p-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded ${isActive ? "bg-blue-500 text-white" : "text-white hover:bg-gray-600"}`
                }
                onClick={handleHomeClick}
              >
                Home
              </NavLink>
              <NavLink
                to="/all-sports-equipment"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded ${isActive ? "bg-blue-500 text-white" : "text-white hover:bg-gray-600"}`
                }
              >
                Equipments
              </NavLink>
              <NavLink
                to="/special-deals"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded ${isActive ? "bg-blue-500 text-white" : "text-white hover:bg-gray-600"}`
                }
              >
                Special Deals
              </NavLink>
              
              

             
              {!currentUser ? (
                <div className="border-t border-gray-600 pt-3 mt-2">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `block py-2 px-4 rounded ${isActive ? "bg-blue-500 text-white" : "text-white hover:bg-gray-600"}`
                    }
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      `block py-2 px-4 rounded ${isActive ? "bg-blue-500 text-white" : "text-white hover:bg-gray-600"}`
                    }
                  >
                    Register
                  </NavLink>
                </div>
              ) : (
                
                <button
                  onClick={logout}
                  className="block w-full text-left py-2 px-4 rounded text-white hover:bg-gray-600 border-t border-gray-600 mt-2 pt-3"
                >
                  Log Out
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
