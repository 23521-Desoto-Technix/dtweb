"use client"

import Sponsors from "./components/Sponsors";
import ContactUsButton from "./components/ContactUsButton";
import Image from "next/image";
import Button from "./components/Button";
import i1 from '../public/hpimages/1.jpg'
//import i2 from '../public/hpimages/2.jpg'
import i3 from '../public/hpimages/3.jpg'
//import i4 from '../public/hpimages/4.jpg'
//import i5 from '../public/hpimages/5.jpg'

export default function Home() {
  return (
    <div>
      <div className="">
        <h1 className="text-6xl py-10 font-bold">DeSoto Technix 23521</h1>
        <p className="pb-10">DeSoto Technix is a team dedicated to creating competitive robots for the <i>FIRST</i> Tech Challenge, as well as sharing our love of STEM with our community.</p>
        <Button href="/about">LEARN MORE</Button>
        <h1 className="text-4xl py-10 pb-5">Sponsors</h1>
        <p className="pb-10">Sponsors are crucial for our team as they provide the necessary funding for equipment, materials, and competition fees. Additionally, sponsors offer mentorship and industry connections that help our members gain valuable skills and experiences.</p>
        <Sponsors />
        <h1 className="text-2xl py-10 pb-5">Want your name here?</h1>
        <p className="pb-5">Reach out to us, and invest in the future of STEM in north Mississippi.</p>
        <ContactUsButton />
        <div className="py-6">
        <h2 className="text-3xl pb-5">23521 at competition</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: i1, alt: '' },
              //{ src: i2, alt: '' },
              { src: i3, alt: '' },
              //{ src: i4, alt: '' },
              //{ src: i5, alt: '' },
              // Add more images as needed
            ].map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                className="w-full h-auto border-2 border-white p-1"
                width={300}
                height={200}
              />
            ))}
          </div>
          {/*<h2 className="text-3xl pb-5">INTO THE DEEP Robot</h2>
          <p className="pb-5">
          We&apos;ve released our INTO THE DEEP CAD files for you to use to reference! This robot has a 12in footprint, a dual claw transfer, and much more, we encourage you to take reference from this. NOTE: This is a work in progress and is subject to change.
          </p>
          <div className="flex flex-col md:flex-row items-start pt-6 pr-4 md:pr-0">
            <Image src="https://picsum.photos/2400/1600" alt="INTO THE DEEP Robot" className="w-full h-auto" width={1200} height={800} />
            <Button href="https://cad.onshape.com/documents/a75e769b57bc2e68fa3aafa7/w/5e9868ec14d7d8fe35bb5ab4/e/48f189dcadc17fa2296ea9b6" className="flex items-center ml-5">Onshape Document
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter">
                <path d="M7 17L17 7M7 7h10v10" />
                </svg></Button>
          </div>*/}
        </div>
      </div>
    </div>
  );
}
