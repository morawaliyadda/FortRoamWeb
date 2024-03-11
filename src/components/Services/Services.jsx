import React from 'react';
import './Services.css';
import { FaChurch , FaLandmark, FaSwimmer } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: 'Historic Fort Exploration',
      description: 'Step back in time and explore the rich history of Galle Fort, a UNESCO World Heritage Site dating back to the 16th century. Wander through cobblestone streets lined with colonial-era buildings, visit the iconic Dutch Reformed Church, and marvel at the impressive ramparts overlooking the Indian Ocean.',
      icon: <FaChurch style={{ fontSize: '3rem' }} />
    },
    {
      title: 'Cultural Immersion',
      description: 'Immerse yourself in the vibrant culture of Galle Fort. Discover local art galleries showcasing contemporary and traditional Sri Lankan artwork, stroll through bustling markets filled with spices, handicrafts, and souvenirs, and savor authentic cuisine at charming cafes and restaurants nestled within the fort walls.',
      icon: <FaLandmark   style={{ fontSize: '3rem' }} />
    },
    {
      title: 'Coastal Adventures',
      description: 'Embark on exciting coastal adventures from Galle Fort. Enjoy snorkeling or diving in crystal-clear waters teeming with colorful marine life, take a scenic boat ride along the coastline, or simply relax on pristine beaches with golden sands and swaying palm trees.',
      icon: <FaSwimmer style={{ fontSize: '3rem' }} />
    },
  ];

  return (
    <div>
      <div className="services-container"> 
        <h2 className="main-title">Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="service-card card">
                {service.icon}
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
