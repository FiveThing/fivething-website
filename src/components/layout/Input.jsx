import React from "react";

const Input = ({ htmlFor, placeholder }) => {
  return (
    <div className="m-2">
      <label className="flex flex-col" htmlFor={htmlFor}>
        <p className="text-2xl">{htmlFor}</p>
        <input
          className="py-2 bg-transparent border-b-2 border-transparent  focus:outline-none focus:border-pallete-ff9"
          type="text"
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};

export default Input;
