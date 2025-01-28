import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import SubNavbar from './SubNavbar';
import spLogo from '../assets/SportsGear logo.png';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const navbarColor = isHomePage ? 'bg-gray-800' : 'bg-blue-600';

  return (
    <>
      <nav className={`${navbarColor} p-4`}>
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center text-white font-bold text-2xl mb-4 sm:mb-0">
            <img src={spLogo} alt="SportsGear Logo" className="h-10 w-10 rounded-full mr-2" />
            SportsGear
          </div>
          <div className="flex space-x-4 justify-center flex-1">
            <NavLink to="/" activeClassName="text-yellow-500" className="text-white">Home</NavLink>
            <NavLink to="/all-sports-equipment" activeClassName="text-yellow-500" className="text-white">All Sports Equipment</NavLink>
          </div>
          <div className="flex items-center space-x-4">
            {currentUser ? (
              <>
                <div className="relative text-white">
                  {currentUser.photoURL && (
                    <img
                      src={currentUser.photoURL}
                      alt="User Avatar"
                      className="inline-block h-8 w-8 rounded-full cursor-pointer"
                      title={currentUser.displayName || currentUser.email}
                    />
                  )}
                  <button onClick={logout} className="text-white ml-2">Log Out</button>
                </div>
              </>
            ) : (
              <>
                <NavLink to="/login" activeClassName="text-yellow-500" className="text-white">Login</NavLink>
                <NavLink to="/register" activeClassName="text-yellow-500" className="text-white">Register</NavLink>
              </>
            )}
            <NavLink to="/search" className="text-white">
              🔍
            </NavLink>
            <NavLink to="/cart" className="relative text-white">
              🛒
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm">
                  {cartItems.length}
                </span>
              )}
            </NavLink>
            <NavLink to="/buy-now" className="bg-blue-500 text-white px-3 py-2 rounded">
              Buy Now
            </NavLink>
          </div>
        </div>
      </nav>
      {currentUser && <SubNavbar />}
    </>
  );
};

export default Navbar;
