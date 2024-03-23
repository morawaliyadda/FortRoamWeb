import React from "react";
import "../App.css";
import "../components/CardStyle/CardStyle.css";
import CardData from "../components/CardStyle/CardStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import data from "../components/places/places.jsx"; 

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

const BeyondHistory = () => {
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

    const groupedPlaces = data.place.reduce((acc, place) => {
        if (place.type === 'activities') {
            if (!acc[place.subtype]) {
                acc[place.subtype] = [];
            }
            acc[place.subtype].push(place);
        }
        return acc;
    }, {});

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className="Categorical-place">
            <h1 className="Categorical-heading">Beyond <strong>History</strong></h1>
            <div className="Categorical-type">
                {Object.entries(groupedPlaces).map(([subtype, places]) => (
                    <div key={subtype}>
                        <h2 className="subtype">{capitalizeFirstLetter(subtype)}</h2>
                        <Slider {...settings}>
                            {places.map((place, index) => (
                                <div key={index}>
                                    <CardData
                                        image={require(`../assets/placeImages/${place.image}`)}
                                        heading={place.title}
                                        location= {place.street}
                                        description={place.description}
                                        review={place.review}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BeyondHistory;
