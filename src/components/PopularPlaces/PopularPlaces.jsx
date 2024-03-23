import React from "react";
import "./PopularPlaces.css"
import CardData from "../CardStyle/CardStyle";
import "../CardStyle/CardStyle.css";
import data from "../places/places";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

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


const PopularPlaces = () => {

  
    const sliderSettings = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
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
            <Link to="/all-items" className="most-popular-btn">View More</Link>
            <Slider {...sliderSettings}>
                {data.place.map((place, index) => (
                    <CardData
                        key={index}
                        image={require(`../../assets/placeImages/${place.image}`)}
                        heading={place.title}
                        location={place.street}
                        description={place.description}
                        review={place.review}
                    />
                ))}
            </Slider>
            
        </div>
    );
};

export default PopularPlaces;

