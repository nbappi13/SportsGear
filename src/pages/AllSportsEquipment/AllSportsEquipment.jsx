import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { Fade } from "react-awesome-reveal";
import LoadingSpinner from "../../components/LoadingSpinner";

const AllSportsEquipment = () => {
  const [equipment, setEquipment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [transitionTime, setTransitionTime] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    setTransitionTime(Date.now());

    fetch("http://localhost:5000/equipment")
      .then((response) => response.json())
      .then((data) => {
        if (mounted && transitionTime + 1500 <= Date.now()) {
          setEquipment(data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching equipment:", error);
        if (mounted) {
          setIsLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/viewdetails/${id}`);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-gray-100 via-white to-gray-100">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
            All Sports Equipment
          </h2>
          <div className="overflow-x-auto">
            <Fade cascade damping={0.1}>
              <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Photo</th>
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4 text-left">Category</th>
                    <th className="py-3 px-4 text-left">Price</th>
                    <th className="py-3 px-4 text-left">Rating</th>
                    <th className="py-3 px-4 text-left">Customization</th>
                    <th className="py-3 px-4 text-left">Stock Status</th>
                    <th className="py-3 px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {equipment.map((item) => (
                    <tr
                      key={item._id}
                      className="border-b hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="py-3 px-4">
                        <img
                          src={item.photoUrl}
                          alt={item.itemName}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <span
                          data-tooltip-id="item-tooltip"
                          data-tooltip-content={item.description}
                          className="font-semibold text-gray-900 cursor-pointer"
                        >
                          {item.itemName}
                        </span>
                        <Tooltip id="item-tooltip" />
                      </td>
                      <td className="py-3 px-4 text-gray-700">{item.categoryName}</td>
                      <td className="py-3 px-4 text-gray-700">${item.price}</td>
                      <td className="py-3 px-4 text-gray-700">{item.rating} ⭐</td>
                      <td className="py-3 px-4 text-gray-700">
                        {item.customization === "yes" ? "Yes" : "No"}
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {item.stockStatus === "1" ? (
                          <span className="text-green-600">In Stock</span>
                        ) : (
                          <span className="text-red-600">Out of Stock</span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => handleViewDetails(item._id)}
                          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
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
        </>
      )}
    </div>
  );
};

export default AllSportsEquipment;