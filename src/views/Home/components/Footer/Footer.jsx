import React from "react";
import Container from "../../../../components/common/Container";
import { FooterStyle, FooterTextStyle } from "./footer.style";

const Footer = () => {
  return (
    <FooterStyle>
      <Container>
        <FooterTextStyle>
          Created by{" "}
          <a
            href="https://www.facebook.com/jersonomar.ramirezortiz/"
            target="_blank"
            rel="noreferrer"
          >
            Jerson Ramírez Ortiz.
          </a>
        </FooterTextStyle>
      </Container>
    </FooterStyle>
  );
};

export default React.memo(Footer);
