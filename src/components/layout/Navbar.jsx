import React from "react";

import { ReactComponent as Logo } from "../../assets/img/Alt-f4-New-Logo.svg";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-50">
      <div className="flex items-center justify-between p-5 mx-5">
        <Logo className="h-24" />
        <HiOutlineMenuAlt4 className="text-5xl" />
      </div>
    </nav>
  );
};

export default Navbar;
