"use client"

import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import Banner from "./Banner"
import EquipmentCards from "../../components/EquipmentCards"
import TopRatedProducts from "./TopRatedProducts"
import UpcomingEvents from "./UpcomingEvents"
import DealsHeroSection from "../../components/DealsHeroSection"
import NewArrivals from "./NewArrival"

const Home = () => {
  const [equipment, setEquipment] = useState([])

  // Fetch equipment data when component loads
  useEffect(() => {
    fetch("https://b10-a10-server-side-roan.vercel.app/equipment/home")
      .then((response) => response.json())
      .then((data) => {
        setEquipment(data)
      })
      .catch(() => {})
  }, [])

  return (
    <div id="home-page">
      <Helmet>
        <title>Home | SportsGear</title>
        <meta name="description" content="Welcome to SportsGear - Your one-stop shop for all sports equipment!" />
        <meta property="og:title" content="Home | SportsGear" />
        <meta
          property="og:description"
          content="Discover the latest sports gear at SportsGear. Find everything from apparel to accessories."
        />
        <meta property="og:image" content="/path/to/your/home-image.jpg" />
      </Helmet>

      {/* Hero banner section */}
      <Banner />

      {/* Main products section - scrollable from navbar */}
      <div id="products-section" className="scroll-mt-30">
        <EquipmentCards equipment={equipment} />
      </div>

      {/* Other home page sections */}
      <TopRatedProducts />
      <DealsHeroSection />
      <NewArrivals />
      <UpcomingEvents />
    </div>
  )
}

export default Home
