// import React from "react";
// import Slider from "react-slick";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './ReviewBox.css';
// import person1 from '../../assets/person1.jpg';
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

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

// const ReviewBox = () => {
//     const reviews = [
//         { name: "John Doe", rating: 5, comment: "Great experience, loved it!" },
//         { name: "Jane Smith", rating: 4, comment: "Good service, would recommend." },
//         { name: "Bob Johnson", rating: 3, comment: "Average experience, could be better." }
//     ];

//     const settings = {
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />,
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                 }
//             }
//         ]
//     };

//     return (
//         <div className="review-box-container">
//             <Slider {...settings}>
//                 {reviews.map((review, index) => (
//                     <div className="review-box" key={index}>
//                         <div className="review-box-content">
//                             <img src={person1} alt={`Review Person ${index + 1}`} className="review-box-avatar" />
//                             <div className="reveiw-box-details">
//                                 <h2>{review.name}</h2>
//                                 <div className="star-rating">
//                                     {[...Array(review.rating)].map((_, i) => (
//                                         <FontAwesomeIcon key={i} icon={faStar} />
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                         <p className="review-box-message">{review.comment}</p>
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// export default ReviewBox;
