import React from 'react';
import '../App.css';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';



const ServicesPage = () => {

    return (
        <div>
            <div className='main-container'>
                <h1 className="main-text">Our  <strong>Services</strong></h1>
                <div >
                    <Services />
                </div>
            </div>
            <Footer/>

        </div>
    );

};
export default ServicesPage;
