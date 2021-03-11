import React, { useEffect } from "react";

import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

import Hello from "./Hello";
import Fivething from "./Fivething";
import Talaarawan from "./Talaarawan";
import ContactUsSection from "./ContactUsSection";
import AboutSection from "./AboutSection";

import "../../assets/css/navigation.css";

const Home = ({ isMenuOpen, setGoingUp }) => {
  useEffect(() => {
    if (isMenuOpen) {
      window.fullpage_api.setAllowScrolling(false);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.fullpage_api.setAllowScrolling(true);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <ReactFullpage
      className="z-0"
      scrollingSpeed={1000}
      keyboardScrolling={true}
      scrollOverflow={true}
      navigation={true}
      navigationPosition="left"
      navigationTooltips={["01", "02", "03", "04", "05", "06"]}
      showActiveTooltip={true}
      responsiveWidth="1024"
      afterLoad={(origin, destination, direction) => {
        if (destination.index > 0) {
          setGoingUp(true);
        } else {
          setGoingUp(false);
        }
      }}
      render={({ state, fullpageApi }) => (
        <div id="fullpage-wrapper">
          <div className="section">
            <Hello />
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
        </div>
      )}
    />
  );
};

export default Home;
