import React, { useEffect, useState } from "react";
import { LoaderContentStyle, LoaderStyle } from "./loader.style";

const Loader = () => {
  const [pounts, setpounts] = useState(".");
  useEffect(() => {
    const id = setInterval(() => {
      setpounts((p) => {
        if (p === "...") {
          return ".";
        }
        return p + ".";
      });
    }, 500);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <LoaderStyle>
      <LoaderContentStyle>Cargando{pounts}</LoaderContentStyle>
    </LoaderStyle>
  );
};

export default Loader;
