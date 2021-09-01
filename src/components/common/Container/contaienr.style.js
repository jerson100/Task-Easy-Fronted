import styled from "styled-components";
import { breakpoints, breakpointContainer } from "../../../configs/style";

const StyleBaseContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
`;

const StyleContainer = styled(StyleBaseContainer)`
  ${breakpointContainer(breakpoints.sm)}
  ${breakpointContainer(breakpoints.md)}
  ${breakpointContainer(breakpoints.lg)}
  ${breakpointContainer(breakpoints.xl)}
`;

export { StyleBaseContainer, StyleContainer };
