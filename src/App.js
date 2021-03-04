import React, { useState } from "react";

import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

import Navbar from "./components/layout/Navbar";
import ContactUs from "./components/pages/ContactUs";
import Landing from "./components/pages/Landing";
import Projects from "./components/pages/Projects";
import Team from "./components/pages/Team";
import BurgerMenu from "./components/layout/BurgerMenu";

import { BiUpArrow } from "react-icons/bi";
import { ToastProvider } from "react-toast-notifications";

import "./index.css";
import "./assets/css/navigation.css";

function App() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  return (
    <div className="App relative">
      <Navbar menuOpen={isMenuOpen} setMenuOpen={setisMenuOpen} />
      <BurgerMenu menuOpen={isMenuOpen} setMenuOpen={setisMenuOpen} />
      <ReactFullpage
        className="z-0"
        scrollOverflow={true}
        navigation={true}
        navigationPosition="left"
        navigationTooltips={["01", "02", "03", "04"]}
        showActiveTooltip={true}
        responsiveWidth="1024"
        render={({ state, fullpageApi }) => (
          <div id="fullpage-wrapper">
            <div className="section">
              <Landing />
            </div>
            <div className="section">
              <Projects />
            </div>
            <div className="section">
              <Team />
            </div>
            <div className="section">
              <ToastProvider>
                <ContactUs />
              </ToastProvider>
            </div>
            <button
              className="absolute bottom-5 right-5 md:bottom-10 md:right-14 p-3 flex items-center justify-center text-2xl bg-pallete-ff9 h-14 w-14 rounded-full focus:outline-none hover:bg-white hover:text-pallete-ff9 transition duration-300 ease-in-out select-none animate-bounce"
              onClick={() => fullpageApi.moveTo(1, 0)}
            >
              <BiUpArrow />
            </button>
          </div>
        )}
      />
    </div>
  );
}

export default App;
