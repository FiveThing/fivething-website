import React from "react";

import BlobsTeam from "../../assets/img/blobs-team.svg";
import NavigationText from "../layout/NavigationText";

const Team = () => {
  return (
    <div className="h-screen flex items-center">
      <NavigationText navText={"TEAM"} />
      <img
        className="h-full absolute right-0"
        src={BlobsTeam}
        alt="BlobsTeam"
      />
    </div>
  );
};

export default Team;
