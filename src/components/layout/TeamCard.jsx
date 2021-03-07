import React from "react";

import { TeamDetails } from "./TeamDetails";

const TeamCard = () => {
  return (
    <div className="h-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 xl:gap-10">
      {TeamDetails.map((team) => (
        <div className="flex flex-col items-center justify-center">
          <div className="h-40 md:h-50 lg:h-60 xl:h-80">
            <img src={team.photo} alt="TeamPhoto" className="h-full" />
          </div>
          <h1 className="font-bold mt-3 xl:text-lg">{team.details.name}</h1>
          <p className="text-sm">{team.details.role}</p>
          <div className="flex p-1 lg:text-lg">
            {team.details.links.map((link) => (
              <a href={link.socmed} className="m-2">
                {link.logo}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
