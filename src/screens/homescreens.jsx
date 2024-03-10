import React from "react";
import "../App.css";
import SliderPage from "../components/slider/slider";
import FeaturesData from "../components/FeaturesData/FeaturesData";
import HistoricalPlaces from "../assets/Historical-Places.png";
import Middle from "../components/Middle/Middle";

const HomeScreen = () => {
  return (
    <div>
      <SliderPage />
      <div className="GalleFort">
        <div className="section1">
          <h1 className="App-main-topic">Galle Fort</h1>

          <div class="description-box">
            <p class="description-text">
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
            </p>
          </div>
        </div>

        <Middle />

        <FeaturesData
          className="main-des"
          heading="Historical Places"
          description="Embark on a journey through time with our curated selection of historical places. From iconic landmarks to hidden gems, each destination holds a unique story waiting to be discovered. Immerse yourself in the rich tapestry of history as you explore ancient ruins, majestic castles, and sacred sites. Whether you're a history enthusiast or an avid traveler, our collection of historical places offers an unforgettable glimpse into the past and a deeper appreciation for the world's cultural heritage."
          images={[HistoricalPlaces, HistoricalPlaces]}
          location="/historicalplaces"
        />

        <FeaturesData
          className="main-des-reverse"
          heading="Support Center"
          description="Welcome to our Support Center! Our dedicated team is here to assist you with any questions, concerns, or issues you may encounter. Whether you need help navigating our services, troubleshooting technical problems, or simply seeking guidance, we're committed to providing prompt and personalized support tailored to your needs. Your satisfaction is our priority, and we strive to ensure a seamless and enjoyable experience for every customer. Feel free to reach out to us anytime – we're here to help!"
          images={[HistoricalPlaces, HistoricalPlaces]}
          location="/supportcenter"

        />


        <FeaturesData
          className="main-des"
          heading="Logical Delights"
          description="Explore the world of 'Logical Delights,' where intellect meets inspiration. Dive into thought-provoking ideas and innovative concepts that challenge the mind. From scientific discoveries to philosophical musings, join us on a journey of curiosity and exploration."
          images={[HistoricalPlaces, HistoricalPlaces]}
          location="/logicaldelights"
        />

        <FeaturesData
          className="main-des-reverse"
          heading="Beyond History"
          description="Explore the wonders of 'Beyond History,' where ancient secrets and untold stories await. Uncover the mysteries of past civilizations and embark on a journey through time. From archaeological marvels to cultural treasures, dive into the richness of human heritage and discover the stories that shape our world."
          images={[HistoricalPlaces, HistoricalPlaces]}
          location="/beyondhistory"
        />

      </div>
    </div>
  );
};

export default HomeScreen;
