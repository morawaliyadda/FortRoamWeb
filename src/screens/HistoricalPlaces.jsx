import React from "react";
import "../App.css";
import "../components/CardStyle/CardStyle.css";
import CardData from "../components/CardStyle/CardStyle";
import HistoricalPlace from "../assets/Historical-Places.png";
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

const HistoricalPlaces = () => {
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

        <div className="historical-place">
            <h1 className="historicalPlaces-heading">Historical Insights</h1>
            <div className="Categorical-type">
                <h1>Category1</h1>
                <Slider {...settings}>
                    <div>
                        <CardData
                            image={HistoricalPlace}
                            heading="Name1"
                            description="Description1"
                        />
                    </div>
                    <div>
                        <CardData
                            image={HistoricalPlace}
                            heading="Name2"
                            description="Description2"
                        />
                    </div>
                    <div>
                        <CardData
                            image={HistoricalPlace}
                            heading="Name3"
                            description="Description3"
                        />
                    </div>
                    <div>
                        <CardData
                            image={HistoricalPlace}
                            heading="Name4"
                            description="Description4"
                        />
                    </div>
                    <div>
                        <CardData
                            image={HistoricalPlace}
                            heading="Name5"
                            description="Description5"
                        />
                    </div>
                </Slider>
                <h1>Category2</h1>
                <Slider {...settings}>
                    <div>
                        <CardData
                            image={HistoricalPlace}
                            heading="Name1"
                            description="Description1"
                        />
                    </div>
                    <div>
                        <CardData
                            image={HistoricalPlace}
                            heading="Name2"
                            description="Description2"
                        />
                    </div>
                    <div>
                        <CardData
                            image={HistoricalPlace}
                            heading="Name3"
                            description="Description3"
                        />
                    </div>
                    <div>
                        <CardData
                            image={HistoricalPlace}
                            heading="Name4"
                            description="Description4"
                        />
                    </div>
                    <div>
                        <CardData
                            image={HistoricalPlace}
                            heading="Name5"
                            description="Description5"
                        />
                    </div>
                </Slider>
                <h1>Category3</h1>
                <Slider {...settings}>
                    <div>
                        <CardData
                            image={HistoricalPlace}
                            heading="Name1"
                            description="Description1"
                        />
                    </div>
                    <div>
                        <CardData
                            image={HistoricalPlace}
                            heading="Name2"
                            description="Description2"
                        />
                    </div>
                    <div>
                        <CardData
                            image={HistoricalPlace}
                            heading="Name3"
                            description="Description3"
                        />
                    </div>
                    <div>
                        <CardData
                            image={HistoricalPlace}
                            heading="Name4"
                            description="Description4"
                        />
                    </div>
                    <div>
                        <CardData
                            image={HistoricalPlace}
                            heading="Name5"
                            description="Description5"
                        />
                    </div>
                </Slider>
            </div >
            
        </div >
    )

};

export default HistoricalPlaces;