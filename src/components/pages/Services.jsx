import React from "react";

import "../../assets/css/services.css";
import ServicesCard from "../layout/ServicesCard";
import { RiRocketLine } from "react-icons/ri";
import { FaMountain } from "react-icons/fa";

const Services = () => {
  return (
    <div className="h-full container mx-auto flex flex-col items-center md:justify-center">
      <div>
        <h1 className="font-righteous text-2xl text-center mx-8 py-4 md:text-4xl lg:text-5xl xl:text-6xl">
          WHAT WE OFFER
        </h1>
        <p className="leading-relaxed text-base md:text-xl mb-8 text-center">
          We commit to integrate our unique intellectual efforts and creative
          juices <br />
          to offer a good quality product.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
        <ServicesCard text={"Website"} bgPallete={"bg-pallete-fb8"}>
          <RiRocketLine className="text-5xl flex-1" />
        </ServicesCard>

        <ServicesCard text={"UI/UX"} bgPallete={"bg-pallete-ffb"}>
          <FaMountain className="text-5xl flex-1" />
        </ServicesCard>
      </div>
    </div>
  );
};

export default Services;
