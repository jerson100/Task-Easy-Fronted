import React, { useCallback, useState } from "react";
import AddTaskModal from "../../../../components/common/AddTaskModal/AddTaskModal";
import Button from "../../../../components/common/Button";
import { HeaderHome, Title } from "./header.style";

const Header = ({ add }) => {
  const [showModal, setshowModal] = useState(false);
  const show = useCallback(() => {
    setshowModal(true);
  }, []);
  return (
    <HeaderHome>
      <Title>Todo List</Title>
      <Button onClick={show}>Create Task</Button>
      <AddTaskModal
        handleOk={add}
        show={showModal}
        setshowModal={setshowModal}
      />
    </HeaderHome>
  );
};

export default React.memo(Header);
