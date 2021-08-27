import React from "react";
import { ButtonStyle } from "./button.style";

const Button = ({ children }) => {
  return <ButtonStyle color="purple">{children}</ButtonStyle>;
};

export default Button;
