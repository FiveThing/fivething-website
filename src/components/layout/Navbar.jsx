import React from "react";

import { ReactComponent as Logo } from "../../assets/img/Alt-f4-New-Logo.svg";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 mx-8">
      <Logo className="h-24" />
      <HiOutlineMenuAlt4 className="text-5xl" />
    </nav>
  );
};

export default Navbar;
