import React, { useState } from 'react';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faGlobe ,faPaperPlane  } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted:', formData);

        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-us-container">
            <h2>Contact <strong> Us</strong> </h2>
            <div className='Contact-section'>
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <div className="info-item">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                        <p>Galle Heritage Foundation, 12 Rampart St, Galle 80000</p>
                    </div>
                    <div className="info-item">
                        <FontAwesomeIcon icon={faPhone} className="icon" />
                        <p>0912 246 784</p>
                    </div>
                    <div className="info-item">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        <p>herifo@sltnet.lk</p>
                    </div>
                    <div className="info-item">
                        <FontAwesomeIcon icon={faGlobe} className="icon" />
                        <a href="http://www.galleheritage.gov.lk" target="_blank" rel="noopener noreferrer">http://www.galleheritage.gov.lk</a>
                    </div>
                </div>
                <div className="contact-form">

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" required></textarea>
                        </div>
                        <button className="btn-submit" type="submit">Send Message <FontAwesomeIcon icon={faPaperPlane} className="btn-submit-icon" /></button>

                    </form>
                </div>
            </div>


        </div>
    );
};

export default ContactUs;
