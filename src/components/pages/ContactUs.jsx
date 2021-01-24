import React from "react";
import NavigationText from "../layout/NavigationText";
import BlobsContacts from "../../assets/img/contacts-blobs.svg";

const ContactUs = () => {
  return (
    <div className="h-screen flex items-center">
      <NavigationText navText="CONTACT US" />

      <img
        className="h-full absolute right-0"
        src={BlobsContacts}
        alt="BlobsContacts"
      />
      

    </div>
  );
};

export default ContactUs;
