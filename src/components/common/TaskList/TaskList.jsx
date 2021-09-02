import { AnimatePresence } from "framer-motion";
import React from "react";
import Col from "../Row/components/Col/Col";
import Row from "../Row/Row";
import Task from "../Task";
import { TaskListStyle } from "./taskList.style";

const TaskList = ({ tasks, remove }) => {
  return (
    <TaskListStyle>
      <Row>
        <AnimatePresence>
          {tasks.map(({ _id, color, description, isComplete, title }) => (
            <ColTask
              key={_id}
              id={_id}
              color={color}
              description={description}
              isComplete={isComplete}
              title={title}
              handleDelete={remove}
            />
          ))}
        </AnimatePresence>
      </Row>
    </TaskListStyle>
  );
};

const ColTask = React.memo(
  ({ id, color, description, isComplete, title, handleDelete }) => {
    return (
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <Task
          key={id}
          color={color}
          description={description}
          isComplete={isComplete}
          title={title}
          marginBotom
          id={id}
          handleDelete={handleDelete}
        />
      </Col>
    );
  }
);

export default TaskList;
