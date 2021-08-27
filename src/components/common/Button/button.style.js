import styled from "styled-components";
import { darken } from "polished";
import { colors } from "../../../configs/style";

const sizes = {
  small: {
    "border-radius": ".2rem",
    "font-size": ".875rem",
    "line-height": "1.5",
    padding: ".25rem .5rem",
  },
  normal: {
    "border-radius": ".25rem",
    "font-size": "1rem",
    "line-height": "1.5",
    padding: ".375rem .75rem",
  },
  large: {
    "border-radius": ".3rem",
    "font-size": "1.25rem",
    "line-height": "1.5",
    padding: ".5rem 1rem",
  },
};

const ButtonBaseStyle = styled.button`
  border-radius: 4px;
  border: 1px solid transparent;
  color: #212529;
  cursor: pointer;
  display: inline-block;
  font-size: ${({ size }) => sizes[size]["font-size"]};
  font-weight: 400;
  line-height: 1.5;
  padding: ${({ size }) => sizes[size].padding};
  text-align: center;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  user-select: none;
  outline: 0;
  -webkit-appearance: button;
`;

const ButtonStyle = styled(ButtonBaseStyle)`
  background-color: ${({ color }) => colors[color]};
  border-color: ${({ color }) => colors[color]};
  color: ${({ color }) =>
    color === "warning" || color === "light" ? "#212529" : "#fff"};
  &:hover {
    background-color: ${({ color }) => darken(0.1, colors[color])};
  }
  &:focus {
    box-shadow: ${({ color }) => `0 0 2px 3px ${darken(-0.3, colors[color])}`};
    background-color: ${({ color }) => darken(0.1, colors[color])};
  }
  &:active {
    background-color: ${({ color }) => darken(0.15, colors[color])};
  }
`;

ButtonBaseStyle.defaultProps = {
  size: "normal",
};

ButtonStyle.defaultProps = {
  color: "primary",
};

//tamaños => small, medium, large

export { ButtonBaseStyle, ButtonStyle };
