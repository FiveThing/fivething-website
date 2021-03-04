import React, { useState } from "react";

import { ReactComponent as Logo } from "../../assets/img/Alt-F4-Imp-Logo.svg";
import { Slant as Hamburger } from "hamburger-react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [navbar, setNavbar] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav
      className={`w-full fixed top-0 z-50 ${navbar ? "bg-pallete-base" : ""}`}
    >
      <div className="flex items-center justify-between p-2 sm:p-5 mx-2 sm:mx-10 ">
        <Logo
          className="h-12 w-auto sm:h-20"
          onClick={() => window.fullpage_api.moveTo(1, 0)}
        />
        <Hamburger rounded toggled={menuOpen} toggle={setMenuOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
