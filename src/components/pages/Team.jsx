import React, { useState } from "react";

import NavigationText from "../layout/NavigationText";
import TeamCard from "../layout/TeamCard";

// import Andrei from "../../assets/img/andrei.JPG";
// import Glendell from "../../assets/img/glendell.png";
// import Raven from "../../assets/img/raven.jpg";

// const imageLinks = [Andrei, Glendell, Raven, Glendell];
import { TeamDetails } from "../layout/TeamDetails";

const Team = () => {
  const [showDetails, setShowDetails] = useState({});

  return (
    <div className="Team h-screen flex items-center">
      <NavigationText navText="TEAM" />

      <div className="flex w-full">
        <div
          className="flex flex-1 items-center mx-10"
          style={{ height: "32rem" }}
        >
          {TeamDetails.map((team) => (
            <TeamCard
              key={team.id}
              image={team.photo}
              onClickCapture={() => setShowDetails(team.details)}
            />
          ))}
        </div>

        <div className="z-50 flex-1 flex flex-col justify-center items-center mx-10 mb-20 p-10">
          <h1 className="text-3xl">{showDetails.name}</h1>
          <p>{showDetails.role}</p>
          {showDetails.links === undefined ? (
            <p className="text-4xl p-5 ml-10">
              We are start up web developers providing services for your desired
              web design
            </p>
          ) : (
            <div className="flex text-2xl">
              {showDetails.links.map((link) => (
                <div className="m-1" key={link.id}>
                  <a href={`${link.socmed}`}>{link.logo}</a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
