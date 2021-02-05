import React from "react";

import TeamCard from "../layout/TeamCard";

const Team = () => {
  return (
    <div className="h-4/5 xl:h-full container mx-auto flex flex-col items-center justify-center ">
      <h1 className="font-majorMono text-4xl sm:text-7xl md:text-8xl xl:text-9xl p-10 mb-5 lg:p-0 lg:mb-0 flex-2 xl:flex-1 flex items-center">
        OUR TEAM
      </h1>

      <div className="flex-1">
        <TeamCard />
      </div>
    </div>
  );
};

export default Team;
