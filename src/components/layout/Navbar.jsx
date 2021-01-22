import React from "react";

import { ReactComponent as Logo } from "../../assets/img/Alt-f4-New-Logo.svg";
import { Slant as Hamburger } from "hamburger-react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav className="w-full fixed top-0 z-50">
      <div className="flex items-center justify-between p-5 mx-10">
        <Logo
          className="h-20 bg-trueGray-800"
          onClick={() => window.fullpage_api.moveTo(1, 0)}
        />
        <Hamburger rounded toggled={menuOpen} toggle={setMenuOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
