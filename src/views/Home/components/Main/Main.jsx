import React from "react";
import Container from "../../../../components/common/Container";
import Tasks from "../Tasks";
import { MainHome, Title } from "./main.style";

const Main = () => {
  return (
    <MainHome>
      <Container>
        <Title>All Tasks</Title>
        <Tasks />
      </Container>
    </MainHome>
  );
};

export default Main;
