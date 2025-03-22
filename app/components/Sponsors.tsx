import React from 'react';
import Image from 'next/image';
import geneHaas from '../../public/genehaaslogo.svg';
import nucor from '../../public/nucorlogo.svg';
import fabworks from '../../public/fabworks.svg';
import walmart from '../../public/Walmart.svg';
import tegra from '../../public/tegra.svg';
import { StaticImageData } from 'next/image';

interface Sponsor {
    src: StaticImageData;
    alt: string;
    uri: string;
    key: number
}

const sponsors: Sponsor[] = [
    { src: geneHaas, alt: 'Gene Haas Foundation', uri: "https://https://www.haascnc.com/index.html", key: 1 },
    { src: nucor, alt: 'Nucor Steel' , uri: "https://nucor.com/", key: 2},
    { src: fabworks, alt: 'Fabworks' , uri: "https://fabworks.com/", key: 3},
    { src: walmart, alt: 'Walmart' , uri: "https://walmart.com/", key: 4},
    { src: tegra, alt: 'Tegra' , uri: "https://tegra.com/", key: 5}
];


const Sponsors: React.FC = () => {
    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pr-6 md:pr-0 items-center" key="sponsors">
            {sponsors.map((sponsor, index) => (
                <a href={sponsor.uri} key={index} target="_blank" rel="noopener noreferrer">
                <Image key={index} className="w-full h-auto0" src={sponsor.src} alt={sponsor.alt} />
                </a>
            ))}
        </div>
    );
};

export default Sponsors;
