import styled from "styled-components";

const LoaderStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000ba;
  z-index: 1001;
`;

const LoaderContentStyle = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
`;

export { LoaderStyle, LoaderContentStyle };
