import React from "react";
import { createPortal } from "react-dom";
import Modal from "../../Modal";
import Button from "../Button";

const ConfirmModal = ({ handleOk, show, setShowModal, title }) => {
  if (!show) return null;
  return (
    <Modal>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Footer>
        <Button
          color="primary"
          onClick={() => {
            handleOk();
          }}
        >
          Aceptar
        </Button>
        <Button color="danger" onClick={() => setShowModal(false)}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default createPortal(ConfirmModal, document.body);
