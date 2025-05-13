import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

const AllSportsEquipment = () => {
  const [equipment, setEquipment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch("https://b10-a10-server-side-roan.vercel.app/equipment")
      .then((response) => response.json())
      .then((data) => {
        setEquipment(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/viewdetails/${id}`);
  };

  const handleSortByPrice = () => {
    const sortedEquipment = [...equipment].sort((a, b) => {
      return parseFloat(a.price) - parseFloat(b.price);
    });
    setEquipment(sortedEquipment);
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900">
      {" "}
     
      <Helmet>
        <title>All Sports Equipment | SportsGear</title>
        <meta
          name="description"
          content="Browse our full range of sports equipment categorized by type and brand."
        />
        <meta property="og:title" content="All Sports Equipment | SportsGear" />
        <meta
          property="og:description"
          content="Explore our extensive collection of sports gear."
        />
        <meta
          property="og:image"
          content="/path/to/your/all-equipment-image.jpg"
        />
      </Helmet>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <h2 className="text-4xl font-bold mb-6 text-center dark:text-gray-100">
            All Sports Equipment
          </h2>
          <div className="flex justify-end mb-4">
            <button
              onClick={handleSortByPrice}
              className="bg-gray-800 hover:bg-gray-900 text-white dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-gray-100 py-2 px-4 rounded-lg shadow"
            >
              Sort by Price
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {equipment.map((item) => (
              <div
                key={item._id}
                className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg p-4"
              >
                <img
                  src={item.photoUrl}
                  alt={item.itemName}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-lg dark:text-gray-100">
                  {item.itemName}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  ${item.price}
                </p>
                <p className="text-sm mb-4">
                  {item.stockStatus === "1" ? (
                    <span className="text-green-600 dark:text-green-600">
                      In Stock
                    </span>
                  ) : (
                    <span className="text-red-600 dark:text-red-600">
                      Out of Stock
                    </span>
                  )}
                </p>
                <button
                  onClick={() => handleViewDetails(item._id)}
                  className="bg-gray-800 hover:bg-gray-900 text-white dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-gray-100 py-2 px-4 rounded-lg shadow w-full"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllSportsEquipment;
