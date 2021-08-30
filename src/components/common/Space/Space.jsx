import React from "react";
import PropTypes from "prop-types";
import SpaceStyle from "./space.style";

const Space = React.memo(({ size, children }) => {
  return <SpaceStyle tam={size}>{children}</SpaceStyle>;
});

Space.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]).isRequired,
};

Space.defaultProps = {
  size: "md",
};

export default Space;
