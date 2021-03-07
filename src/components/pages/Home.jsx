import React from "react";

import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

import Landing from "./Landing";
import Fivething from "./Fivething";
import Talaarawan from "./Talaarawan";
import ContactUsSection from "./ContactUsSection";
import AboutSection from "./AboutSection";

import { BiUpArrow } from "react-icons/bi";

import "../../assets/css/navigation.css";

const Home = () => {
  return (
    <ReactFullpage
      className="z-0"
      scrollOverflow={true}
      navigation={true}
      navigationPosition="left"
      navigationTooltips={["01", "02", "03", "04", "05", "06"]}
      showActiveTooltip={true}
      responsiveWidth="1024"
      render={({ state, fullpageApi }) => (
        <div id="fullpage-wrapper">
          <div className="section">
            <Landing />
          </div>
          <div className="section">Services</div>
          <div className="section">
            <Fivething />
          </div>
          <div className="section">
            <Talaarawan />
          </div>
          <div className="section">
            <ContactUsSection />
          </div>
          <div className="section">
            <AboutSection />
          </div>
          <button
            className="absolute bottom-5 right-5 md:bottom-10 md:right-14 p-3 flex items-center justify-center text-2xl focus:outline-none animate-bounce"
            onClick={() => fullpageApi.moveTo(1, 0)}
          >
            <BiUpArrow />
          </button>
        </div>
      )}
    />
  );
};

export default Home;