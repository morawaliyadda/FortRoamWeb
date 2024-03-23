import React from 'react';
import './Services.css';
import allsaints from '../../assets/services/all_saints.jpg';
import southlands from '../../assets/services/southlands.jpg';
import southlandsprimary from '../../assets/services/southlands_primary.jpg';
import mountcalvary from '../../assets/services/Mount_Calvary.jpg';
import BOC from '../../assets/services/BOC.jpg';
import peoplesbank from '../../assets/services/people\'s.jpg';
import commercialbank from '../../assets/services/commercial.jpg';
import laundry from '../../assets/services/Laundry.png';
import police from '../../assets/services/police.jpg';
import threewheel from '../../assets/services/three-wheel.jpg';
import postoffice from '../../assets/services/post-office.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const services = [
    
    {
      image: commercialbank,
      title: 'Commercial Bank',
      subtitle: 'Banking Services',
      location: 'No 22 Church Street Galle Fort',
      Hours: 'Opens 9AM to 3PM on weekdays',
      TPno : '0912234377',
    },
    {
      image: BOC,
      title: 'BOC Bank',
      subtitle: 'Banking Services',
      location: 'No. 2, Light House Street, Fort, Galle',
      Hours: 'Opens 8:30AM to 3PM on weekdays',
      TPno : '0912 234 214',
    },
    {
      image: peoplesbank,
      title: 'People\'s Bank',
      subtitle: 'Banking Services',
      location: ' No 13 Rampart St, Fort, Galle',
      Hours: 'Opens 8:30AM to 3PM on weekdays',
      TPno : '0912 232 220',
    },
    {
      image: allsaints,
      title: 'All Saints\' College',
      subtitle: 'Schools',
      location: 'No 3, 19 Lighthouse St',
      Hours: 'Opens 1.30AM to 2PM on weekdays',
      TPno : '0912 222 996',
    },
    {
      image: southlands,
      title: 'Southlands College',
      subtitle: 'Schools',
      location: '26G8+VG9, Parawa St, Galle',
      Hours: 'Opens 7AM to 2PM on weekdays',
      TPno : '0912 234 117',
    },
    {
      image: southlandsprimary ,
      title: 'Southlands College Primary Section',
      subtitle: 'Schools',
      location: '11 Rampart St, Galle',
      Hours: 'Opens 7AM to 2PM on weekdays',
      TPno : 'update soon',
    },
    {
      image: mountcalvary,
      title: 'Mount Calvary High School',
      subtitle: 'Schools',
      location: 'No. 2, 1 Templers Rd, Galle',
      Hours: 'Opens 7.30AM to 1.30PM on weekdays',
      TPno : '0912 243 489',
    },
    {
      image: laundry,
      title: 'Fabric Spa Laundry & Dry Cleaning Center',
      subtitle: 'Laundry',
      location: 'No 32, leyn baan street, Galle Fort',
      Hours: 'Opens 8AM to 5.30PM ',
      TPno : '0707772200',
    },
    {
      image: police,
      title: 'Galle Fort Police Post',
      subtitle: 'Police Station',
      location: ' 26G9+F74, Galle',
      Hours: 'Opens 24 hours',
      TPno : 'update soon',
    },
    {
      image: threewheel,
      title: 'Three-Wheel Park',
      subtitle: 'Taxi Service',
      location: '3rd cross Street, Talbot town, Galle',
      Hours: 'Opens 24 hours',
      TPno : 'update soon',
    },
    {
      image: postoffice,
      title: 'Post Office',
      subtitle: 'Post Office',
      location: 'Church Street, Galle Fort',
      Hours: 'update soon',
      TPno : 'update soon',
    },
  ];


  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.subtitle]) {
      acc[service.subtitle] = [];
    }
    acc[service.subtitle].push(service);
    return acc;
  }, {});

  return (
    <div>
      <div className="services-container">
        {Object.entries(groupedServices).map(([subtitle, services]) => (
          <div className='subsection' key={subtitle}>
            <h2>{subtitle}</h2>
          
            <div className="row">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <img src={service.image} className="service-image" alt={service.title} />
                  <div className="card-body">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">
                      <FontAwesomeIcon className='service-icon' icon={faMapMarkerAlt} /> {service.location}
                    </p>
                    <p className="card-text">
                      <FontAwesomeIcon className='service-icon' icon={faClock} /> {service.Hours}
                    </p>
                    <p className="card-text">
                      <FontAwesomeIcon className='service-icon'  icon={faPhone} /> {service.TPno}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
