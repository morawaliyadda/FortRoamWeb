import React from "react";
import "../App.css";
import CardData from "../components/CardStyle/CardStyle";
import HistoricalPlace from "../assets/Historical-Places.png";


const HistoricalPlaces = () => {
    return(
        
        <div>  
            <h1 className="historicalPlaces-heading">Historical Insights</h1>
            <div className="categorical-data">
               <h1>Categiry1</h1>
                <CardData
                image={HistoricalPlace}
                heading="Name1"
                description="Description1"
                />
                 <CardData
                image={HistoricalPlace}
                heading="Name2"
                description="Description2"
                />
                 <CardData
                image={HistoricalPlace}
                heading="Name3"
                description="Description3"
                />
            </div>
        </div>
    )

};

export default HistoricalPlaces;