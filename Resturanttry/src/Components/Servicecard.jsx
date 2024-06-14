import React from 'react';
import './ServiceCards.css';

const services = [
  {
    title: "Educational Courses and Workshops",
    description: "Interactive coding classes, robotics workshops, and STEM lessons tailored for children."
  },
  {
    title: "Online Learning Platform",
    description: "Engaging online lessons, virtual classrooms, and educational games to enhance learning."
  },
  {
    title: "Technology Products",
    description: "Educational software and tech kits that make learning fun and interactive."
  },
  {
    title: "Support and Resources",
    description: "Comprehensive tech guides, tutorials, and dedicated customer support."
  },
  {
    title: "Consultation Services",
    description: "Tech integration consulting for schools and parental guidance for home support."
  },
  {
    title: "Community and Collaboration",
    description: "Online forums, collaborative platforms, and hackathons for students."
  },
  {
    title: "Career Guidance",
    description: "Future tech career workshops and mentorship programs with industry experts."
  },
  {
    title: "Tech News and Updates",
    description: "Regular newsletters and blog posts on the latest tech trends and educational insights."
  },
  {
    title: "Custom Solutions",
    description: "Tailored tech solutions for educational institutions and corporate training programs."
  },
];

const ServiceCards = () => {
  return (
    <div className="container">
      <h1>Our Services</h1>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
