import React from "react";
import { AnimateImageStyle, LeftImage, RightImage } from "./animateImage.style";
import {
  imageContainerVariants,
  leftImageVariants,
  rightImageVariants,
} from "./animateImage.variants";

const AnimateImage = ({ urlLeft, urlRight }) => {
  return (
    <AnimateImageStyle
      variants={imageContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <LeftImage src={urlLeft} variants={leftImageVariants} />
      <RightImage src={urlRight} variants={rightImageVariants} />
    </AnimateImageStyle>
  );
};

export default React.memo(AnimateImage);
