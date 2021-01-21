import React from "react";
import NavigationText from "../layout/NavigationText";
import WebsiteMonitor from "../../assets/img/mock-up.png";

const Projects = () => {
  return (
    <div className="h-screen flex items-center select-none">
      <NavigationText navText={"PROJECTS"} />

      <img
        className="absolute w-5/12 right-32"
        src={WebsiteMonitor}
        alt="WebsiteMonitor"
      />

      <div className="font-jura font-bold mx-20 space-y-5 absolute top-72 inset-x-52">
        <p className="text-5xl">Our Website</p>
        <p className="text-2xl text-blob-ff7 hover:text-blob-ff9 cursor-pointer">View Project</p>
      </div>


    </div>
  );
};

export default Projects;
