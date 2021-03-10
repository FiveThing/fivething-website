import React from "react";

import "../../assets/css/hello.css";
import { BsChevronCompactDown } from "react-icons/bs";

import { useSpring, animated } from "react-spring";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;

const Hello = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <div
      className="hello relative h-full w-full flex items-center justify-center"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div className=" z-10 h-full space-y-3.5 absolute flex flex-col text-center items-center justify-center">
        <h1 className="font-righteous tracking-widest text-5xl md:text-7xl lg:text-8xl">
          HELLO,
        </h1>
        <p className="text-sm sm:text-2xl">
          We are Student Developers from
          <br />
          Polytechnic University of the Philippines
        </p>
        <BsChevronCompactDown
          className="z-10 absolute bottom-20 right-0 left-0 m-auto text-4xl animate-bounce hover:text-blob-f98 transition ease-in-out cursor-pointer"
          onClick={() => window.fullpage_api.moveSectionDown()}
        />
      </div>
      <animated.div
        className="card1 hidden lg:block"
        style={{ transform: props.xy.interpolate(trans1) }}
      />
      <animated.div
        className="card2 hidden lg:block"
        style={{ transform: props.xy.interpolate(trans2) }}
      />
      <animated.div className="card3 hidden lg:block" />
      <animated.div className="card4 hidden lg:block" />
      <animated.div className="card5 hidden lg:block" />
      <animated.div className="card6 hidden lg:block" />
    </div>
  );
};

export default Hello;
