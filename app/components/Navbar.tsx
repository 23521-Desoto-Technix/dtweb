"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full p-4 backdrop-blur-sm sticky top-0 border-b-2 border-white border-bottom">
        <div className="container mx-auto h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex text-white md:flex-row flex-col block">
              <Link href="/">
                <p className="transition ease-in-out hover:-translate-y-1 duration-200 py-2 px-3 md:pl-0">DESOTO TECHNIX</p>
              </Link>
              <Link href="/about">
                <p className="transition ease-in-out hover:-translate-y-1 duration-200 py-2 px-3">ABOUT US</p>
              </Link>
              <Link href="/bots" >
                <p className="transition ease-in-out hover:-translate-y-1 duration-200 py-2 px-3">OUR BOTS</p>
              </Link>
              <p className="text-zinc-900 bg-red-500 py-2 px-3 animate-pulse">THIS SITE IS WORK IN PROGRESS</p>
            </div>
            <button 
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} 
              className="transition ease-in-out hover:bg-white duration-200 text-white hover:text-zinc-900 border-2 border-white py-2 px-3 justify-self-end"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;