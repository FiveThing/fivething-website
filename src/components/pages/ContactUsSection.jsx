import React from "react";

import { Link } from "react-router-dom";

import { BiRightArrow } from "react-icons/bi";
import { SiFacebook, SiGithub, SiInstagram } from "react-icons/si";

const ContactUsSection = () => {
  return (
    <div className="h-full bg-pallete-fb8 flex items-center justify-center">
      <div className="z-10 flex flex-col space-y-3 items-center mx-3 md:mx-10 lg:mx-20">
        <h1 className="text-3xl font-righteous tracking-widest text-center md:text-5xl lg:text-6xl">
          Let's collaborate our minds!
        </h1>
        <p className="text-center md:text-2xl md:px-10">
          With a passionate team of designers and developers, let's go
          fivething!
        </p>
        <div className="flex text-2xl md:text-4xl">
          <a href="https://www.facebook.com/fivethingph/">
            <SiFacebook className="mx-2" />
          </a>
          <a href="https://www.instagram.com/fivethingph/">
            <SiInstagram className="mx-2" />
          </a>
          <a href="https://github.com/FiveThing">
            <SiGithub className="mx-2" />
          </a>
        </div>

        <Link to="/contactus">
          <button className="flex flex-row items-center space-x-1 md:text-2xl focus:outline-none">
            <p>Get in touch with us</p> <BiRightArrow />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactUsSection;
