import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Banner from "./Banner";
import EquipmentCards from "../../components/EquipmentCards";
import TopRatedProducts from "./TopRatedProducts";
import UpcomingEvents from "./UpcomingEvents";

const Home = () => {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/equipment/home") 
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Equipment for Home Page:", data);
        setEquipment(data);
      })
      .catch((error) => console.error("Error fetching equipment:", error));
  }, []);

  return (
    <div id="home-page">
      <Helmet>
        <title>Home | SportsGear</title>
        <meta name="description" content="Welcome to SportsGear - Your one-stop shop for all sports equipment!" />
        <meta property="og:title" content="Home | SportsGear" />
        <meta property="og:description" content="Discover the latest sports gear at SportsGear. Find everything from apparel to accessories." />
        <meta property="og:image" content="/path/to/your/home-image.jpg" />
      </Helmet>
      <Banner />
    
      <div id="products-section" className="scroll-mt-30">
        <EquipmentCards equipment={equipment} />
      </div>
      <TopRatedProducts />
      <UpcomingEvents />
    </div>
  );
};

export default Home;
