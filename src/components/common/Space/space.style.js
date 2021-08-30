import styled from "styled-components";

const sizes = {
  sm: ".8rem",
  md: "1rem",
  lg: "1.2rem",
  xl: "1.5rem",
};

const SpaceStyle = styled.div`
  height: ${({ tam }) => sizes[tam] || sizes.md};
  width: 100%;
`;

export default SpaceStyle;
