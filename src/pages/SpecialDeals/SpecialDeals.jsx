"use client";

import { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const SpecialDeals = () => {
  const [deals, setDeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext); 
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    fetch("https://b10-a10-server-side-roan.vercel.app/special-deals ")
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Server responded with ${response.status}`);
        }
        return response.json();
      })
      .then((serverDeals) => {
        const localDeals = JSON.parse(
          localStorage.getItem("specialDeals") || "[]"
        );
        const combinedDeals = [...serverDeals];

        localDeals.forEach((localDeal) => {
          const exists = combinedDeals.some(
            (serverDeal) => serverDeal.itemName === localDeal.itemName
          );
          if (!exists) {
            combinedDeals.push(localDeal);
          }
        });

        setDeals(combinedDeals);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching from server:", error);

        const localDeals = JSON.parse(
          localStorage.getItem("specialDeals") || "[]"
        );
        if (localDeals.length > 0) {
          setDeals(localDeals);
          setIsLoading(false);
        } else {
          fetch("https://b10-a10-server-side-roan.vercel.app/equipment ")
            .then((response) => response.json())
            .then((data) => {
              const specialDeals = data.slice(0, 4).map((item) => {
                const originalPrice = Number.parseFloat(item.price);
                const discountPercent = Math.floor(Math.random() * 20) + 10;
                const discountedPrice = (
                  (originalPrice * (100 - discountPercent)) /
                  100
                ).toFixed(2);

                return {
                  ...item,
                  originalPrice: originalPrice.toFixed(2),
                  price: discountedPrice,
                };
              });

              setDeals(specialDeals);
              setIsLoading(false);
            })
            .catch((error) => {
              console.error("Error fetching equipment:", error);
              setIsLoading(false);
            });
        }
      });
  }, []);

  const handleBuyNow = (item) => {
    if (!currentUser) { 
      navigate("/login");
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Item Bought!",
      text: "Congratulations! You have successfully bought the item.",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  const handleAddToCart = (item) => {
    if (!currentUser) { 
      navigate("/login");
      return;
    }

    addToCart(item);
    Swal.fire({
      icon: "success",
      title: "Added to Cart!",
      text: "Item has been added to your cart.",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  const calculateDiscount = (originalPrice, price) => {
    const original = Number.parseFloat(originalPrice);
    const discounted = Number.parseFloat(price);
    return Math.round(((original - discounted) / original) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 md:px-8">
      <Helmet>
        <title>Special Deals | SportsGear</title>
        <meta
          name="description"
          content="Exclusive deals on premium sports equipment. Limited time offers!"
        />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          Special Deals & Offers
        </h1>

        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deals.map((item) => (
              <div
                key={item._id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-2/5 h-64 md:h-auto">
                    <img
                      src={item.photoUrl || "/placeholder.svg"}
                      alt={item.itemName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="w-full md:w-3/5 p-6 flex flex-col">
                    <div className="flex-grow">
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                        {item.itemName}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {item.description}
                      </p>

                      <div className="mb-4">
                        <div className="flex items-center">
                          <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            US ${item.price}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-500 dark:text-gray-400 line-through mr-2">
                            US ${item.originalPrice}
                          </span>
                          <span className="text-red-600 dark:text-red-400 font-semibold">
                            {calculateDiscount(item.originalPrice, item.price)}%
                            OFF
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center mb-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(Number.parseFloat(item.rating))
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
                        <span className="text-gray-600 dark:text-gray-400 ml-2">
                          ({item.rating})
                        </span>
                      </div>

                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        <p>Category: {item.categoryName}</p>
                        <p>
                          Customization:{" "}
                          {item.customization === "yes"
                            ? "Available"
                            : "Not Available"}
                        </p>
                        <p>Processing Time: {item.processingTime}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                      <button
                        onClick={() => handleBuyNow(item)}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                      >
                        Buy Now
                      </button>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecialDeals;