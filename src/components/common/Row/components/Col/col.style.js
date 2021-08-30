import styled, { css } from "styled-components";
import { breakpoints } from "../../../../../configs/style";

const widthCol = (name) => {
  return (props) =>
    props[name] &&
    css`
      @media screen and (min-width: ${breakpoints[name]}px) {
        flex: 0 0 calc(${props[name]} / 24 * 100%);
        max-width: calc(${props[name]} / 24 * 100%);
      }
    `;
};

const ColStyle = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  width: 100%;
  ${({ xs }) =>
    xs
      ? css`
          flex: 0 0 calc(${xs} / 24 * 100%);
          max-width: calc(${xs} / 24 * 100%);
        `
      : css`
          flex-basis: 0;
          flex-grow: 1;
          max-width: 100%;
        `}
  ${widthCol("sm")}
  ${widthCol("md")}
  ${widthCol("lg")}
  ${widthCol("xl")}
`;

//xs, sm, md, lg, xl

export default ColStyle;
