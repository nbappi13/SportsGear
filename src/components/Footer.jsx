import { useLocation, Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  return (
    <footer
      className={`${isHomePage ? "bg-indigo-600" : "bg-yellow-700"} dark:bg-gray-800 w-full py-12 transition-colors duration-500`}
    >
      <div className="container mx-auto px-4">
        <div className="md:flex md:items-center md:justify-between">
          <div className="mb-6 md:mb-0">
            <img
              src="/SportsGear logo.png"
              alt="SportsGear Logo"
              className="h-12 w-12 mb-4 filter dark:(invert 100%) brightness-150"
            />
            <h1 className="font-bold text-3xl text-white dark:text-white tracking-wide">SportsGear</h1>
          </div>
          <div className="md:flex md:space-x-16 md:ml-[-60px]">
            <div className="mb-6 md:mb-0">
              <h2 className="font-bold text-lg mb-4 text-white dark:text-white">Contact Us</h2>
              <p className="text-white dark:text-white">
                Email:{" "}
                <a href="mailto:info@sportsgear.com" className="hover:underline">
                  info@sportsgearrrr.comm
                </a>
              </p>
              <p className="text-white dark:text-white mt-2">Phone: +880 007 0013</p>
              <p className="text-white dark:text-white mt-2">Address: 123 Sports Avenue, Nilkhet, Dhaka-1205</p>
            </div>
            <div className="mb-6 md:mb-0 md:ml-[-40px]">
              <h2 className="font-bold text-lg mb-4 text-white dark:text-white">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-white dark:text-white hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-white dark:text-white hover:underline"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-white dark:text-white hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-lg mb-4 text-white dark:text-white">Follow Us</h2>
              <div className="flex space-x-6 text-white dark:text-gray-200">
                <a
                  href="https://facebook.com"
                  className="flex items-center text-2xl hover:text-blue-500 transition-colors duration-200"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  className="flex items-center text-2xl hover:text-blue-400 transition-colors duration-200"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com"
                  className="flex items-center text-2xl hover:text-pink-500 transition-colors duration-200"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com"
                  className="flex items-center text-2xl hover:text-blue-700 transition-colors duration-200"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center pt-8 border-t dark:border-gray-600 border-white dark:border-gray-600">
          <p className="text-white dark:text-gray-200 text-sm">
            &copy; {new Date().getFullYear()} SportsGear. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
