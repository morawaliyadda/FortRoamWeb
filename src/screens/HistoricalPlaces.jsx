// import React from "react";
// import "../App.css";
// import "../components/CardStyle/CardStyle.css";
// import CardData from "../components/CardStyle/CardStyle";
// import data from "../components/places/places.jsx";


// const HistoricalPlaces = () => {

//     const [places, setPlaces] = useState([]);

//         useEffect(() => {
    
//             fetch("http://localhost:3010/place/type/historical")
//                 .then(response => response.json())
//                 .then(data => {
    
//                     if (Array.isArray(data)) {
//                         setPlaces(data);
//                     } else {
//                         console.error("Data fetched is not an array:", data);
//                     }
//                 })
//                 .catch(error => console.error("Error fetching places:", error));
//         }, []);

//     const groupedPlaces = data.place.reduce((acc, place) => {
//         if (place.type === 'historical') {
//             if (!acc[place.subtype]) {
//                 acc[place.subtype] = [];
//             }
//             acc[place.subtype].push(place);
//         }
//         return acc;
//     }, {});

//     const capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     };

//     return (
//         <div className="Categorical-place">
//             <h1 className="Categorical-heading">Historical <strong>Insights</strong> </h1>
//             <div className="Categorical-type">

        //    {Object.entries(groupedPlaces).map(([subtype, places]) => (
        //             <div key={subtype}>
        //                 <h2 className="subtype">{capitalizeFirstLetter(subtype)}</h2>
        //                 <div className="choose-item">
        //                     {places.map((place, index) => (
        //                         <div key={index}>
        //                             <CardData
        //                                // image={require(`../assets/placeImages/${place.image}`)}
        //                                 heading={place.title}
        //                                 location={place.street}
        //                                 description={place.description}
        //                                 review={place.review}

        //                             />
        //                         </div>
        //                     ))}
        //                 </div>

        //             </div>
        //         ))}


//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };


// export default HistoricalPlaces;



import React, { useState, useEffect } from "react";
import CardData from "../components/CardStyle/CardStyle";
import "../App.css";
import "../components/CardStyle/CardStyle.css";


const HistoricalPlaces = () => {

    const [places, setPlaces] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3010/place/type/historical")
            .then(response => response.json())
            .then(data => {

                if (Array.isArray(data)) {
                    setPlaces(data);
                } else {
                    console.error("Data fetched is not an array:", data);
                }
            })
            .catch(error => console.error("Error fetching places:", error));
    }, []);

    // Group places by subtype
    const groupedPlaces = places.reduce((acc, place) => {
        acc[place.subtype] = [...(acc[place.subtype] || []), place];
        return acc;
    }, {});

    


    return (
        <div className="Categorical-place">
            <h1 className="Categorical-heading">Historical <strong>Insights</strong> </h1>
            <div className="Categorical-type">

              
                {/* Render museums */}
                <h2 className="subtype">Museum</h2>
                <div className="choose-item">
                {groupedPlaces["museum"] && groupedPlaces["museum"].map((place, index) => (

                    <div key={index}>
                       

                        <CardData
                            // image={place.image}
                            heading={place.title}
                            location={place.street}
                            description={place.description}
                            review={place.review}
                        />

                    </div>
                ))}
                </div>

                {/* Render bastions */}
                <h2 className="subtype">Bastion</h2>
                <div className="choose-item">
                {groupedPlaces["bastion"] && groupedPlaces["bastion"].map((place, index) => (
                    <div key={index}>
                        

                        <CardData
                            // image={place.image}
                            heading={place.title}
                            location={place.street}
                            description={place.description}
                            review={place.review}
                        />

                    </div>
                ))}
                </div>


                {/* Render others */}
                <h2 className="subtype">Others</h2>
                <div className="choose-item">
                {groupedPlaces["others"] && groupedPlaces["others"].map((place, index) => (
                    <div >
                     
                      <div className="choose-item">
                    <div key={index}>
                      

                        <CardData
                            // image={place.image}
                            heading={place.title}
                            location={place.street}
                            description={place.description}
                            review={place.review}
                        />
                    </div>
                    </div>
                    </div>
                ))}
                </div>
                
                {/* </Slider> */}

                {/* {Object.entries(groupedPlaces).map(([subtype, places]) => (
                    <div key={subtype}>
                        <h2 className="subtype">{capitalizeFirstLetter(subtype)}</h2>
                        <div className="choose-item">
                            {places.map((place, index) => (
                                <div key={index}>
                                    <CardData
                                       // image={require(`../assets/placeImages/${place.image}`)}
                                        heading={place.title}
                                        location={place.street}
                                        description={place.description}
                                        review={place.review}

                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                ))} */}

            </div>
        </div>
    );
};

export default HistoricalPlaces;