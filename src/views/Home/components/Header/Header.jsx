import React from "react";
import Button from "../../../../components/common/Button";
import { HeaderHome, Title } from "./header.style";

const Header = () => {
  return (
    <HeaderHome>
      <Title>Todo List</Title>
      <Button>Create Task</Button>
    </HeaderHome>
  );
};

export default Header;
