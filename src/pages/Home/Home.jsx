import React, { useState, useEffect } from "react";
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
    <div>
      <Banner />
      <div id="products-section">
        <EquipmentCards equipment={equipment} /> 
      </div>
      <TopRatedProducts />
      <UpcomingEvents />
    </div>
  );
};

export default Home;