import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { ContainerHome } from "./home.style";

const Home = () => {
  return (
    <ContainerHome>
      <Header />
      <Main />
    </ContainerHome>
  );
};

export default Home;
