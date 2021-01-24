import React from "react";

import BlobsTeam from "../../assets/img/blobs-team.svg";
import NavigationText from "../layout/NavigationText";
import BlobsMini from "../../assets/img/blobsmini-team.svg";

const Team = () => {
  return (
    <div className="h-screen flex items-center">
      <NavigationText navText="TEAM" />

      <img
        className="h-full absolute right-0"
        src={BlobsTeam}
        alt="BlobsTeam"
      />

      <img
        className="absolute bottom-0 w-1/3 left-64"
        src={BlobsMini}
        alt="BlobsMini"
      />
    </div>
  );
};

export default Team;
