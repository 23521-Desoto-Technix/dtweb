import React from 'react';
import Image from 'next/image';
import Button from '../components/Button';

const RobotsPage = () => {
    const robots = [
        {
            name: 'INTO THE DEEP bot',
            image: 'https://picsum.photos/300/200',
            description: 'Description of Alpha',
            link: "itd",
            hasPage: true
        },
        {
            name: '2024 Offseason bot',
            image: 'https://picsum.photos/300/200',
            description: 'Description of Beta',
            hasPage: false
        },
        {
            name: 'CENTERSTAGE bot',
            image: 'https://picsum.photos/300/200',
            description: 'Description of Gamma',
            link: "cs",
            hasPage: true
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
                        <Image src={robot.image} width={300} height={200} className="mb-2 w-full h-auto" alt={robot.name} />
                        <p className="mb-4">{robot.description}</p>
                        {robot.link != null && (
                            <Button href={`/bots/${robot.link.toLowerCase()}`} text="MORE INFO" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}


export default RobotsPage;