import React, { Component } from 'react';

import './sectioncard.css';

//TODO: This needs styled components, or Emotion, or whatever

const SectionCard = ({ title }) => {
  return (
    <div className="imageContainer">
      <div className="image">
      </div>
      <div className="overlay">
        <div className="text">
        <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default SectionCard
