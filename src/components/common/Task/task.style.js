import { lighten } from "polished";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const ArticleStyle = styled(motion.article)`
  width: 100%;
  border-top: solid 4px ${({ $color }) => $color};
  border-radius: 0 0 2px 2px;
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0 0 5px 5px #0000000d;
  ${({ marginB }) =>
    marginB &&
    css`
      margin-bottom: 2rem;
    `}
`;

const HeaderStyle = styled.header``;

const Title = styled(motion.h1)`
  background-color: ${({ $color }) => lighten(0.34, $color)};
  border-radius: 10px;
  color: black;
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 400;
  padding: 0.5rem 1.1rem;
  margin-top: 0;
  margin-bottom: 0;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const BodyStyle = styled(motion.p)`
  height: 80px;
  font-size: 0.8rem;
  margin-bottom: 0;
  margin-top: 0;
`;

const FooterStyle = styled(motion.footer)``;

export { ArticleStyle, BodyStyle, FooterStyle, HeaderStyle, Title };
