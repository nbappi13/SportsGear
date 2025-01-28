import React from 'react';
import Banner from './Banner';
import EquipmentCards from '../../components/EquipmentCards';
import TopRatedProducts from './TopRatedProducts';
import UpcomingEvents from './UpcomingEvents';

const Home = () => {
  return (
    <div>
      <Banner />
      <div id="products-section">
        <EquipmentCards />
      </div>
      <TopRatedProducts />
      <UpcomingEvents />
    </div>
  );
};

export default Home;
