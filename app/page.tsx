"use client"

import Sponsors from "./components/Sponsors";
import Link from "next/link";
import ContactUsButton from "./components/ContactUsButton";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="pr-6 md:pr-0 box-content">
        <h1 className="text-6xl pt-20 pb-10">DeSoto Technix</h1>
        <p className="pb-10">DeSoto Technix is a team dedicated to creating competitive robots for the <i>FIRST</i> Tech Challenge, as well as sharing our love of STEM with our community.</p>
        <Link href="/about" className="transition ease-in-out hover:bg-white duration-200 text-white hover:text-zinc-900 border-2 border-white py-2 px-3">LEARN MORE</Link>
        <h1 className="text-4xl py-10 pb-5">Sponsors</h1>
        <p className="pb-10">Sponsors are crucial for our team as they provide the necessary funding for equipment, materials, and competition fees. Additionally, sponsors offer mentorship and industry connections that help our members gain valuable skills and experiences.</p>
        <Sponsors />
        <h1 className="text-2xl py-10 pb-5">Want your name here?</h1>
        <p className="pb-5">Reach out to us, and invest in the future of STEM in north Mississippi.</p>
        <ContactUsButton />
        <div className="py-6">
          <h2 className="text-3xl pb-5">INTO THE DEEP Robot</h2>
          <p className="pb-5">
          We've released our INTO THE DEEP CAD files for you to use to reference! This robot has a 12in footprint, a dual claw transfer, and much more, we encourage you to take reference from this. NOTE: This is a work in progress and is subject to change.
          </p>
            <div className="flex flex-col md:flex-row items-start pt-6 pr-4 md:pr-0">
            <Image src="https://picsum.photos/600/400" alt="INTO THE DEEP Robot" className="w-full h-auto" width={600} height={400} />
            <Link href="https://www.example.com" className="transition ease-in-out hover:bg-white duration-200 text-white hover:text-zinc-900 border-2 border-white py-2 px-3 flex items-center mt-5 md:mt-0 md:ml-5">
              Onshape Document
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
