import React, { useEffect } from "react";
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
    if (menuOpen) {
      window.fullpage_api.setAllowScrolling(false);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.fullpage_api.setAllowScrolling(true);
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const links = ["HOME", "PROJECTS", "TEAM", "CONTACT US"];

  return (
    <div>
      {fullscreenMenu.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <ul className="h-full bg-pallete-base cursor-pointer flex flex-col justify-center items-center text-5xl lg:text-7xl p-0 m-0 list-none overflow-hidden">
                {links.map((link) => {
                  return (
                    <li
                      className="m-5 hover:text-pallete-ff9 transition duration-300 ease-in-out"
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
