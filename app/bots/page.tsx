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
            description: 'Depth Charge is our robot for the 2024-2025 INTO THE DEEP game, and was completely designed in CAD before it was built.',
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
        <div className="py-10">
            <h1 className="text-4xl font-bold">Our Robots</h1>
            <p className='py-5'>For more info about our robots, you can contact our design lead at <a href="mailto:nathanricker44@gmail.com" className='hover:underline text-blue-500'>nathanricker44@gmail.com</a>, or DM @dragonhero1051 on discord.</p>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                {robots.map((robot, index) => (
                    <div key={index} className="border-2 border-gray-300 shadow-md p-4 pb-6">
                        <h2 className="text-xl font-semibold mb-2">{robot.name}</h2>
                        <Image src={robot.image} width={300} height={200} className="mb-2 w-full border-2 border-white p-1" alt={robot.name} />
                        <p className="">{robot.description}</p>
                        {robot.link != ""&& (
                            <Button href={`/bots/${robot.link.toLowerCase()}`}>MORE INFO</Button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}


export default RobotsPage;