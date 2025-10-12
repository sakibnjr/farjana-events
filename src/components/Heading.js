import React from "react";

const Heading = ({ text, border = true, className = "" }) => {
  return (
    <h1
      className={`text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-cfont text-center leading-tight ${
        border ? "border-b-2 border-black pb-2" : ""
      } ${className}`}
    >
      {text}
    </h1>
  );
};

export default Heading;
