import React from "react";

const NavigationText = ({ navText }) => {
  return (
    <div className="text-center text-2xl w-48">
      <ul
        className="hover:text-blob-f98 transition ease-in-out cursor-pointer"
        onClick={() => window.fullpage_api.moveSectionDown()}
      >
        {navText.split("").map((letter) => (
          <li>{letter}</li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationText;
