import React from 'react';

function ContactCard(props){
    return (
        <div className="contact-card-container">
            <h1 className="contact-card-header">{props.contact.name}</h1>
            <h2 className="contact-card-subheader">{props.contact.sub}</h2>
            <p className="contact-card-description">{props.contact.p}</p>
        </div>
    )
}

export default ContactCard;