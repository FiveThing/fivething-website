import React from "react";
import TeamCard from "../layout/TeamCard";

const Team = () => {
  return (
    <div className="h-screen container mx-auto flex flex-col items-center md:justify-center">
      <div className="mt-16 md:mt-96 lg:mt-56 xl:mt-0">
        <h1 className="font-righteous text-2xl text-center mx-8 py-10 md:text-4xl lg:text-5xl xl:text-6xl">
          MEET THE CREWMATES
        </h1>
        <TeamCard />
      </div>
    </div>
  );
};

export default Team;
