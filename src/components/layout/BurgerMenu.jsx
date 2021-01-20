import React from "react";
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
      position: "absolute",
      maxHeight: "100vh",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    leave: {
      opacity: 0,
      transitionDelay: ".1s",
      transform: "translate3d(-100vw,0,0)",
    },
    config: config.gentle,
  });

  const links = ["HOME", "TEAM", "PROJECTS", "CONTACT US"];

  return (
    <div>
      {fullscreenMenu.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <ul className="h-full bg-trueGray-800 cursor-pointer flex flex-col justify-center text-7xl p-0 m-0 list-none overflow-hidden text-center">
                {links.map((link) => {
                  return (
                    <li
                      className="m-5 hover:text-blob-f98"
                      onClick={() =>
                        window.fullpage_api.moveTo(links.indexOf(link) + 1, 0)
                      }
                      onClickCapture={() => setMenuOpen(false)}
                    >
                      {link}
                    </li>
                  );
                })}
              </ul>
            </animated.div>
          )
      )}
    </div>
  );
};

export default BurgerMenu;
