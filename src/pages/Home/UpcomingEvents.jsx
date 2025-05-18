import React, { useState } from "react";
import { Typography, Button } from "@material-tailwind/react";

const events = [
  {
    title: "Sports Gear Sale",
    location: "Downtown Sports Arena",
    arrangedBy: "SportsGear Inc.",
    description:
      "Get the best deals on sports equipment. Up to 50% off on selected items!",
  },
  {
    title: "Marathon Registration",
    location: "City Park",
    arrangedBy: "Marathon Club",
    description: "Join our annual marathon and compete with the best athletes.",
  },
  {
    title: "New Product Launch",
    location: "Tech Expo Center",
    arrangedBy: "SportsGear Innovations",
    description:
      "Be the first to experience our latest sports gear innovation.",
  },
];

const UpcomingEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getUpcomingDateAndTime = (index) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 7 + index); 
    const hours = 10 + index; 
    const minutes = index % 2 === 0 ? "00" : "30"; 
    const time = `${hours % 24}:${minutes} ${hours >= 12 ? "PM" : "AM"}`;
    return { date: currentDate.toDateString(), time };
  };

  const handleLearnMore = (event, index) => {
    const { date, time } = getUpcomingDateAndTime(index);
    setSelectedEvent({
      ...event,
      date,
      time,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="p-6 bg-gray-200 dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-12 text-center dark:text-gray-100">
        Upcoming Events
      </h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 w-1 h-full dark:bg-gradient-to-b dark:from-blue-500 dark:to-purple-500 transform -translate-x-1/2"></div>

        {events.map((event, index) => (
          <div
            key={index}
            className={`group relative flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } mb-12`}
          >
            <div
              className={`w-1/2 p-6 bg-white dark:bg-gray-800 dark:text-gray-100 rounded-lg shadow-lg dark:hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 ${
                index % 2 === 0 ? "text-left" : "text-right"
              }`}
            >
              <Typography
                variant="h5"
                className="mb-3 font-semibold dark:text-gray-100"
              >
                {event.title}
              </Typography>
              <Typography className="dark:text-gray-300 mb-6">
                {event.description}
              </Typography>
              <Button
                variant="filled"
                color="blue"
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-orange-500 transition-all duration-300"
                onClick={() => handleLearnMore(event, index)}
              >
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
            <button
              className="absolute top-4 right-4 text-red-500 hover:text-red-700 text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <Typography
              variant="h4"
              className="mb-4 font-bold text-gray-900 dark:text-gray-100"
            >
              {selectedEvent.title}
            </Typography>
            <Typography className="mb-2 text-gray-700 dark:text-gray-300">
              <strong>Date:</strong> {selectedEvent.date}
            </Typography>
            <Typography className="mb-2 text-gray-700 dark:text-gray-300">
              <strong>Time:</strong> {selectedEvent.time}
            </Typography>
            <Typography className="mb-2 text-gray-700 dark:text-gray-300">
              <strong>Location:</strong> {selectedEvent.location}
            </Typography>
            <Typography className="mb-4 text-gray-700 dark:text-gray-300">
              <strong>Arranged By:</strong> {selectedEvent.arrangedBy}
            </Typography>
            <Typography className="text-gray-700 dark:text-gray-300">
              {selectedEvent.description}
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;