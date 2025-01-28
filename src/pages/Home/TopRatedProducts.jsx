import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

const TopRatedProducts = () => {
  const [topRated, setTopRated] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/equipment/top-rated')
      .then(response => response.json())
      .then(data => {
        console.log("Fetched Top-Rated Products:", data);
        setTopRated(data);
      })
      .catch(error => console.error('Error fetching top-rated products:', error));
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/viewdetails/${id}`);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-gray-100 via-white to-gray-100">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Top-rated Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topRated.map((product, index) => (
          <Card key={index} className="shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-full overflow-hidden" style={{ width: '250px', height: '350px' }}>
            <div className="relative">
              <img 
                src={product.photoUrl} 
                alt={product.itemName} 
                className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300 rounded-full" 
              />
            </div>
            <CardBody className="text-center p-4">
              <Typography variant="h5" className="mb-2 font-semibold text-gray-900">{product.itemName}</Typography>
            </CardBody>
            <CardFooter className="text-center">
              <Button 
                variant="gradient" 
                color="blue" 
                fullWidth 
                className="hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition-colors duration-300"
                onClick={() => handleViewDetails(product._id)}
              >
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TopRatedProducts;
