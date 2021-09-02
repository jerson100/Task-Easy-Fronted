import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  ModalBodyStyle,
  ModalContainerStyle,
  ModalContentStyle,
  ModalDialogStyle,
  ModalFooterStyle,
  ModalHeaderStyle,
} from "./modal.style";
import { modalContainerVariants, modalContentVariants } from "./modal.variants";

const Modal = ({ children, size, show, setShowModal }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);
  return createPortal(
    <AnimatePresence>
      {show && (
        <ModalContainerStyle
          initial="hidden"
          animate="visible"
          variants={modalContainerVariants}
          exit="exit"
        >
          <ModalDialogStyle $size={size}>
            <ModalContentStyle variants={modalContentVariants}>
              {children}
            </ModalContentStyle>
          </ModalDialogStyle>
        </ModalContainerStyle>
      )}
    </AnimatePresence>,
    document.body
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
