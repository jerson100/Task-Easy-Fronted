import styled, { css } from "styled-components";
import { breakpointContainer, breakpoints } from "../../configs/style";

const padding = css`
  padding: 1rem;
`;

const ModalContainerStyle = styled.div`
  background-color: #000000ba;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

const ModalDialogStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  min-height: calc(100vh - 2rem);
  max-width: 100%;
  ${({ $size }) => $size && breakpointContainer(breakpoints[$size])}
`;

const ModalContentStyle = styled.div`
  width: 100%;
  background-color: #fff;
`;

const ModalHeaderStyle = styled.div`
  ${padding}
  border-bottom: solid 2px rgba(0,0,0,.05);
  font-weight: bold;
`;
const ModalBodyStyle = styled.div`
  ${padding}
`;
const ModalFooterStyle = styled.div`
  ${padding}
  border-top: solid 2px rgba(0,0,0,.05);
`;

export {
  ModalBodyStyle,
  ModalContainerStyle,
  ModalDialogStyle,
  ModalFooterStyle,
  ModalHeaderStyle,
  ModalContentStyle,
};
