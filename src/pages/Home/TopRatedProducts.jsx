import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TopRatedProducts = () => {
  const [topRated, setTopRated] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://b10-a10-server-side-roan.vercel.app/equipment/top-rated ")
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
    <div className="p-6 pb-16 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
        Top-rated Best Sellers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
        {topRated.slice(0, 5).map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleViewDetails(product._id)}
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 bg-white">
              <img
                src={product.photoUrl}
                alt={product.itemName}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="mt-4 text-center text-gray-900 dark:text-gray-100 font-semibold">
              {product.itemName}
            </p>
            <button
              className="mt-2 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-orange-500 transition-all duration-300"
              onClick={() => handleViewDetails(product._id)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedProducts;