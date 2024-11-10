import React from 'react';
import Image from 'next/image';
import geneHaas from '../../public/genehaaslogo.svg';
import nucor from '../../public/nucorlogo.svg';
import { StaticImageData } from 'next/image';

interface Sponsor {
    src: StaticImageData;
    alt: string;
}

const sponsors: Sponsor[] = [
    { src: geneHaas, alt: 'Gene Haas Foundation' },
    { src: nucor, alt: 'Nucor Steel' },
];

const Sponsors: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pr-6 md:pr-0 items-center">
            {sponsors.map((sponsor, index) => (
                <Image key={index} className="w-full h-auto brightness-50 hover:brightness-110 transition ease-in-out duration-200 scale-75 hover:scale-90" src={sponsor.src} alt={sponsor.alt} />
            ))}
        </div>
    );
};

export default Sponsors;
