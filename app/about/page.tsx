import React from 'react';
import Members from '../components/Members'

const AboutPage = () => {
    return (
        <div className='py-10'>
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="mb-2">We are a community 2nd year <i>FIRST</i> Tech Challenge robotics team based out of north Mississippi. Our team is composed of 7 students who are excited about robotics and technology. Last year, we qualified for the <i>FIRST</i> Championship and we aim to do so again this year.</p>
            <h1 className="text-4xl py-10 pb-5">Team Members</h1>
            <Members />
        </div>
    );
};

export default AboutPage;