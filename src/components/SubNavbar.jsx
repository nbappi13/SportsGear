
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const SubNavbar = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return null;

  return (
    <nav className="bg-gray-700 p-2 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex space-x-4">
          <NavLink to="/add-equipment" activeClassName="text-yellow-500" className="text-white">Add Equipment</NavLink>
          <NavLink to="/my-equipment-list" activeClassName="text-yellow-500" className="text-white">My Equipment List</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default SubNavbar;
