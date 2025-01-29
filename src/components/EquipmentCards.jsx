import React from 'react';
import { useNavigate } from 'react-router-dom';

const EquipmentCards = ({ equipment }) => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/viewdetails/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {equipment.map(item => (
        <div
          key={item._id}
          className="card shadow-md bg-white p-4 rounded-lg transform hover:scale-105 transition-transform duration-300"
        >
          <img src={item.photoUrl} alt={item.itemName} className="w-full h-40 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2">{item.itemName}</h3>
          <p className="text-gray-600 mb-2">Category: {item.categoryName}</p>
          <p className="text-gray-600 mb-2">Price: ${item.price}</p>
          <p className="text-gray-600 mb-2">Rating: {item.rating}</p>
          <button
            className="btn btn-primary mt-2"
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
