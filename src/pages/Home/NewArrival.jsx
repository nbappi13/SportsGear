"use client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/NewArrival.css";

const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch("https://b10-a10-server-side-roan.vercel.app/equipment/new-arrivals")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setNewArrivals(data);
        } else {
          setNewArrivals([]);
          setError(true);
        }
        setLoading(false);
      })
      .catch((error) => {
        setNewArrivals([]);
        setError(true);
        setLoading(false);
      });
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/viewdetails/${id}`);
  };

  if (loading) {
    return (
      <div className="py-12 px-4 md:px-8 bg-gray-50 dark:bg-gray-900 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">
          New Arrivals
        </h2>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 px-4 md:px-8 bg-gray-50 dark:bg-gray-900 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">
          New Arrivals
        </h2>
        <p className="text-red-500">
          Unable to load new arrivals. Please try again later.
        </p>
      </div>
    );
  }

  if (!newArrivals || newArrivals.length === 0) {
    return null;
  }

  return (
    <div className="py-12 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-8 text-gray-800 dark:text-gray-100">
        New Arrivals
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6 md:mb-10 max-w-3xl mx-auto text-sm md:text-base">
        Check out our latest additions to the collection. Be the first to get
        your hands on these fresh arrivals!
      </p>

      <div className="overflow-hidden">
        <div className="new-arrivals-container">
          {newArrivals.map((item) => (
            <div
              key={item._id}
              className="new-arrival-card bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-600 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={item.photoUrl || "/placeholder.svg"}
                  alt={item.itemName}
                  className="w-full h-32 sm:h-40 object-cover"
                />
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  NEW
                </div>
                {item.originalPrice && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {Math.round(
                      ((item.originalPrice - item.price) / item.originalPrice) *
                        100
                    )}
                    % OFF
                  </div>
                )}
              </div>

              <div className="p-3 sm:p-4 flex-grow flex flex-col">
                <h3 className="text-base sm:text-lg font-bold mb-1 text-gray-900 dark:text-gray-100 line-clamp-1">
                  {item.itemName}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-1">
                  Category: {item.categoryName}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center mb-2">
                    {item.originalPrice ? (
                      <>
                        <p className="text-gray-500 dark:text-gray-400 line-through text-xs sm:text-sm mr-2">
                          ${item.originalPrice}
                        </p>
                        <p className="text-red-600 dark:text-red-400 font-bold text-sm sm:text-base">
                          ${item.price}
                        </p>
                      </>
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300 font-bold text-sm sm:text-base">
                        ${item.price}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${
                            i < Math.floor(item.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
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
                             text-white font-semibold py-1.5 sm:py-2 px-4 rounded-full shadow-md 
                             dark:shadow-blue-600/50 text-xs sm:text-sm tracking-wide
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
      </div>
    </div>
  );
};

export default NewArrivals;
