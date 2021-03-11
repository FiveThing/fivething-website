import React from "react";
import WebsiteMonitor from "../../assets/img/WebsiteMonitor.png";
import F from "../../assets/img/F.png";

import { BiRightArrow } from "react-icons/bi";

const Fivething = () => {
  return (
    <div className="h-full lg:h-screen container mx-auto flex items-center justify-center py-10 md:py-20 lg:py-24">
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="flex flex-2 flex-col mx-3 py-5 space-y-4 md:mx-10 md:py-10 lg:flex-1 lg:justify-center lg:mx-28 xl:mx-24 2xl:mx-16 ">
          <h1 className=" font-righteous text-pallete-fb8 text-3xl tracking-widest md:text-5xl">
            FIVETHING
          </h1>
          <p className="leading-relaxed md:text-2xl">
            Our very own start-up website portfolio that provides services for
            the clients desired web design and development
          </p>
          <button className="flex flex-row items-center space-x-1 focus:outline-none hover:text-pallete-fb8 md:text-xl">
            <a href="https://github.com/FiveThing/fivething-website">
              View Project
            </a>
            <BiRightArrow />
          </button>
        </div>

        <div className="relative flex-1 flex items-center justify-center">
          <div className=" flex items-center justify-center h-4/6 w-4/6">
            <div className="flex items-end justify-center">
              <img src={F} alt="F" className="h-full lg:h-auto" />
              <img
                src={WebsiteMonitor}
                alt="Website Monitor"
                className="absolute"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fivething;
