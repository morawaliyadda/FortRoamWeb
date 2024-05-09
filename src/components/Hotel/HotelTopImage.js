import React from 'react';
import FortPrinters from '../../assets/HotelPhoto/fortprinters.jpg';
import FortPrinters2 from '../../assets/HotelPhoto/fortprinters2.jpg';
import "./HotelTopImage.css";
import TextBox from './TextBox';
import HotelCard from './HotelCard';
import { motion, useAnimation } from "framer-motion";



const HotelTopImage = () => (
  

  <div>
    <div className='header-detailpage'>
      <img src={FortPrinters} className='main-image-detailpage' alt="The Fort Printers"></img>
    </div>

    <div className='title-container-detailpage'>
      <h1 className='title-detailpage'>The Fort Printers</h1>
    </div>

    <div className='section-detailpage'>
      <TextBox />
      <img src={FortPrinters2} className='image2-detailpage' alt="Fort Printers 2"></img>
    </div>

    <div className='title-container2-detailpage'>
      <h1 className='title-detailpage'>Our Services</h1>
    </div>


    <div className='section-detailpage'>
    <HotelCard
        title="Accomodation"
        subtitle="Subtitle 1"
        description="Description for Card 1. Some quick example text to build on the card title and make up the bulk of the card's content."
        link1="#"
        link2="#"
      />
      <HotelCard
        title="39 Bistro, Coffee & Wine Bar"
        subtitle="Breakfast, lunch & dinner
        Mon - Sun, 8am - 10pm"
        description="Fresh and vibrant dining using predominantly fresh seafood and organic, local produce. "
        link1="#"
        link2="#"
      />



    </div>
  </div>
);

export default HotelTopImage;
