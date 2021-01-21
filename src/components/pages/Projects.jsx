import React from "react";
import NavigationText from "../layout/NavigationText";
import { ReactComponent as DotGrid } from "../../assets/img/DotGrid.svg";

const Projects = () => {
  return (
    <div className="h-screen flex items-center">
      <NavigationText navText={"PROJECTS"} />
      Projects
      <DotGrid className="absolute bottom-20 left-14" />
    </div>
  );
};

export default Projects;
