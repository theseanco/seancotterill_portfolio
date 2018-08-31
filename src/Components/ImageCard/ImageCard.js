import React, { Component } from 'react';
import './imagecard.css'

//A component to be used repeatedly to generate image grids to use in

const ImageCard = ({ link, title, imagesrc }) => {
  return (
    <div className="imageCardContainer">
    <div className="cardAlignment">
      <a href={link}>
        <div className="imageStyling">
    <img src={imagesrc} className="removeMargins"/>
  </div>
    <p className="overrideMargins">{title}</p>
  </a>
  </div>
  </div>
  );
}

export default ImageCard
