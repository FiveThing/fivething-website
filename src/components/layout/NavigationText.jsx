import React from "react";

import { ReactComponent as DotGrid } from "../../assets/img/DotGrid.svg";

const NavigationText = ({ navText = "NavText" }) => {
  return (
    <div className="h-full flex flex-col ml-10 px-5 py-10">
      <div className="flex-1" />
      <div className="w-full flex-1 flex items-center justify-center">
        <ul
          className="hover:text-blob-f98 text-2xl transition ease-in-out cursor-pointer select-none"
          onClick={() => window.fullpage_api.moveSectionDown()}
        >
          {navText.split("").map((letter) => (
            <li>{letter}</li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex items-end">
        <DotGrid />
      </div>
    </div>
  );
};

export default NavigationText;
