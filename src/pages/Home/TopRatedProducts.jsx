import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TopRatedProducts = () => {
  const [topRated, setTopRated] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://b10-a10-server-side-roan.vercel.app/equipment/top-rated")
      .then((response) => response.json())
      .then((data) => {
        setTopRated(data);
      })
      .catch(() => {
        
      });
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/viewdetails/${id}`);
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
        Top-rated Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
        {topRated.slice(0, 5).map((product, index) => (
          <div
            key={index}
            className="group flex flex-col items-center cursor-pointer"
            onClick={() => handleViewDetails(product._id)}
          >
         
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 bg-white">
              <img
                src={product.photoUrl}
                alt={product.itemName}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
           
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100 bg-opacity-10 group-hover:bg-opacity-30 transition-all duration-300 rounded-full">
                <button className="opacity-0 group-hover:opacity-100 text-white bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full transition-opacity duration-300">
                  View Details
                </button>
              </div>
            </div>
          
            <p className="mt-4 text-center text-gray-900 dark:text-gray-100 font-semibold">
              {product.itemName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedProducts;
