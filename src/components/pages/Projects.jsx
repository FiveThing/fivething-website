import React from "react";
import NavigationText from "../layout/NavigationText";
import WebsiteMonitor from "../../assets/img/mock-up.png";
import { ReactComponent as DotGrid } from "../../assets/img/DotGrid.svg";

import { BiRightArrow } from "react-icons/bi";

const Projects = () => {
  return (
    <div className="h-screen flex items-center select-none">
      <NavigationText navText={"PROJECTS"} />

      <div className="font-jura font-bold flex-1 flex justify-center items-center">
        <div className="flex-col">
          <p className="text-5xl">Our Website</p>
          <p className="text-2xl text-blob-f98   hover:text-blob-ff9 cursor-pointer flex items-center">
            <a href="https://github.com/ALT-FOUR/alt-f4-website">
              View Project
            </a>{" "}
            <BiRightArrow className="ml-2" />
          </p>
        </div>
      </div>

      <div className="flex-2" />

      <div className="flex-1 flex justify-start items-center">
        <img className="w-5/6" src={WebsiteMonitor} alt="WebsiteMonitor" />
      </div>

      <DotGrid className="absolute bottom-20 left-14" />
    </div>
  );
};

export default Projects;
