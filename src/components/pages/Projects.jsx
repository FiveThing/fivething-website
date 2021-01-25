import React from "react";
import NavigationText from "../layout/NavigationText";
import WebsiteMonitor from "../../assets/img/mock-up.png";

import { BiRightArrow } from "react-icons/bi";

const Projects = () => {
  return (
    <div className="h-screen flex items-center select-none">
      <NavigationText navText="PROJECTS" />

      <div className="font-jura font-bold flex-1 flex justify-center items-center">
        <div className="space-y-5 flex-col flex">
          <p className="text-5xl">Our Website</p>
          <p className="text-2xl text-blob-f98 hover:text-blob-ff9 cursor-pointer flex items-center">
            <a
              href="https://github.com/ALT-FOUR/alt-f4-website"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
            <BiRightArrow className="ml-1.5 -mb-0.5" />
          </p>
        </div>
      </div>

      <div className="flex-2" />

      <div className="flex-1 flex justify-start items-center">
        <img className="w-5/6" src={WebsiteMonitor} alt="WebsiteMonitor" />
      </div>
    </div>
  );
};

export default Projects;
