import React from "react";
import { IconStyle } from "./icon.style";

const Icon = ({ className, size, color }) => {
  return <IconStyle className={className} size={size} color={color} />;
};

export default Icon;
