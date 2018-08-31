/*

Title Component

This displays some text on the screen and then fades out from the DOM

*/

import React, { Component } from 'react';
import lifecycle from 'react-pure-lifecycle';
import './title.css';

const Title = ({ displayTitle }) => {
  return (
    <div className="container fadeout-container">
      <div className="textStyling">
    <h1>Sean Cotterill</h1>
    <h3>Live Coding, Computational Art, Freelance Artist</h3>
  </div>
  </div>
      );
}

export default Title
