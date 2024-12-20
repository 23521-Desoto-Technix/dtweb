import React from 'react';
import Button from "./Button";

const ContactUsButton = () => {
    return (
        <Button 
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>CONTACT US</Button>
    );
};

export default ContactUsButton;