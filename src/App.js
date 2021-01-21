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

import "./index.css";

function App() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <div
      className="App relative max-h-screen"
      style={{
        overflow: isMenuOpen ? "hidden" : null,
      }}
    >
      <Navbar menuOpen={isMenuOpen} setMenuOpen={setisMenuOpen} />
      <BurgerMenu menuOpen={isMenuOpen} setMenuOpen={setisMenuOpen} />
      <ReactFullpage
        className="z-0"
        scrollOverflow={true}
        render={({ state, fullpageApi }) => (
          <div id="fullpage-wrapper">
            <div className="section">
              <Landing />
            </div>
            <div className="section">
              <Team />
            </div>
            <div className="section">
              <Projects />
            </div>
            <div className="section">
              <ContactUs />
            </div>
            <button
              className="absolute bottom-20 right-10 p-3 flex items-center justify-center text-2xl bg-blob-f98 h-14 w-14 rounded-full focus:outline-none hover:bg-white hover:text-blob-f98 transition duration-300 ease-in-out"
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
