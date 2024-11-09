import React from 'react';
const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-white py-8 end">
            <div className="container mx-6 md:mx-auto">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full">
                        <h1 className="text-xl font-bold mb-2">Contact Us</h1>
                        <p>WIP</p>
                    </div>
                </div>
                <div className="text-center mt-8">
                    &copy; {new Date().getFullYear()} DeSoto Technix. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
