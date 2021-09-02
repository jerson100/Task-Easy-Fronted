import React, { useState } from "react";
import AddTaskModal from "../../AddTaskModal/AddTaskModal";
import Icon from "../../Icon";

const TaskDeleteAction = ({
  color,
  title,
  description,
  handleUpdate,
  id,
  isPreview,
}) => {
  const [showModal, setshowModal] = useState(false);
  return (
    <>
      <Icon
        className="far fa-edit"
        size="small"
        color={color}
        handleClick={() => setshowModal(true)}
      />
      {!isPreview && (
        <AddTaskModal
          show={showModal}
          setshowModal={setshowModal}
          handleOk={handleUpdate}
          isUpdate
          idTask={id}
          title={title}
          description={description}
          color={color}
        />
      )}
    </>
  );
};

export default TaskDeleteAction;
