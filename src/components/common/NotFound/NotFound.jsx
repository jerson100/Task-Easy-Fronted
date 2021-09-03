import React from "react";
import { Link } from "react-router-dom";
import {
  NotFoundContainerStyle,
  NotFoundContentStyle,
  TextStyle,
} from "./notFound.style";

const NotFound = () => {
  return (
    <NotFoundContainerStyle>
      <NotFoundContentStyle>
        <TextStyle>No se encontró la ruta especificada</TextStyle>
        <TextStyle as="p">
          <Link to="/home">Ir a home</Link>
        </TextStyle>
      </NotFoundContentStyle>
    </NotFoundContainerStyle>
  );
};

export default NotFound;
