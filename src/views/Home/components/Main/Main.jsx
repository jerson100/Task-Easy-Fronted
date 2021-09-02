import React from "react";
import Container from "../../../../components/common/Container";
import Tasks from "../Tasks";
import { MainHome, Title } from "./main.style";
import Space from "../../../../components/common/Space/Space";
// import AddTaskModal from "../../../../components/common/AddTaskModal/AddTaskModal";
// import { TaskListItemStyle } from "../../../../components/common/TaskList/taskList.style";

const Main = ({ tasks, remove, update }) => {
  //   console.log(tasks);
  return (
    <MainHome>
      <section>
        <Container>
          <Title>All Tasks</Title>
          <Space size="lg" />
          <Tasks tasks={tasks} remove={remove} update={update} />
        </Container>
      </section>
      {/* <AddTaskModal /> */}
    </MainHome>
  );
};

export default React.memo(Main);
