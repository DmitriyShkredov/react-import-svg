import React from "react";
import Icons from "./sprite3.svg";

export const Icon2 = ({ name, className }) => {
  return (
    <svg className={className}>
      <use href={Icons + "#icon-" + name}></use>
    </svg>
  );
};
