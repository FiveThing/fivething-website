import React from "react";
import WebsiteMonitor from "../../assets/img/mock-up.png";
import { ReactComponent as BlobsProject } from "../../assets/img/Blobs-Project.svg";

import { BiRightArrow } from "react-icons/bi";

const Projects = () => {
  return (
    <div className="h-full container mx-auto flex items-center">
      <div className="w-full flex flex-wrap flex-col lg:flex-row items-center">
        <div className="z-10 flex-1 md:space-y-5 flex-col mx-10 md:mx-28 lg:mx-16 space-y-3.5">
          <h1 className="font-majorMono text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            OUR WEBSITE
          </h1>
          <div className="ml-0 md:ml-5 text-md  md:text-2xl hover:text-pallete-ff9 cursor-pointer flex items-center">
            <a
              href="https://github.com/ALT-FOUR/alt-f4-website"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
            <BiRightArrow className="ml-1.5 -mb-0.5" />
          </div>
        </div>

        <div className="flex flex-1 relative justify-center items-center w-5/6 my-20">
          <img
            className="absolute w-5/6"
            src={WebsiteMonitor}
            alt="WebsiteMonitor"
          />
          <BlobsProject className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
