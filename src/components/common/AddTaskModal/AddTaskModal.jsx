import React, { useCallback, useState } from "react";
import Modal from "../../Modal";
import Button from "../Button";
import Col from "../Row/components/Col";
import Row from "../Row";
import ColorPicker from "./components/ColorPicker";

import {
  FormStyle,
  InputStyle,
  LabelStyle,
  TaskFooterStyle,
  TextAreaStyle,
} from "./addTaskModal.style";
import PreviewTask from "./components/PreviewTask";
import Space from "../Space/Space";

const AddTaskModal = ({ handleOk, handleCancel, show, setshowModal }) => {
  return (
    <Modal size="sm" show={show} setshowModal={setshowModal}>
      <Modal.Header>Agregar Tarea</Modal.Header>
      <ModalContent
        handleOk={handleOk}
        setshowModal={setshowModal}
        show={show}
      />
    </Modal>
  );
};

const ModalContent = React.memo(({ handleOk, setshowModal }) => {
  const [color, setcolor] = useState("#9c27b0");
  const [{ title, description }, setInputs] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleClickOk = useCallback(() => {
    handleOk({ title, description, color }, () => {
      setshowModal(false);
    });
  }, [title, description, color]);

  return (
    <>
      <Modal.Body>
        <FormStyle>
          <Row>
            <Col xs={24} sm={12} md={5}>
              <LabelStyle>Title: </LabelStyle>
            </Col>
            <Col xs={24} sm={12} md={19}>
              <InputStyle
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </Col>
            <Col xs={24} sm={12} md={5}>
              <LabelStyle>Description: </LabelStyle>
            </Col>
            <Col xs={24} sm={12} md={19}>
              <TextAreaStyle
                as="textarea"
                name="description"
                value={description}
                onChange={handleChange}
              />
            </Col>
            <Col xs={24} sm={12} md={5}>
              <LabelStyle>Color: </LabelStyle>
            </Col>
            <Col xs={24} sm={12} md={19}>
              <ColorPicker color={color} setcolor={setcolor} />
            </Col>
          </Row>
        </FormStyle>
        <Space size="xl" />
        <Row>
          <Col xs={24} sm={12} md={5}>
            <LabelStyle>Color: </LabelStyle>
          </Col>
          <Col xs={24} sm={12} md={19}>
            <PreviewTask
              title={title}
              description={description}
              color={color}
            />
          </Col>
        </Row>
      </Modal.Body>
      <ModalFooter handleOk={handleClickOk} setshowModal={setshowModal} />
    </>
  );
});

const ModalFooter = React.memo(({ handleOk, handleClose, setshowModal }) => {
  return (
    <Modal.Footer>
      <TaskFooterStyle>
        <Button
          color="primary"
          style={{ marginRight: "1rem" }}
          onClick={handleOk}
        >
          Agregar
        </Button>
        <Button color="danger" onClick={() => setshowModal(false)}>
          Cancelar
        </Button>
      </TaskFooterStyle>
    </Modal.Footer>
  );
});

export default AddTaskModal;
