"use client";

import React from "react";
import Link from "next/link";
import ContactUsButton from "./ContactUsButton";
//start these with https://
const liveurl = "";

const scoreurl = "";

const Navbar = () => {
  return (
    <>
      <div className="w-full p-4 backdrop-blur-sm relative md:sticky top-0 border-b-2 border-white border-bottom">
        <div className="container mx-auto h-full">
          <div className="flex justify-between items-center h-full flex-col md:flex-row">
            <div className="flex text-white md:flex-row flex-col block justify-items-center md:justify-items-start">
              <Link href="/">
                <p className="transition ease-in-out hover:-translate-y-1 duration-200 py-2 px-3 md:pl-0">DESOTO TECHNIX</p>
              </Link>
              <Link href="/about">
                <p className="transition ease-in-out hover:-translate-y-1 duration-200 py-2 px-3">ABOUT US</p>
              </Link>
              <Link href="/bots" >
                <p className="transition ease-in-out hover:-translate-y-1 duration-200 py-2 px-3">OUR BOTS</p>
              </Link>
              {liveurl && (
                <Link href={liveurl}>
                  <div className="flex items-center py-2 px-3 bg-white mr-10">
                    <p className="text-zinc-900">LIVE STREAM</p>
                    <span className="ml-2 h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
                  </div>
                </Link>
              )}
              {scoreurl && (
                <Link href={scoreurl}>
                  <div className="flex items-center py-2 px-3 bg-white">
                    <p className="text-zinc-900">SCORES</p>
                    <span className="ml-2 h-3 w-3 bg-blue-500 rounded-full animate-pulse"></span>
                  </div>
                </Link>
              )}
            </div>
            <ContactUsButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;