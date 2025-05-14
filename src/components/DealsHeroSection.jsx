"use client";
import { useNavigate } from "react-router-dom";

const DealsHeroSection = () => {
  const navigate = useNavigate();

  const handleExploreNow = () => {
    navigate("/special-deals");
  };

  return (
    <div
      className="relative w-full bg-cover bg-center py-20  md:py-28"
      style={{
        backgroundImage: `url('https://i.imgur.com/Xs6d4lc.jpeg')`,
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
         
          <div className="w-full md:w-1/2 z-10 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              There's a deal for you, too
            </h2>
            <p className="text-xl text-white mb-8">
              Don't miss a chance to save on items you've been looking for.
            </p>
            <button
              onClick={handleExploreNow}
              className="bg-blue-500 text-white hover:bg-orange-500 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Explore now
            </button>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default DealsHeroSection;
