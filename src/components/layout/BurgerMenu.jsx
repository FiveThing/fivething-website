import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { useTransition, animated, config } from "react-spring";

const BurgerMenu = ({ menuOpen, setMenuOpen }) => {
  const fullscreenMenu = useTransition(menuOpen, null, {
    from: {
      opacity: 0,
      transform: "translate3d(100vw,0,0)",
    },
    enter: {
      zIndex: "40",
      opacity: 1,
      transform: "translate3d(0,0,0)",
      position: "fixed",
      maxHeight: "100vh",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    leave: {
      opacity: 0,
      transform: "translate3d(-100vw,0,0)",
    },
    config: config.gentle,
  });

  useEffect(() => {
    if (menuOpen && window.fullpage_api === !undefined) {
      window.fullpage_api.setAllowScrolling(false);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.fullpage_api.setAllowScrolling(true);
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const links = [
    {
      id: 1,
      name: "HOME",
      path: "/",
    },
    {
      id: 2,
      name: "CONTACT",
      path: "/contactus",
    },
    {
      id: 3,
      name: "ABOUT",
      path: "/about",
    },
  ];

  const socialMedia = [
    {
      id: 1,
      name: "FACEBOOK",
      path: "",
    },
    {
      id: 2,
      name: "GITHUB",
      path: "",
    },
  ];

  return (
    <div>
      {fullscreenMenu.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="h-full bg-pallete-base flex items-center"
            >
              <div className="container mx-auto flex justify-between">
                <div className="mx-auto text-left">
                  <ul className="cursor-pointer text-5xl lg:text-7xl space-y-5">
                    {links.map((link) => (
                      <li
                        className="hover:text-pallete-ff9"
                        key={link.id}
                        onClickCapture={() => setMenuOpen(false)}
                      >
                        <Link to={link.path}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mx-auto text-right">
                  <ul className="cursor-pointer space-y-3 font-bold">
                    {socialMedia.map((link) => (
                      <li
                        className="hover:text-pallete-ff9"
                        key={link.id}
                        onClickCapture={() => setMenuOpen(false)}
                      >
                        <a href={link.path}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </animated.div>
          )
      )}
    </div>
  );
};

export default BurgerMenu;
