import React from 'react';
import Image from 'next/image';
import geneHaas from '../../public/genehaaslogo.svg';
import nucor from '../../public/nucorlogo.svg';
import fabworks from '../../public/fabworks.svg';
import tegra from '../../public/tegra.svg';
import samsClub from '../../public/samsclub.svg';
import obms from '../../public/obms.svg';
import medtronic from '../../public/medtronic.svg';
import wsp from '../../public/wsp.svg';
import ui from '../../public/ui.svg';
import { StaticImageData } from 'next/image';

interface Sponsor {
    src?: StaticImageData; // Made optional
    textLogo?: string; // Added text logo option
    alt: string;
    uri: string;
    key: number;
    category: 'Diamond' | 'Gold' | 'Silver' | 'Bronze';
}

const sponsors: Sponsor[] = [
    { src: geneHaas, alt: 'Gene Haas Foundation', uri: "https://https://www.haascnc.com/index.html", key: 1, category: 'Diamond' },
    { src: nucor, alt: 'Nucor Steel', uri: "https://nucor.com/", key: 2, category: 'Gold' },
    { src: fabworks, alt: 'Fabworks', uri: "https://fabworks.com/", key: 3, category: 'Bronze' },
    { src: tegra, alt: 'Tegra', uri: "https://tegra.com/", key: 4, category: 'Gold' },
    { src: samsClub, alt: "Sam's Club", uri: "https://samsclub.com", key: 5, category: 'Silver' },
    { src: obms, alt: "Olive Branch", uri: "https://obms.us", key: 6, category: 'Silver' },
    { src: medtronic, alt: "Medtronic", uri: "https://medtronic.com", key: 7, category: 'Silver' },
    { src: wsp, alt: "WSP", uri: "https://wsp.com", key: 8, category: 'Silver' },
    { src: ui, alt: "United Initiators", uri: "https://www.united-initiators.com/", key: 9, category: 'Bronze' },
    { textLogo: "Tim Dickson Excavating", alt: "Tim Dickson Excavating", uri: "#", key: 10, category: 'Bronze' },
];

const Sponsors: React.FC = () => {
    const categories = ['Diamond', 'Gold', 'Silver', 'Bronze'] as const;

    return (
        <div className="space-y-8">
            {categories.map((category) => (
                <div key={category}>
                    <h2 className="text-2xl font-bold mb-4">{category} Sponsors</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pr-6 md:pr-0 items-center">
                        {sponsors
                            .filter((sponsor) => sponsor.category === category)
                            .map((sponsor) => (
                                <a href={sponsor.uri} key={sponsor.key} target="_blank" rel="noopener noreferrer">
                                    {sponsor.src ? (
                                        <Image
                                            className="w-full h-auto max-h-40"
                                            src={sponsor.src}
                                            alt={sponsor.alt}
                                        />
                                    ) : (
                                        <div className="text-center text-3xl font-semibold text-wrap break-words text-3xl">
                                            {sponsor.textLogo}
                                        </div>
                                    )}
                                </a>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Sponsors;
