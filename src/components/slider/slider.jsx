import React from 'react'
import './slider.css'
import BackgroundVideo from '../../assets/video.mp4';
import { Parallax } from 'react-parallax';

const slider = () => {
  return (
    <Parallax>
    <div className='main'> 
      <video className='video' autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
    </div>
    </Parallax>
  )
}

export default slider






























// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./slider.css";
// import image_slider1 from "../../assets/image1.jpg";
// import image_slider2 from "../../assets/image4.jpg";
// import image_slider3 from "../../assets/image5.jpg";
// import SearchBar from "../searchBar/search";
// import { AiOutlineSwapRight } from "react-icons/ai"; 

// const SliderPage = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };

//   return (
//     <div className="slider-page">
//       <div className="carousel-container">
//         <Slider {...settings}>
//           <div>
//             <img className="slider-image" src={image_slider1} alt="Slide 1" />
//           </div>
//           <div>
//             <img className="slider-image" src={image_slider2} alt="Slide 2" />
//           </div>
//           <div>
//             <img className="slider-image" src={image_slider3} alt="Slide 3" />
//           </div>
//         </Slider>
//       </div>
//       {/* <div className="slider-text">
//         <h1>A Tranquil Haven of Heritage</h1>
//         <p>
//           Discover the magic of Galle Fort, where history comes alive amidst
//           quaint streets and charming shops. Explore centuries-old architecture
//           and immerse yourself in a world where the past meets the present in
//           perfect harmony.
//         </p>
//         <button className="btn">
//           GET STARTED <AiOutlineSwapRight className="icon" /> 
//         </button>
//         <SearchBar/>
//       </div> */}
//     </div>
//   );
// };

// export default SliderPage;
