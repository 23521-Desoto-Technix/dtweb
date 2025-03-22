import React from 'react';
import Button from '../components/Button';

const DonatePage: React.FC = () => {
    return (
        <div className="text-left mt-12">
            <h1 className="text-3xl font-bold">Support Our Cause</h1>
            <p className="my-4 text-lg">Your donation can make a big difference. Please consider supporting us through our GoFundMe page.</p>
            <Button 
                href="https://www.gofundme.com/f/example-campaign" 
                className="mt-6"
            >
                Donate Now
            </Button>
        </div>
    );
};

export default DonatePage;
