import React, { Component } from "react";
import { render } from "react-dom";

/*

Taken from:

https://codesandbox.io/s/l7wryrr64l
*/

const footerStyle = {
  backgroundColor: "#080B0F",
  fontSize: "20px",
  color: "white",
  textAlign: "center",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "40px",
  width: "100%",
  opacity: "0.7"
};

const phantomStyle = {
  display: "block",
  height: "40px",
  width: "100%",
};

const Footer = ({ children }) => {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>{children}</div>
    </div>
  );
}

export default Footer
