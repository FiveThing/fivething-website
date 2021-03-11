import React, { useEffect } from "react";

import { BiLeftArrow } from "react-icons/bi";

import { animated, useSpring, useTransition, config } from "react-spring";

const ScrollTop = ({ goingUp }) => {
  const [rotate, setRotate] = useSpring(() => ({
    config: config.stiff,
    to: { deg: 0 },
  }));

  useEffect(() => {
    setRotate({ deg: goingUp ? -180 : 0 });
  });

  const slides = useTransition(goingUp, null, {
    from: {
      opacity: 0,
      transform: "translate3d(120px, 0, 0)",
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0px,0,0)",
    },
    leave: {
      opacity: 0,
      transform: "translate3d(-120px, 0, 0)",
    },
  });

  return (
    <div className="hidden z-10 fixed bottom-14 right-14 lg:flex items-center justify-center h-56 w-10 ">
      <button
        className="text-xl relative flex items-center transform -rotate-90 focus:outline-none"
        onClick={() => {
          if (goingUp) {
            window.fullpage_api.moveTo(1, 0);
          } else {
            window.fullpage_api.moveSectionDown();
          }
        }}
      >
        <animated.div
          style={{
            transform: rotate.deg.interpolate((d) => `rotate(${d}deg)`),
          }}
        >
          <BiLeftArrow className="text-2xl" />
        </animated.div>
        <div className="ml-5 w-40 text-base">
          {slides.map(
            ({ item, props, key }) =>
              item && (
                <animated.p key={key} style={props}>
                  Go Back to Top
                </animated.p>
              )
          )}
        </div>
      </button>
    </div>
  );
};

export default ScrollTop;
