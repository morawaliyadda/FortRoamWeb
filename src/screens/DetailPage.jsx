import React from "react";
import HotelTopImage from '../components/Hotel/HotelTopImage'


const DetailPage = () => {
    return (
        <div>
            <HotelTopImage/>
        </div>
    );
};

export default DetailPage;



// import React from "react";
// import data from "../components/places/places.jsx";

// const DetailPage = ({ match }) => {
//     // Extracting place id from URL params
//     const { id } = match.params;
//     // Fetching place details based on the id
//     // For example, you can fetch the details from your data or API
//     const placeDetails = data.place.find(place => place.id === id);

//     return (
//         <div className="detail-page">
//             <h2>{placeDetails.title}</h2>
//             <img src={require(`../assets/placeImages/${placeDetails.image}`)} alt={placeDetails.title} />
//             <p>{placeDetails.description}</p>
//             <p>Location: {placeDetails.street}</p>
//             <p>Review: {placeDetails.review}</p>
//             {/* Add more details as needed */}
//         </div>
//     );
// };

// export default DetailPage;
