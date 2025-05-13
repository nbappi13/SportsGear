import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { Fade } from "react-awesome-reveal";
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
    <div className="p-6 dark:bg-gray-900">
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
              Sort
            </button>
          </div>
          <div className="overflow-x-auto">
            {equipment.map((item) => (
              <div
                key={item._id}
                className="block sm:hidden bg-white dark:bg-gray-700 dark:border-gray-800 border border-gray-200 rounded-lg shadow-lg mb-4 p-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.photoUrl}
                    alt={item.itemName}
                    className="w-24 h-24 object-cover rounded-lg" 
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg dark:text-gray-100">
                      {item.itemName}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      ${item.price}
                    </p>
                    <p className="text-sm">
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
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => handleViewDetails(item._id)}
                    className="bg-gray-800 hover:bg-gray-900 text-white dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-gray-100 py-2 px-4 rounded-lg shadow"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}

            <Fade cascade damping={0.1}>
              <table className="hidden sm:table min-w-full dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-gray-50 dark:bg-gradient-to-r dark:from-blue-500 dark:to-purple-500 dark:text-white">
                  <tr>
                    <th className="py-2 px-3 text-left">Photo</th>
                    <th className="py-2 px-2 text-left">Name</th>
                    <th className="py-2 px-2 text-left">Price</th>
                    <th className="py-2 px-3 text-left">Stock Status</th>
                    <th className="py-2 px-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {equipment.map((item) => (
                    <tr
                      key={item._id}
                      className="bg-white dark:bg-gray-700 dark:border-gray-800 border-b border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                    >
                      <td className="py-2 px-3">
                        <img
                          src={item.photoUrl}
                          alt={item.itemName}
                          className="w-40 h-40 object-cover rounded-lg"
                        />
                      </td>
                      <td className="py-2 px-2">
                        <span
                          data-tooltip-id="item-tooltip"
                          data-tooltip-content={item.description}
                          className="font-semibold dark:text-gray-100 cursor-pointer"
                        >
                          {item.itemName}
                        </span>
                        <Tooltip id="item-tooltip" />
                      </td>
                      <td className="py-2 px-2 dark:text-gray-300">
                        ${item.price}
                      </td>
                      <td className="py-2 px-3 dark:text-gray-300">
                        {item.stockStatus === "1" ? (
                          <span className="text-green-600 dark:text-green-600">
                            In Stock
                          </span>
                        ) : (
                          <span className="text-red-600 dark:text-red-600">
                            Out of Stock
                          </span>
                        )}
                      </td>
                      <td className="py-2 px-3">
                        <button
                          onClick={() => handleViewDetails(item._id)}
                          className="bg-gray-800 hover:bg-gray-900 text-white dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-gray-100 py-2 px-4 rounded-lg shadow"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Fade>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllSportsEquipment;
