import React, { useCallback, useState } from "react";
import Modal from "../../Modal";
import Button from "../Button";
import Col from "../Row/components/Col";
import Row from "../Row";
import ColorPicker from "./components/ColorPicker";
import Proptypes from "prop-types";
import {
  FormStyle,
  InputStyle,
  LabelStyle,
  TaskFooterStyle,
  TextAreaStyle,
} from "./addTaskModal.style";
import PreviewTask from "./components/PreviewTask";
import Space from "../Space/Space";

const AddTaskModal = ({
  handleOk,
  handleCancel,
  show,
  setshowModal,
  isUpdate,
  idTask,
  title,
  description,
  color,
}) => {
  return (
    <Modal size="sm" show={show} setshowModal={setshowModal}>
      <Modal.Header>{isUpdate ? "Actualizar" : "Agregar"} Tarea</Modal.Header>
      <ModalContent
        handleOk={handleOk}
        setshowModal={setshowModal}
        show={show}
        isUpdate={isUpdate}
        idTask={idTask}
        title={title}
        description={description}
        color={color}
      />
    </Modal>
  );
};

AddTaskModal.propTypes = {
  idTask: Proptypes.string,
  title: Proptypes.string,
  description: Proptypes.string,
  color: Proptypes.string,
  isUpdate: Proptypes.bool,
};

AddTaskModal.defaultProps = {
  title: "",
  description: "",
  color: "#9c27b0",
  idTask: null,
  isUpdate: false,
};

const ModalContent = React.memo(
  ({
    handleOk,
    setshowModal,
    isUpdate,
    idTask,
    title: titleProps,
    description: descriptionProps,
    color: colorProps,
  }) => {
    const [color, setcolor] = useState(colorProps);
    const [{ title, description }, setInputs] = useState({
      title: titleProps,
      description: descriptionProps,
    });

    const handleChange = (e) => {
      e.preventDefault();
      const { value, name } = e.target;
      setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    };

    const handleClickOk = useCallback(() => {
      let message = "";
      if (title === "") {
        message = "El título no puede estar vacío";
      } else if (title.length > 40) {
        message = "El título no puede tener más de 40 carácteres";
      } else if (description && description.length > 500) {
        message = "La descripción no puede tener más de 500 caràcteres";
      }
      if (message) {
        //Un simple alert porque no quiero crear otro componente para mostrar notificación
        //ya que a mi parecer este ejercicio es muy sencillo y no merece la pena hacer ello
        //att: Jerson Ramírez del pasado.
        alert(message);
        return;
      }
      handleOk({ title, description, color, id: idTask }, () => {
        setshowModal(false);
      });
    }, [title, description, color, handleOk, idTask, setshowModal]);

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
        <ModalFooter
          handleOk={handleClickOk}
          setshowModal={setshowModal}
          isUpdate={isUpdate}
        />
      </>
    );
  }
);

const ModalFooter = React.memo(
  ({ handleOk, handleClose, setshowModal, isUpdate }) => {
    return (
      <Modal.Footer>
        <TaskFooterStyle>
          <Button
            color="primary"
            style={{ marginRight: "1rem" }}
            onClick={handleOk}
          >
            {isUpdate ? "Actualizar" : "Agregar"}
          </Button>
          <Button color="danger" onClick={() => setshowModal(false)}>
            Cancelar
          </Button>
        </TaskFooterStyle>
      </Modal.Footer>
    );
  }
);

export default AddTaskModal;
