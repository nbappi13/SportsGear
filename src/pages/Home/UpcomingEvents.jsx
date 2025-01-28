
import React from 'react';
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

const events = [
  {
    title: "Sports Gear Sale",
    date: "March 15, 2025",
    description: "Get the best deals on sports equipment. Up to 50% off on selected items!",
    imageUrl: "https://i.imgur.com/6B3XI4Q.jpg"
  },
  {
    title: "Marathon Registration",
    date: "April 10, 2025",
    description: "Join our annual marathon and compete with the best athletes.",
    imageUrl: "https://i.imgur.com/6B3XI4Q.jpg"
  },
  {
    title: "New Product Launch",
    date: "May 5, 2025",
    description: "Be the first to experience our latest sports gear innovation.",
    imageUrl: "https://i.imgur.com/6B3XI4Q.jpg"
  }
];

const UpcomingEvents = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-gray-100 via-white to-gray-100">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Upcoming Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <Card key={index} className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover rounded-t-lg" />
            <CardBody className="p-6">
              <Typography variant="h5" className="mb-3 font-semibold text-gray-900">{event.title}</Typography>
              <Typography className="text-blue-600 mb-4">{event.date}</Typography>
              <Typography className="text-gray-700 mb-6">{event.description}</Typography>
              <Button variant="gradient" color="blue" fullWidth>Learn More</Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
