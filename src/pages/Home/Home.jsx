"use client"

import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import Banner from "./Banner"
import EquipmentCards from "../../components/EquipmentCards"
import TopRatedProducts from "./TopRatedProducts"
import UpcomingEvents from "./UpcomingEvents"
import DealsHeroSection from "../../components/DealsHeroSection"

const Home = () => {
  const [equipment, setEquipment] = useState([])

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
      <Banner />

      <div id="products-section" className="scroll-mt-30">
        <EquipmentCards equipment={equipment} />
      </div>
      <TopRatedProducts />
      <DealsHeroSection />
      <UpcomingEvents />
    </div>
  )
}

export default Home
