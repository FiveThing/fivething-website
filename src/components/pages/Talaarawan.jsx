import React from "react";
import TalaarawanMonitor from "../../assets/img/TalaarawanMonitor.png";
import T from "../../assets/img/T.png";

import { BiRightArrow } from "react-icons/bi";

const Talaarawan = () => {
  return (
    <div className="h-full container mx-auto py-10 flex flex-col items-center lg:flex-row lg:py-24">
      <div className="flex flex-2 flex-col mx-3 py-5 space-y-4 md:mx-10 md:py-10 lg:flex-1 lg:justify-center lg:mx-28 xl:mx-24 2xl:mx-16 ">
        <h1 className=" font-righteous text-pallete-fb8 text-3xl tracking-widest md:text-5xl">
          TALAARAWAN
        </h1>
        <p className="leading-relaxed md:text-2xl">
          Our very own start-up website portfolio that provides services for the
          clients desired web design and development
        </p>
        <button className="flex flex-row items-center space-x-1 focus:outline-none hover:text-pallete-fb8 md:text-xl">
          <p>View Project</p> <BiRightArrow />
        </button>
      </div>

      <div className="relative flex-1 flex items-center justify-center">
        <div className=" flex items-center justify-center h-4/5 w-4/5">
          <div className="flex items-end justify-center">
            <img src={T} alt="F" className="h-full lg:h-auto" />
            <img
              src={TalaarawanMonitor}
              alt="Website Monitor"
              className="absolute"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talaarawan;
