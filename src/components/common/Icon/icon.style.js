import styled from "styled-components";

const sizes = {
  small: {
    "font-size": "1.25rem",
  },
  normal: {
    "font-size": "1.5rem",
  },
  large: {
    "font-size": "2rem",
  },
};

const IconStyle = styled.i`
  font-size: ${({ size }) => sizes[size]["font-size"]} !important;
  /* width: ${({ size }) => sizes[size].width} !important;
  height: ${({ size }) => sizes[size].height} !important; */
  width: 1em !important;
  height: 1em !important;
  display: inline-block;
  overflow: visible;
  vertical-align: -0.125em;
  cursor: pointer;
  color: ${({ c }) => {
    return c;
  }};
`;

IconStyle.defaultProps = {
  size: "small",
  c: "#fff",
};

export { IconStyle };
