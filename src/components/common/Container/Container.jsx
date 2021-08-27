import React from "react";
import { StyleBaseContainer, StyleContainer } from "./contaienr.style";
import PropTypes from "prop-types";

const Container = ({ children, fluid }) => {
  return (
    <>
      {fluid ? (
        <StyleBaseContainer>{children}</StyleBaseContainer>
      ) : (
        <StyleContainer>{children}</StyleContainer>
      )}
    </>
  );
};

Container.propTypes = {
  fluid: PropTypes.bool,
};

Container.defaultProps = {
  fluid: false,
};

export default Container;
