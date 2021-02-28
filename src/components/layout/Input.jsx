import React from "react";

const Input = ({ name, placeholder, reg }) => {
  return (
    <div className="m-2">
      <label className="flex flex-col" htmlFor={name}>
        <p className="text-2xl">{name}</p>
        <input
          className="py-2 bg-transparent border-b-2 border-transparent  focus:outline-none focus:border-pallete-ff9"
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
