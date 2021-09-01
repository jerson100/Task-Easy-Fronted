import React, { useEffect } from "react";
import {
  ModalBodyStyle,
  ModalContainerStyle,
  ModalContentStyle,
  ModalDialogStyle,
  ModalFooterStyle,
  ModalHeaderStyle,
} from "./modal.style";

const Modal = ({ children, size }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <ModalContainerStyle>
      <ModalDialogStyle $size={size}>
        <ModalContentStyle>{children}</ModalContentStyle>
      </ModalDialogStyle>
    </ModalContainerStyle>
  );
};

const Header = ({ children }) => {
  return <ModalHeaderStyle>{children}</ModalHeaderStyle>;
};
const Body = ({ children }) => {
  return <ModalBodyStyle>{children}</ModalBodyStyle>;
};
const Footer = ({ children }) => {
  return <ModalFooterStyle>{children}</ModalFooterStyle>;
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
