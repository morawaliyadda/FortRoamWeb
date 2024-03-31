
// import React from "react";
// import "../App.css";
// import "../components/CardStyle/CardStyle.css";
// import CardData from "../components/CardStyle/CardStyle";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// import data from "../components/places/places.jsx"; 

// const NextArrow = (props) => {
//     const { onClick } = props;
//     return (
//         <div className="slick-arrow slick-next " onClick={onClick}>
//             <IoIosArrowForward/>
//         </div>
//     );
// };

// const PrevArrow = (props) => {
//     const { onClick } = props;
//     return (
//         <div className="slick-arrow slick-prev" onClick={onClick}>
//             <IoIosArrowBack/>
//         </div>
//     );
// };

// const HistoricalPlaces = () => {
//     const settings = {
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         swipeToSlide: true,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                 },
//             },
//         ],
//     };

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
//                 {Object.entries(groupedPlaces).map(([subtype, places]) => (
//                     <div key={subtype}>
//                         <h2 className="subtype">{capitalizeFirstLetter(subtype)}</h2>
//                         <Slider {...settings}>
//                             {places.map((place, index) => (
//                                 <div key={index}>
//                                     <CardData
//                                         image={require(`../assets/placeImages/${place.image}`)}
//                                         heading={place.title}
//                                         location= {place.street}
//                                         description={place.description}
//                                         review ={place.review}
                                        
//                                     />
//                                 </div>
//                             ))}
//                         </Slider>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default HistoricalPlaces;

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import CardData from "../components/CardStyle/CardStyle";

import React from "react";
import "../App.css";
import "../components/CardStyle/CardStyle.css";
import CardData from "../components/CardStyle/CardStyle";
import data from "../components/places/places.jsx"; 



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

    const settings = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <div className="Categorical-place">
            <h1 className="Categorical-heading">Historical <strong>Insights</strong> </h1>
            <div className="Categorical-type">

                {/* <Slider {...settings}> */}
                    {/* Render museums */}
                  
                    {groupedPlaces["museum"] && groupedPlaces["museum"].map((place, index) => (
                        
                        <div key={index}>
                            <h2 className="subtype">Museum</h2>
                            
                            <CardData
                                // image={place.image}
                                heading={place.title}
                                location={place.street}
                                description={place.description}
                                review={place.review}
                            />
                           
                        </div>
                    ))}
                  
                   
                    {/* Render bastions */}
                    {groupedPlaces["bastion"] && groupedPlaces["bastion"].map((place, index) => (
                        <div key={index}>
                            <h2 className="subtype">Bastion</h2>
                            
                            <CardData
                                // image={place.image}
                                heading={place.title}
                                location={place.street}
                                description={place.description}
                                review={place.review}
                            />
                           
                        </div>
                    ))}
                   
                   
                    {/* Render others */}
                    {groupedPlaces["others"] && groupedPlaces["others"].map((place, index) => (
                        <div key={index}>
                            <h2 className="subtype">Others</h2>
                           
                            <CardData
                                // image={place.image}
                                heading={place.title}
                                location={place.street}
                                description={place.description}
                                review={place.review}
                            />
                          
                        </div>
                    ))}
                    
                {/* </Slider> */}

                {Object.entries(groupedPlaces).map(([subtype, places]) => (
                    <div key={subtype}>
                        <h2 className="subtype">{capitalizeFirstLetter(subtype)}</h2>
                        <div className="choose-item">
                        {places.map((place, index) => (
                                <div key={index}>
                                    <CardData
                                        image={require(`../assets/placeImages/${place.image}`)}
                                        heading={place.title}
                                        location= {place.street}
                                        description={place.description}
                                        review ={place.review}
                                        
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default HistoricalPlaces;


// import React from "react";
// import "../App.css";
// import "../components/CardStyle/CardStyle.css";
// import CardData from "../components/CardStyle/CardStyle";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// import data from "../components/places/places.jsx";
// import HorizontalScroll from 'react-horizontal-scrolling-menu';
// import { ScrollMenu } from 'react-horizontal-scrolling-menu';


// const NextArrow = (props) => {
//     const { onClick } = props;
//     return (
//         <div className="slick-arrow slick-next " onClick={onClick}>
//             <IoIosArrowForward/>
//         </div>
//     );
// };

// const PrevArrow = (props) => {
//     const { onClick } = props;
//     return (
//         <div className="slick-arrow slick-prev" onClick={onClick}>
//             <IoIosArrowBack/>
//         </div>
//     );
// };

// const HistoricalPlaces = () => {
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
//                 {Object.entries(groupedPlaces).map(([subtype, places]) => (
//                     <div key={subtype}>
//                         <h2 className="subtype">{capitalizeFirstLetter(subtype)}</h2>
//                         <ScrollMenu>
//                             {places.map((place, index) => (
//                                 <CardData
//                                     key={index}
//                                     image={require(`../assets/placeImages/${place.image}`)}
//                                     heading={place.title}
//                                     location={place.street}
//                                     description={place.description}
//                                     review={place.review}
//                                 />
//                             ))}
//                         </ScrollMenu>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };


// export default HistoricalPlaces;
