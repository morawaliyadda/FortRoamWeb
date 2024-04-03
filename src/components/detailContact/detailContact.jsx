import React from "react";
import './detailContact.css';

const ContactCard = ({ title, value, icon }) => {
    return (
        <div className="contact-card">
            <div className="contact-icon">{icon}</div>
            <div>
                <h2>{title}</h2>
                <p>{value}</p>
            </div>
        </div>


    );
};

export default ContactCard;