import styled from "styled-components";

const ContainerHome = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  border: solid 1px red;
`;

const HeaderHome = styled.header`
  height: 200px;
  border: solid 1px green;
`;

const MainHome = styled.header`
  flex: 1 0 0;
  border: solid 1px blue;
`;

export { ContainerHome, HeaderHome, MainHome };
