
import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const footerColor = isHomePage ? 'bg-gray-800' : 'bg-blue-600';

  return (
    <footer className={`${footerColor} text-white py-8`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
          <img src="/SportsGear logo.png" alt="SportsGear Logo" className="h-12 w-12 mb-2" />
          <h1 className="font-bold text-2xl">SportsGear</h1>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
          <div>
            <h2 className="font-bold text-lg">Contact Us</h2>
            <p>Email: info@sportsgear.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Sports Avenue, Sportstown, ST 45678</p>
          </div>
          <div>
            <h2 className="font-bold text-lg">Follow Us</h2>
            <div className="flex space-x-4 mt-2 justify-center md:justify-start">
              <a href="https://facebook.com" className="hover:text-blue-500"><FaFacebookF /></a>
              <a href="https://twitter.com" className="hover:text-blue-400"><FaTwitter /></a>
              <a href="https://instagram.com" className="hover:text-pink-500"><FaInstagram /></a>
              <a href="https://linkedin.com" className="hover:text-blue-700"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2025 SportsGear. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
