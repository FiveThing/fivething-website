import React from "react";

import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="h-full">
      <div className="h-full container mx-auto flex items-center justify-center">
        <h1 className="font-majorMono text-center hover:text-pallete-fb8 mx-3 md:text-3xl md:mx-5 lg:text-5xl lg:mx-10">
          <Link to="/about">GET TO KNOW MORE ABOUT FIVETHING!</Link>
        </h1>
      </div>
    </div>
  );
};

export default AboutSection;
