import React, { useState } from "react";

import { Link } from "react-router-dom";

// import { ReactComponent as Logo } from "../../assets/img/Alt-F4-Imp-Logo.svg";
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
      <div className="flex items-center justify-between py-2 sm:py-10 mx-2 sm:mx-10 ">
        {/* <Link to="/">
          <Logo className="h-12 w-auto sm:h-20" />
        </Link> */}
        <Link to="/">
          <h1 className="font-righteous text-4xl">fivething</h1>
        </Link>
        <Hamburger rounded toggled={menuOpen} toggle={setMenuOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
