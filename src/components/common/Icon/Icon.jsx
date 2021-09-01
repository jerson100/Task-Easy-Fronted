import React from "react";
import { IconStyle } from "./icon.style";

const Icon = ({ className, size, color, handleClick }) => {
  return (
    <span onClick={handleClick}>
      <IconStyle className={className} size={size} c={color} />
    </span>
  );
};

export default React.memo(Icon);
