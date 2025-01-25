import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">Your Website</div>
        <div className="space-x-4">
          <NavLink to="/" activeClassName="text-yellow-500" className="text-white">Home</NavLink>
          <NavLink to="/all-sports-equipment" activeClassName="text-yellow-500" className="text-white">All Sports Equipment</NavLink>
          <NavLink to="/add-equipment" activeClassName="text-yellow-500" className="text-white">Add Equipment</NavLink>
          <NavLink to="/my-equipment-list" activeClassName="text-yellow-500" className="text-white">My Equipment List</NavLink>
          <NavLink to="/login" activeClassName="text-yellow-500" className="text-white">Login</NavLink>
          <NavLink to="/register" activeClassName="text-yellow-500" className="text-white">Register</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
