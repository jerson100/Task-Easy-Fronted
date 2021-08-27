import styled from "styled-components";
import { breakpoints } from "../../../configs/style";

const breakpointContainer = (breakpoint) => `
    @media screen and (min-width: ${breakpoint}px) {
        max-width: ${breakpoint - 10}px;
    }
`;

const StyleBaseContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
`;

const StyleContainer = styled(StyleBaseContainer)`
  ${breakpointContainer(breakpoints.sm)}
  ${breakpointContainer(breakpoints.md)}
  ${breakpointContainer(breakpoints.lg)}
  ${breakpointContainer(breakpoints.xl)}
`;

export { StyleBaseContainer, StyleContainer };
