import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import SliderPage from "../components/slider/slider";
import FeaturesData from "../components/FeaturesData/FeaturesData";
import HistoricalPlaces from "../assets/Historical-Places.png";

const HomeScreen = () => {
  return (
    <div>
      <SliderPage />
      <div className="GalleFort">
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
          <p class="description-text">
            Visitors to Galle Fort can explore its narrow alleys lined with
            boutique shops, art galleries, cafes, and museums. The fort's iconic
            landmarks include the Galle Lighthouse, Dutch Reformed Church, and
            the Old Dutch Hospital, which have been repurposed into vibrant
            cultural spaces.Galle Fort's picturesque setting along the Indian
            Ocean, coupled with its rich history and architectural splendor,
            makes it a must-visit destination for travelers seeking to delve
            into Sri Lanka's diverse heritage and experience its enchanting
            coastal beauty.
          </p>
        </div>
        <div class="read-more-button">
          <Link to="/activity">Read More</Link>
        </div>
        <FeaturesData
          className="main-des"
          heading="Historical Places"
          description="Nestled on the southern coast of Sri Lanka, Galle Fort stands as a
        testament to the island's rich history and cultural diversity.
        This fortified city, with its blend of European, Asian, and Arabic
        influences, tells a captivating story of centuries gone by. Begin
        your journey through Galle Fort at the imposing Galle Lighthouse,
        a symbol of maritime heritage that has guided sailors for
        generations. As you wander through the cobblestone streets, you'll
        encounter a treasure trove of colonial architecture, from the
        grand mansions of the Dutch East India Company officials to the
        quaint cafes housed in centuries-old buildings.Step into the past
        as you explore the meticulously preserved Dutch Reformed Church,
        with its striking gabled facade and tranquil interior. Nearby, the
        Maritime Museum offers a fascinating glimpse into the seafaring
        history of Sri Lanka, showcasing artifacts and exhibits that
        chronicle the island's maritime trade routes and naval prowess."
          images={[HistoricalPlaces, HistoricalPlaces]}
          location="/historicalplaces"
        />

        <FeaturesData
          className="main-des-reverse"
          heading="Support Center"
          description="Nestled on the southern coast of Sri Lanka, Galle Fort stands as a
          testament to the island's rich history and cultural diversity.
          This fortified city, with its blend of European, Asian, and Arabic
          influences, tells a captivating story of centuries gone by. Begin
          your journey through Galle Fort at the imposing Galle Lighthouse,
          a symbol of maritime heritage that has guided sailors for
          generations. As you wander through the cobblestone streets, you'll
          encounter a treasure trove of colonial architecture, from the
          grand mansions of the Dutch East India Company officials to the
          quaint cafes housed in centuries-old buildings.Step into the past
          as you explore the meticulously preserved Dutch Reformed Church,
          with its striking gabled facade and tranquil interior. Nearby, the
          Maritime Museum offers a fascinating glimpse into the seafaring
          history of Sri Lanka, showcasing artifacts and exhibits that
          chronicle the island's maritime trade routes and naval prowess."
          images={[HistoricalPlaces, HistoricalPlaces]}
          location="/supportcenter"
        />

        <FeaturesData
          className="main-des"
          heading="Logical Delights"
          description="Nestled on the southern coast of Sri Lanka, Galle Fort stands as a
        testament to the island's rich history and cultural diversity.
        This fortified city, with its blend of European, Asian, and Arabic
        influences, tells a captivating story of centuries gone by. Begin
        your journey through Galle Fort at the imposing Galle Lighthouse,
        a symbol of maritime heritage that has guided sailors for
        generations. As you wander through the cobblestone streets, you'll
        encounter a treasure trove of colonial architecture, from the
        grand mansions of the Dutch East India Company officials to the
        quaint cafes housed in centuries-old buildings.Step into the past
        as you explore the meticulously preserved Dutch Reformed Church,
        with its striking gabled facade and tranquil interior. Nearby, the
        Maritime Museum offers a fascinating glimpse into the seafaring
        history of Sri Lanka, showcasing artifacts and exhibits that
        chronicle the island's maritime trade routes and naval prowess."
          images={[HistoricalPlaces, HistoricalPlaces]}
          location="/logicaldelights"
        />

        <FeaturesData
          className="main-des-reverse"
          heading="Beyond History"
          description="Nestled on the southern coast of Sri Lanka, Galle Fort stands as a
          testament to the island's rich history and cultural diversity.
          This fortified city, with its blend of European, Asian, and Arabic
          influences, tells a captivating story of centuries gone by. Begin
          your journey through Galle Fort at the imposing Galle Lighthouse,
          a symbol of maritime heritage that has guided sailors for
          generations. As you wander through the cobblestone streets, you'll
          encounter a treasure trove of colonial architecture, from the
          grand mansions of the Dutch East India Company officials to the
          quaint cafes housed in centuries-old buildings.Step into the past
          as you explore the meticulously preserved Dutch Reformed Church,
          with its striking gabled facade and tranquil interior. Nearby, the
          Maritime Museum offers a fascinating glimpse into the seafaring
          history of Sri Lanka, showcasing artifacts and exhibits that
          chronicle the island's maritime trade routes and naval prowess."
          images={[HistoricalPlaces, HistoricalPlaces]}
          location="/beyondhistory"
        />

      </div>
    </div>
  );
};

export default HomeScreen;
