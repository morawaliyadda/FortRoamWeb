 import React, { useState, useEffect } from "react";
import "./PopularPlaces.css"
import CardData from "../CardStyle/CardStyle";
import "../CardStyle/CardStyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="slick-arrow slick-next " onClick={onClick}>
            <IoIosArrowForward/>
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="slick-arrow slick-prev" onClick={onClick}>
            <IoIosArrowBack/>
        </div>
    );
};

const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
        return description;
    } else {
        return description.substring(0, maxLength) + "...";
    }
};



const PopularPlaces = () => {

    const [places, setPlaces] = useState({ place: [] });

    useEffect(() => {
        fetch("http://localhost:3010/place/review/top")
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setPlaces({ place: data }); // Ensure data is assigned properly
                } else {
                    console.error("Data fetched is not an array:", data);
                }
            })
            .catch(error => console.error("Error fetching places:", error));
    }, []);

    
    const sliderSettings = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1600, 
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="MostPopular">
            <h1>Most <strong>Popular</strong> </h1>
            <Slider {...sliderSettings}>
                {places.place.map((place, index) => (
                    <CardData
                        key={index}
                       // image={require(`../../assets/placeImages/${place.image}`)}

                       // image= {`http://localhost:3010/src/${place.image}`} 

                        image= {place.image}

                        heading={place.title}
                        location={place.street}
                        // description={truncateDescription(place.description, 100)}
                        // review={place.review}
                        averageRating={place.averageRating}
                        id={place._id}
                        totalReviews={place.totalReviews}


                    />
                ))}
            </Slider>
            
        </div>
    );
};

export default PopularPlaces;



