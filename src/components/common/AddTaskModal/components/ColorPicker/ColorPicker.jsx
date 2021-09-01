import React, { useState } from "react";
import { CirclePicker } from "react-color";

const ColorPicker = ({ color, setcolor }) => {
  const handleChangeColor = (color) => {
    setcolor(color.hex);
  };
  return (
    <CirclePicker
      color={color}
      onChangeComplete={handleChangeColor}
    ></CirclePicker>
  );
};

export default React.memo(ColorPicker);
