import { lighten } from "polished";
import styled, { css } from "styled-components";

const ArticleStyle = styled.article`
  width: 100%;
  border-top: solid 4px ${({ gColor }) => gColor};
  border-radius: 0 0 2px 2px;
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.02);
  ${({ marginB }) =>
    marginB &&
    css`
      margin-bottom: 2rem;
    `}
`;

const HeaderStyle = styled.header``;

const Title = styled.h1`
  background-color: ${({ gColor }) => lighten(0.34, gColor)};
  border-radius: 10px;
  color: black;
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 400;
  padding: 0.5rem 1.1rem;
  margin-top: 0;
  margin-bottom: 0;
`;

const BodyStyle = styled.p`
  height: 80px;
  font-size: 0.8rem;
  margin-bottom: 0;
  margin-top: 0;
`;

const FooterStyle = styled.footer``;

export { ArticleStyle, BodyStyle, FooterStyle, HeaderStyle, Title };
