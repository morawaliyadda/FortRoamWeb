import React from "react";
import './Aboutcards.css';

const AboutUs = () => {
    return (
      <div class="support-center">
        <div className="box">
          <h2>Our Vision</h2>
          <p>
            To create a smart, user-friendly mobile platform that enriches the
            cultural and historical experience of Galle Fort, making it a
            globally recognized, accessible, and immersive heritage destination
            for every visitor.
          </p>
        </div>
        <div className="box">
          <h2>Our Mission</h2>
          <p>
            To build a mobile application that makes it easier and more
            enjoyable for tourists and visitors to explore Galle Fort. The app
            provides simple navigation, useful information, and interesting
            details about the history and culture of the fort, helping people
            discover and appreciate its true value. At the same time, it
            connects visitors with local businesses and services, creating a
            more convenient and memorable experience while supporting the
            community.
          </p>
        </div>
      </div>
    );
};
export default AboutUs;
