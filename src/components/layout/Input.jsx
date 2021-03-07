import React from "react";

const Input = ({ name, placeholder, reg }) => {
  return (
    <div className="w-full">
      <label className="flex flex-col" htmlFor={name}>
        <p className="text-sm sm:text-2xl">{name}</p>
        <input
          className="w-full py-2 bg-transparent border-b-2 border-transparent  focus:outline-none focus:border-pallete-fb8"
          type="text"
          name={name}
          ref={reg}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};

export default Input;
