import React, { useState, useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";

const TeamCard = ({ image, onClickCapture }) => {
  const node = useRef();
  const [clicked, setClicked] = useState(false);

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setClicked(false);
  };

  useEffect(() => {
    if (clicked) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clicked]);

  const { setHeight, setWidth, ...springProps } = useSpring({
    setHeight: clicked ? 500 : 300,
    setWidth: clicked ? 250 : 200,
    backgroundPosition: clicked ? "50% 100%" : "50% 0%",
    from: {
      size: 200,
      backgroundPosition: "50% 0%",
    },
  });

  return (
    <animated.div
      className="m-3 z-50"
      ref={node}
      style={{
        height: setHeight,
        width: setWidth,
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        cursor: "pointer",
        ...springProps,
      }}
      onClick={() => setClicked(!clicked)}
      onClickCapture={onClickCapture}
    ></animated.div>
  );
};

export default TeamCard;
