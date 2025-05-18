import React, { useState, useEffect } from "react";
import overlappingImage1 from "../../assets/overlapping-image1.avif";
import overlappingImage2 from "../../assets/overlapping-image2.png";
import sliderImage1 from "../../assets/slider-image1.jpg";
import sliderImage2 from "../../assets/slider-image2.jpg";
import sliderImage3 from "../../assets/slider-image3.jpg";
import sliderImage4 from "../../assets/slider-image4.jpg";
import sliderImage5 from "../../assets/slider-image5.jpg";
import sliderImage6 from "../../assets/slider-image6.jpg";
import "../../styles/Banner.css";

const Banner = () => {
  const sliderImages = [sliderImage1, sliderImage2, sliderImage3, sliderImage4, sliderImage5, sliderImage6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const handleBrowseClick = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-stretch bg-gray-50 relative" style={{ height: '79vh' }}>
      <div className="relative w-full lg:w-1/2 h-full flex items-start justify-start hidden xl:block">
        <img
          src={overlappingImage2}
          alt="Overlapping Image 2"
          className="banner-img-overlay"
        />
      </div>
      <div className="relative w-full lg:w-full h-full flex-grow">
        <div className="banner-slider absolute inset-0">
          <img
            src={sliderImages[currentIndex]}
            alt={`Slider ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="banner-content absolute inset-0 flex items-center justify-center text-center">
            <div className="space-y-6 p-6">
              <h2 className="text-4xl font-bold text-white shadow-text">Shop is fun 😸</h2>
              <p className="text-lg text-white shadow-text">
                Browse our quality product collection and enjoy the best quality.
              </p>
              <button 
                onClick={handleBrowseClick}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-orange-500 transition-all duration-300 hover:scale-105"
              >
                Browse Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-start justify-start xl:block lg:hidden md:hidden sm:hidden">
        <img
          src={overlappingImage1}
          alt="Overlapping Image 1"
          className="banner-img-main"
        />
      </div>
    </div>
  );
};

export default Banner;