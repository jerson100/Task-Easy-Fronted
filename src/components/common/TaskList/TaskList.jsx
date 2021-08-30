import React from "react";
import Col from "../Row/components/Col/Col";
import Row from "../Row/Row";
import Task from "../Task";
import { TaskListStyle } from "./taskList.style";

const TaskList = ({ tasks }) => {
  return (
    <TaskListStyle>
      <Row>
        {tasks.map(({ id, color, description, isComplete, title }) => (
          <Col key={id} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Task
              color={color}
              description={description}
              isComplete={isComplete}
              title={title}
              marginBotom
            />
          </Col>
        ))}
      </Row>
    </TaskListStyle>
  );
};

export default TaskList;
