// import "./CardStyle.css"
// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { FaHeart, FaStar } from "react-icons/fa";



// class CardData extends Component {


//     constructor(props) {
//         super(props);
//         this.state = {
//             liked: false
//         };
//         this.toggleLike = this.toggleLike.bind(this);
//     }

//     toggleLike() {
//         this.setState(prevState => ({
//             liked: !prevState.liked
//         }));
//     }

    

//     render() {
//         return (
//             <div className="card">
//                 <div className="card-image">
//                     <img src={this.props.image} alt="" />
//                 </div>
//                 <div className="heading-card">
//                     <h2>{this.props.heading}</h2>
//                     <FaHeart
//                         className={`heart-icon ${this.state.liked ? 'liked' : ''}`}
//                         onClick={this.toggleLike}
//                     />

//                 </div>

//                 <p className="location">{this.props.location}</p>
//                 <p>{this.props.description}</p>
//                 <p>
//                     Review :<FaStar className="star-icon" /> {this.props.review}
//                 </p>

//                 {/* <Link to={`/detail-page/${this.props.id}`}>
//                     <button>View More</button>
//                 </Link> */}
//                 <Link to={`/detail-page/${this.props.id}`} className='link'>
//                     <button>View More</button>
//                 </Link>
//             </div>
//         );
//     }
// }
// CardData.propTypes = {
//     heading: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//    images: PropTypes.string.isRequired,
//     review: PropTypes.string.isRequired,
//     id:PropTypes.string.isRequired

// };
// export default CardData;



import "./CardStyle.css";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { FaHeart, FaStar } from "react-icons/fa";

const CardData = (props) => {
    const location = useLocation();
    //const path = location.pathname.split("/")[2];
    const [liked, setLiked] = useState(false);
    const [place, setPlace] = useState(null);


    useEffect(() => {
        const getPlace = async () => {
            try {
                const response = await axios.get(`http://localhost:3010/place/review/${props.id}`);
                setPlace(response.data);
            } catch (error) {
                console.error("Error fetching place data:", error);
            }
        };
        getPlace();
    }, [props.id]);




    const toggleLike = () => {
        setLiked(prevLiked => !prevLiked);
    };


    return (
        <div className="card">
            <div className="card-image">
                <img src={props.image} alt="" />
            </div>
            <div className="heading-card">
                <h2>{props.heading}</h2>
                <FaHeart
                    className={`heart-icon ${liked ? 'liked' : ''}`}
                    onClick={toggleLike}
                />
            </div>

            <p className="location">{props.location}</p>
            <p>{props.description}</p>
            {/* <div>
                <FaStar className="star-icon" /> {place ? place.averageRating : 'Loading...'}<p>ratings out of</p>{place ? place.totalReviews : 'Loading...'}
                <p>
                    reviews
                </p>
            </div> */}
            <div className="rating-content">
                {place ? (
                    <>
                        <p>
                            {[...Array(Math.round(place.averageRating))].map((_, index) => (
                                <FaStar key={index} className="star-icon" />
                            ))}
                        </p>
                        <p>
                            {place.averageRating}  <strong>rating</strong>  out of {place.totalReviews} reviews
                        </p>

                    </>
                ) : (
                    'Loading...'
                )}
            </div>

            {/* <div>
                {place ? (
                    <>
                        <FaStar className="star-icon" /> {place.averageRating.toFixed(1)} <p>ratings out of</p> {place.totalReviews} <p>reviews</p>
                        <p>
                            {[...Array(Math.round(place.averageRating))].map((_, index) => (
                                <FaStar key={index} className="star-icon" />
                            ))}
                        </p>
                    </>
                ) : (
                    'Loading...'
                )}
            </div> */}


            <Link to={`/detail-page/${props.id}`} className='link'>
                <button>View More</button>
            </Link>
        </div>
    );
};

CardData.propTypes = {
    heading: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default CardData;
