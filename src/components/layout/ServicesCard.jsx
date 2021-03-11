import React from "react";
import "../../assets/css/services.css";

const ServicesCard = ({ text, bgPallete, children }) => {
  return (
    <div className="card h-96 w-72 relative">
      <div className="z-10 absolute w-full h-full flex flex-col items-center">
        {children}
        <p className="flex-1 font-righteous tracking-widest text-xl">{text}</p>
      </div>
      <div className={`liquid ${bgPallete}`}></div>
    </div>
  );
};

export default ServicesCard;
