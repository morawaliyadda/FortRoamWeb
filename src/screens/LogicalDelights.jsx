import React from "react";
import "../App.css";
import "../components/CardStyle/CardStyle.css";
import CardData from "../components/CardStyle/CardStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';

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

const LogicalDelights = () => {
    const places = [
        {
            category: "Category 1",
            data: [
                { id: 1, heading: "Place 1", description: "Description 1", image: image1 },
                { id: 2, heading: "Place 2", description: "Description 2", image: image2 },
                { id: 3, heading: "Place 3", description: "Description 3", image: image3 },
                { id: 4, heading: "Place 4", description: "Description 4", image: image4 },
                { id: 5, heading: "Place 5", description: "Description 5", image: image5 }
            ]
        },
        {
            category: "Category 2",
            data: [
                { id: 1, heading: "Place 1", description: "Description 1", image: image1 },
                { id: 2, heading: "Place 2", description: "Description 2", image: image2 },
                { id: 3, heading: "Place 3", description: "Description 3", image: image3 },
                { id: 4, heading: "Place 4", description: "Description 4", image: image4 },
                { id: 5, heading: "Place 5", description: "Description 5", image: image5 }
            ]
        },
        {
            category: "Category 3",
            data: [
                { id: 1, heading: "Place 1", description: "Description 1", image: image1 },
                { id: 2, heading: "Place 2", description: "Description 2", image: image2 },
                { id: 3, heading: "Place 3", description: "Description 3", image: image3 },
                { id: 4, heading: "Place 4", description: "Description 4", image: image4 },
                { id: 5, heading: "Place 5", description: "Description 5", image: image5 }
            ]
        }
    ];
    const settings = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true, 
        /*
        autoplay: true,
        autoplaySpeed: 2000,*/
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
            <h1 className="Categorical-heading">Logical Delights</h1>
            <div className="Categorical-type">
            {places.map((placeCategory, index) => (
                    <React.Fragment key={index}>
                        <h1>{placeCategory.category}</h1>
                        <Slider {...settings}>
                            {placeCategory.data.map(place => (
                                <div key={place.id}>
                                    <CardData
                                        image={place.image}
                                        heading={place.heading}
                                        description={place.description}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </React.Fragment>
                ))}
            </div >
            
        </div >
    )

};

export default LogicalDelights;