import React, { useState } from "react";

import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

import Navbar from "./components/layout/Navbar";
import ContactUs from "./components/pages/ContactUs";
import Landing from "./components/pages/Landing";
import Projects from "./components/pages/Projects";
import Team from "./components/pages/Team";
import BurgerMenu from "./components/layout/BurgerMenu";
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
              className="absolute bottom-10 right-10 p-3 bg-blob-f98 rounded-full"
              onClick={() => fullpageApi.moveTo(1, 0)}
            >
              Up
            </button>
          </div>
        )}
      />
    </div>
  );
}

export default App;
