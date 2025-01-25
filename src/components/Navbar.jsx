

import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">SportsGear</div>
        <div className="space-x-4">
          <NavLink to="/" activeClassName="text-yellow-500" className="text-white">Home</NavLink>
          <NavLink to="/all-sports-equipment" activeClassName="text-yellow-500" className="text-white">All Sports Equipment</NavLink>
          <NavLink to="/add-equipment" activeClassName="text-yellow-500" className="text-white">Add Equipment</NavLink>
          <NavLink to="/my-equipment-list" activeClassName="text-yellow-500" className="text-white">My Equipment List</NavLink>
          {currentUser ? (
            <>
              <div className="text-white flex items-center space-x-2">
                {currentUser.photoURL && <img src={currentUser.photoURL} alt="User Avatar" className="inline-block h-8 w-8 rounded-full" />}
                <span className="ml-2">{currentUser.displayName || currentUser.email}</span>
              </div>
              <button onClick={logout} className="text-white">Log Out</button>
            </>
          ) : (
            <>
              <NavLink to="/login" activeClassName="text-yellow-500" className="text-white">Login</NavLink>
              <NavLink to="/register" activeClassName="text-yellow-500" className="text-white">Register</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
