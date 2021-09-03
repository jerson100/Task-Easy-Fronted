import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const AnimateImageStyle = styled(motion.div)`
  position: fixed;
  right: 0;
  bottom: 0;
`;

const img = css`
  /* height: 100px; */
  max-width: 100%;
  object-fit: cover;
  object-position: center;
  width: 70px;
  height: auto;
`;

const LeftImage = styled(motion.img)`
  ${img}
`;

const RightImage = styled(motion.img)`
  ${img}
`;

export { AnimateImageStyle, LeftImage, RightImage };
