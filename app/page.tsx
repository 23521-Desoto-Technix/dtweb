"use client"

import Sponsors from "./components/Sponsors";
import Members from "./components/Members";

export default function Home() {
  return (
    <div>
      <div className="pr-6 md:pr-0 box-content">
        <h1 className="text-6xl pt-20 pb-10">DeSoto Technix</h1>
        <p className="pb-10">DeSoto Technix is a team dedicated to creating competitive robots for the <i>FIRST</i> Tech Challenge, as well as sharing our love of STEM with our community.</p>
        <button className="transition ease-in-out hover:bg-white duration-200 text-white hover:text-zinc-900 border-2 border-white py-2 px-3">LEARN MORE</button>
        <h1 className="text-4xl py-10 pb-5">Sponsors</h1>
        <p className="pb-10">Sponsors are crucial for our team as they provide the necessary funding for equipment, materials, and competition fees. Additionally, sponsors offer mentorship and industry connections that help our members gain valuable skills and experiences.</p>
        <Sponsors />
        <h1 className="text-2xl py-10 pb-5">Want your name here?</h1>
        <p className="pb-5">Reach out to us, and invest in the future of STEM in north Mississippi.</p>
        <button 
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} 
          className="transition ease-in-out hover:bg-white duration-200 text-white hover:text-zinc-900 border-2 border-white py-2 px-3 justify-self-end"
        >
          CONTACT US
        </button>
        <h1 className="text-4xl py-10 pb-5">Team Members</h1>
        <Members />
      </div>
    </div>
  );
}
