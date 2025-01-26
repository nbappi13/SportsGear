// src/components/Navbar.jsx

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import SubNavbar from './SubNavbar';
import spLogo from '../assets/SportsGear logo.png';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <>
      <nav className="bg-gray-800 p-4">
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
            <NavLink to="/cart" className="text-white">
              🛒
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
