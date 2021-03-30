import React from "react";
import { render } from "react-dom";
import styled, { keyframes } from "styled-components";
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const FooterStyle = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
  height: 50px;
  width: 50px;
  transition: transform 500ms ease;
  //animation: ${rotate} 10s linear infinite;
  &:hover {
    transform: scale(2.5) rotate(540deg);
    -ms-touch-action: none;
    touch-action: none;
  }
`;

const svgStyle = {
  position: "fixed",
  right: "5%",
  bottom: "5%",
  height: "50px",
  width: "50px",
  boxShadow: "0 6px 6px -3px rgba(0, 0, 0, 0.3);",
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
};

const FooterSVG = (props) => (
  <svg
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="100%"
    id="blobSvg"
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: "rgb(76, 161, 175)" }} />
        <stop offset="100%" style={{ stopColor: "rgb(196, 224, 229)" }} />
      </linearGradient>
    </defs>
    <path
      id="blob"
      d="M384.5,308.5Q317,367,222.5,414.5Q128,462,107.5,356Q87,250,114,156Q141,62,228.5,99.5Q316,137,384,193.5Q452,250,384.5,308.5Z"
      fill="url(#gradient)"
    />
  </svg>
);
function Footer({ children }) {
  return (
    <div>
      <div style={phantomStyle} />
      <FooterStyle>
        <FooterSVG>
          {/* <div className="Menu Text">asdf</div> */}
          {children}
        </FooterSVG>
      </FooterStyle>
      {/* <FooterSVG>{children}</FooterSVG> */}
    </div>
  );
}

export default Footer;
