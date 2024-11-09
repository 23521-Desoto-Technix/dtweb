import Image from "next/image";
import geneHaas from "../public/genehaaslogo.svg";
import nucor from "../public/nucorlogo.svg"

export default function Home() {
  return (
    <div className="pr-6 md:pr-0">
      <h1 className="text-6xl pt-20 pb-10">DeSoto Technix</h1>
      <p className="pb-10">DeSoto Technix is a team dedicated to creating competitive robots for the <i>FIRST</i> Tech Challenge, as well as sharing our love of STEM with our community.</p>
      <button className="transition ease-in-out hover:bg-white duration-200 text-white hover:text-zinc-900 border-2 border-white py-2 px-3">LEARN MORE</button>
      <h1 className="text-4xl py-10 pb-5">Sponsors</h1>
      <p className="pb-10">Sponsors are crucial for our team as they provide the necessary funding for equipment, materials, and competition fees. Additionally, sponsors offer mentorship and industry connections that help our members gain valuable skills and experiences.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pr-6 md:pr-0 items-center">
        <Image className="w-full h-auto" src={geneHaas} alt="Gene Haas Foundation" />
        <Image className="w-full h-auto" src={nucor} alt="Nucor Steel" />
      </div>
      <h1 className="text-2xl py-10 pb-5">Want your name here?</h1>
      <p className="pb-5">Reach out to us, and invest in the future of STEM in north Mississippi.</p>
      <button className="transition ease-in-out hover:bg-white duration-200 text-white hover:text-zinc-900 border-2 border-white py-2 px-3">CONTACT US</button>
    </div>
  );
}
