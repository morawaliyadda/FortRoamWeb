import React from 'react';
import '../App.css';
import Services from '../components/Services/Services';



const ServicesPage = () => {

    return (
        <div>
            <div className='main-container'>
                <h1 className="main-text">Our  <strong>Services</strong></h1>
                <div >
                    <Services />
                </div>

            </div>

        </div>
    );

};
export default ServicesPage;
