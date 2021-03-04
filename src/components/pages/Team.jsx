import React from "react";

import TeamCard from "../layout/TeamCard";

const Team = () => {
  return (
    <div className="h-full mb-72 pb-72 md:mb-0 md:pb-0 container mx-auto flex flex-col items-center justify-start lg:justify-center">
      <h1 className="font-majorMono text-4xl sm:text-7xl xl:text-9xl flex items-center mt-28 mb-40">
        OUR TEAM
      </h1>

      <TeamCard />
    </div>
  );
};

export default Team;
