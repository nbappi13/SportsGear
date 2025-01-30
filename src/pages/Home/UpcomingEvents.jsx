import React from 'react';
import { Typography, Button } from "@material-tailwind/react";

const events = [
  {
    title: "Sports Gear Sale",
    date: "March 15, 2025",
    description: "Get the best deals on sports equipment. Up to 50% off on selected items!",
  },
  {
    title: "Marathon Registration",
    date: "April 10, 2025",
    description: "Join our annual marathon and compete with the best athletes.",
  },
  {
    title: "New Product Launch",
    date: "May 5, 2025",
    description: "Be the first to experience our latest sports gear innovation.",
  }
];

const UpcomingEvents = () => {
  return (
    <div className="p-6 dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-12 text-center dark:text-gray-100">Upcoming Events</h2>
      <div className="relative max-w-4xl mx-auto">

        <div className="absolute left-1/2 w-1 h-full dark:bg-gradient-to-b dark:from-blue-500 dark:to-purple-500 transform -translate-x-1/2"></div>

        {events.map((event, index) => (
          <div 
            key={index} 
            className={`group relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}
          >

            <div 
              className={`w-1/2 p-6 dark:bg-gray-800 dark:text-gray-100 rounded-lg shadow-lg dark:hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 ${
                index % 2 === 0 ? 'text-left' : 'text-right'
              }`}
            >
              <Typography variant="h5" className="mb-3 font-semibold dark:text-gray-100">
                {event.title}
              </Typography>
              <Typography className="dark:text-blue-600 mb-4">{event.date}</Typography>
              <Typography className="dark:text-gray-300 mb-6">{event.description}</Typography>
              <Button 
                variant="gradient" 
                color="blue" 
                className="group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            <div className="absolute top-1/2 left-1/2 w-6 h-6 dark:bg-gradient-to-br dark:from-blue-500 dark:to-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;  