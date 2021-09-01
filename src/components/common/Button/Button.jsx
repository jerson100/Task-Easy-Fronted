import React from "react";
import { ButtonStyle } from "./button.style";

const Button = ({ children, color, style, onClick }) => {
  return (
    <ButtonStyle onClick={onClick} color={color} style={style}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
