import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

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
        // Handle error silently
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {topRated.map((product, index) => (
          <div
            key={index}
            className="group relative rounded-full overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 mx-auto"
            style={{ width: "250px", height: "250px" }}
          >
            <img
              src={product.photoUrl}
              alt={product.itemName}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 dark:bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300 rounded-full">
              <Button
                variant="gradient"
                color="blue"
                onClick={() => handleViewDetails(product._id)}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                View Details
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 text-center p-4 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 group-hover:bg-opacity-100 transition-all duration-300">
              <Typography
                variant="h5"
                className="font-semibold text-gray-900 dark:text-gray-100"
              >
                {product.itemName}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedProducts;
