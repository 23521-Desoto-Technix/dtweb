import React from 'react';

const ContactUsButton = () => {
    return (
        <button 
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} 
            className="transition ease-in-out hover:bg-white duration-200 text-white hover:text-zinc-900 border-2 border-white py-2 px-3 justify-self-end"
        >
            CONTACT US
        </button>
    );
};

export default ContactUsButton;