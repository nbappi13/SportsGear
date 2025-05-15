import { Helmet } from "react-helmet"

const AboutUs = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10">
      <Helmet>
        <title>About Us | SportsGear</title>
        <meta name="description" content="Learn more about SportsGear - your trusted sports equipment provider." />
      </Helmet>

      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">About SportsGear</h1>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Our Story</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Founded in 2010, SportsGear began with a simple mission: to provide high-quality sports equipment to
            athletes of all levels. What started as a small shop in Dhaka has grown into one of Bangladesh's premier
            destinations for sports enthusiasts.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Our founder, Amir Khan, a former national cricket player, recognized the need for reliable, affordable
            sports equipment that didn't compromise on quality. With his expertise and passion for sports, he curated a
            collection of products that met the needs of both amateur and professional athletes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300">
            At SportsGear, our mission is to inspire and enable athletic achievement through quality equipment and
            exceptional service. We believe that everyone deserves access to the tools they need to excel in their
            chosen sport, regardless of their skill level or background.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Email: info@sportsgearrrr.comm</p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Phone: +880 007 0013</p>
          <p className="text-gray-700 dark:text-gray-300">Address: 123 Sports Avenue, Nilkhet, Dhaka-1205</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
