"use client";
import { useNavigate } from "react-router-dom";
import "../styles/EquipmentCards.css"; 

const EquipmentCards = ({ equipment }) => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/viewdetails/${id}`);
  };

  const handleSeeMore = () => {
    navigate("/all-sports-equipment");
  };

 
  const displayedEquipment = equipment.slice(0, 10);

  return (
    <div className="py-12 px-4 md:px-8 bg-gray-100 dark:bg-gray-800">
     
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        EXPLORE YOUR INTEREST
      </h2>

     
      <div className="equipment-grid max-w-full mx-auto">
        {displayedEquipment.map((item) => (
          <div
            key={item._id}
            className="equipment-card dark:bg-gray-700 dark:border-gray-600"
          >
            <div className="relative">
              <img
                src={item.photoUrl || "/placeholder.svg"}
                alt={item.itemName}
                className="w-full h-40 object-cover"
              />
              {item.originalPrice && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {Math.round(
                    ((item.originalPrice - item.price) / item.originalPrice) * 100
                  )}
                  % OFF
                </div>
              )}
            </div>

            <div className="p-4 flex-grow flex flex-col">
              <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-gray-100 line-clamp-1">
                {item.itemName}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                Category: {item.categoryName}
              </p>

              <div className="mt-auto">
                <div className="flex items-center mb-2">
                  {item.originalPrice ? (
                    <>
                      <p className="text-gray-500 dark:text-gray-400 line-through text-sm mr-2">
                        ${item.originalPrice}
                      </p>
                      <p className="text-red-600 dark:text-red-400 font-bold">${item.price}</p>
                    </>
                  ) : (
                    <p className="text-gray-700 dark:text-gray-300 font-bold">${item.price}</p>
                  )}
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(item.rating) ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                    ({item.rating})
                  </span>
                </div>

                <button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600
                             hover:from-purple-600 hover:to-blue-600 dark:hover:from-purple-700 dark:hover:to-blue-700
                             text-white font-semibold py-2 px-4 rounded-full shadow-md 
                             dark:shadow-blue-600/50 text-sm tracking-wide
                             transition-all duration-300"
                  onClick={() => handleViewDetails(item._id)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

   
      <div className="flex justify-center mt-10">
        <button
          onClick={handleSeeMore}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600
                   text-white font-bold py-3 px-8 rounded-full shadow-lg
                   transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default EquipmentCards;
