import React from "react";
import Container from "../../../../components/common/Container";
import Tasks from "../Tasks";
import { MainHome, Title } from "./main.style";
import tasks from "../../../../data/tasks";
import Space from "../../../../components/common/Space/Space";

const Main = () => {
  return (
    <MainHome>
      <section>
        <Container>
          <Title>All Tasks</Title>
          <Space size="lg" />
          <Tasks tasks={tasks} />
        </Container>
      </section>
    </MainHome>
  );
};

export default Main;
