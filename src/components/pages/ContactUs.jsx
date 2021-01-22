import React from "react";
import NavigationText from "../layout/NavigationText";
import { ReactComponent as DotGrid } from "../../assets/img/DotGrid.svg";
import BlobsContacts from "../../assets/img/contacts-blobs.svg";

const ContactUs = () => {
  return (
    <div className="h-screen flex items-center">
      <NavigationText navText={"CONTACT US"} />

      <img
        className="h-full absolute right-0"
        src={BlobsContacts}
        alt="BlobsContacts"
      />
      
      <DotGrid className="absolute bottom-20 left-14" />

    </div>
  );
};

export default ContactUs;
