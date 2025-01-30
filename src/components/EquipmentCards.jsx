import React from 'react';
import { useNavigate } from 'react-router-dom';

const EquipmentCards = ({ equipment }) => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/viewdetails/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 dark:bg-gray-900">
      {equipment.map((item) => (
        <div
          key={item._id}
          className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300"
        >
          <img src={item.photoUrl} alt={item.itemName} className="w-full h-40 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2">{item.itemName}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">Category: {item.categoryName}</p>
          <p className="text-gray-600 dark:text-gray-300 mb-2">Price: ${item.price}</p>
          <p className="text-gray-600 dark:text-gray-300 mb-2">Rating: {item.rating}</p>
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600
                       hover:from-purple-600 hover:to-blue-600 dark:hover:from-purple-700 dark:hover:to-blue-700
                       text-white font-semibold py-3 px-5 rounded-full shadow-md 
                       dark:shadow-blue-600/50 text-lg tracking-wide
                       transition-all duration-300 mt-4"
            onClick={() => handleViewDetails(item._id)}
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default EquipmentCards;
