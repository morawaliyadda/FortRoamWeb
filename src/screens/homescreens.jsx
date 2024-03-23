import React from "react";
import "../App.css";
import FeaturesData from "../components/FeaturesData/FeaturesData";
import HistoricalPlaces1 from "../assets/Historical-Places.png";
import HistoricalPlaces2 from "../assets/placeImages/maritime_museum.jpg";
import LocalDelights1 from "../assets/placeImages/bartizan_hotel.jpg";
import LocalDelights2 from "../assets/placeImages/kkboutique_shop.jpg";
import BeyondHistory1 from "../assets/placeImages/sithuvili_gallery.jpg";
import BeyondHistory2 from "../assets/placeImages/walking_path.jpg";
import services1 from "../assets/services/Laundry.png";
import services2 from "../assets/services/BOC.jpg";
import Badges from "../components/Badges/Badges";
import PopularPlaces from "../components/PopularPlaces/PopularPlaces";
import mainvedio from '../assets/frontvedio.mp4';
import { motion } from "framer-motion";


const HomeScreen = () => {

  const variant = {
    visible: { scale: 1, opacity: 1 },
    hidden: { scale: 0, opacity: 0 }
  }
  const transitionTime = {
    duration: 0.6,
    ease: "easeInOut",
  };

  return (
    <div>

      <div className='main-video'>
        <video className="video-bg" autoPlay loop muted>
          <source src={mainvedio} type="video/mp4" />
        </video>
        <h1 className="App-main-topic">Galle Fort</h1>
      </div>

      <div className="GalleFort">
        <div class="description-box">
          <motion.p class="description-text"
            variants={variant}
            initial="hidden"
            whileInView="visible"
            transition={transitionTime}>
            Galle Fort, located in the southern coast of Sri Lanka, is a UNESCO
            World Heritage Site renowned for its historical significance,
            architectural beauty, and cultural charm. Originally built by the
            Portuguese in the 16th century, it was later fortified by the Dutch
            during the 17th century, reflecting a blend of European
            architectural styles.This fortified city served as a strategic hub
            for trade and defense, witnessing centuries of colonial influence
            and maritime commerce. Today, Galle Fort stands as a living
            testament to Sri Lanka's colonial past, with its well-preserved
            ramparts, cobblestone streets, and colonial-era buildings.
          </motion.p>
        </div>


        <Badges />
        <PopularPlaces />

        <FeaturesData
          className="main-des"
          heading="Historical Places"
          description="Embark on a journey through time with our curated selection of historical places. From iconic landmarks to hidden gems, each destination holds a unique story waiting to be discovered. Immerse yourself in the rich tapestry of history as you explore ancient ruins, majestic castles, and sacred sites. Whether you're a history enthusiast or an avid traveler, our collection of historical places offers an unforgettable glimpse into the past and a deeper appreciation for the world's cultural heritage."
          images={[HistoricalPlaces1, HistoricalPlaces2]}
          location="/historicalplaces"
        />
        <FeaturesData
          className="main-des-reverse"
          heading="Local Delights"
          description="Explore the world of 'Logical Delights,' where intellect meets inspiration. Dive into thought-provoking ideas and innovative concepts that challenge the mind. From scientific discoveries to philosophical musings, join us on a journey of curiosity and exploration."
          images={[LocalDelights1, LocalDelights2]}
          location="/localdelights"
        />

        <FeaturesData
          className="main-des"
          heading="Beyond History"
          description="Explore the wonders of 'Beyond History,' where ancient secrets and untold stories await. Uncover the mysteries of past civilizations and embark on a journey through time. From archaeological marvels to cultural treasures, dive into the richness of human heritage and discover the stories that shape our world."
          images={[BeyondHistory1, BeyondHistory2]}
          location="/beyondhistory"
        />
         <FeaturesData
          className="main-des-reverse"
          heading="Services"
          description="Welcome to our Services! Our team is ready to assist with any inquiries, troubleshooting, or guidance you need. Count on us for prompt, personalized support tailored to your requirements. Your satisfaction is our priority. Reach out anytime – we're here to help!"
          images={[services1, services2]}
          location="/services"

        />

      </div>

    </div>
  );
};

export default HomeScreen;
