import styled from "styled-components";

const NotFoundContainerStyle = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #161616;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
`;

const NotFoundContentStyle = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`;

const TextStyle = styled.h1`
  font-size: 1.2rem;
  color: #fff;
`;

export { NotFoundContainerStyle, NotFoundContentStyle, TextStyle };
