import React from "react";
import { ContainerHome, HeaderHome, MainHome } from "./home.style";

const Home = () => {
  return (
    <ContainerHome>
      <HeaderHome>
        <h1>Todo List</h1>
        <button>Create Task</button>
      </HeaderHome>
      <MainHome></MainHome>
    </ContainerHome>
  );
};

export default Home;
