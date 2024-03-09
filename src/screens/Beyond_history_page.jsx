import React from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';

import '../App.css';
import videoAbout from '../assets/sunrise.mp4';


const BeyondHistory = () => {

    const activities = [
        { id: 1, name: 'Activity 1', image: image1, },
        { id: 2, name: 'Activity 2', image: image2, },
        { id: 3, name: 'Activity 3', image: image3, },
        { id: 4, name: 'Activity 4', image: image4, },
        { id: 5, name: 'Activity 5', image: image5, },
        { id: 6, name: 'Activity 6', image: image1, },
        { id: 4, name: 'Activity 4', image: image4, },
        { id: 5, name: 'Activity 5', image: image5, },
        { id: 6, name: 'Activity 6', image: image1, },
    ];

    return (
        <div  >


            <div className='main-video-about'>
                <video className="video-bg-about" autoPlay loop muted>
                    <source src={videoAbout} type="video/mp4" />
                </video>
                <h1 className="image-text">Beyond History</h1>
                <h2 className="image-text2">Explore Activities in Galle Fort</h2>

            </div>


            <div className='BeyondHistory-container'>
                <div className="BeyondHistory">
                    {activities.map((activity) => (
                        <div key={activity.id} className="activity">
                            <img src={activity.image} alt={activity.name} className="BeyondHistory-image" />
                            <div className="BeyondHistory-name">{activity.name}</div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );

};

export default BeyondHistory;
