import React from "react";
import Task from "../../../Task";
import { PreviewTaskStyle } from "./previewTask.style";

const PreviewTask = ({ color, title, description }) => {
  return (
    <PreviewTaskStyle>
      <Task color={color} description={description} title={title} />
    </PreviewTaskStyle>
  );
};

export default PreviewTask;
