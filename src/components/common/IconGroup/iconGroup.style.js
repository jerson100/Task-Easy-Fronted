import styled from "styled-components";

const IconGroupStyle = styled.div`
  display: ${({ inline }) => (inline ? "inline-flex" : "flex")};
  flex-wrap: wrap;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  line-height: 0;
`;

const IconItemStyle = styled.div`
  margin-left: 0.2rem;
  margin-right: 0.2rem;
`;

export { IconGroupStyle, IconItemStyle };
