import React from 'react';
import Image from 'next/image';
import Button from '../components/Button';
import CS from '../../public/IMG_5497.jpg';
import off24 from '../../public/IMG_5498.jpg';
import ITD from '../../public/FullSizeRender.jpg';

const RobotsPage = () => {
    const robots = [
        {
            name: 'Depth Charge',
            image: ITD,
            description: 'Depth Charge is our robot for the 2024-2025 INTO THE DEEP game, and is completly designed in CAD before it was built.',
            link: ""
        },
        {
            name: '2024 Offseason bot',
            image: off24,
            description: 'The 2024 offseason bot is a drivebase that we built to experiment with custom manufacturing during the offseason.',
            hasPage: false,
            link: ""
        },
        {
            name: 'Fred',
            image: CS,
            description: 'Fred is our robot for the 2023-2024 CENTERSTAGE game, and is a heavily modified REV starter bot.',
            link: "",
        }
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Our Robots</h1>
            <p className="mb-6">Welcome to the robots page. Here you can find information about our robots.</p>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                {robots.map((robot, index) => (
                    <div key={index} className="border-2 border-gray-300 shadow-md p-4 pb-6">
                        <h2 className="text-xl font-semibold mb-2">{robot.name}</h2>
                        <Image src={robot.image} width={300} height={200} className="mb-2 w-full" alt={robot.name} />
                        <p className="">{robot.description}</p>
                        {robot.link != ""&& (
                            <Button href={`/bots/${robot.link.toLowerCase()}`} text="MORE INFO" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}


export default RobotsPage;