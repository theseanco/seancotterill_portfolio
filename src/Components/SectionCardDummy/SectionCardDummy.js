import React, { Component } from 'react';
import './sectioncarddummy.css';

const SectionCardDummy = ({ props }) => {
  return (
  <div className="container">
    <img src="http://www.cameraegg.org/wp-content/uploads/2015/06/canon-powershot-g3-x-sample-images-1.jpg" alt="Avatar" className="image" />
    <div className="middle">
      <div className="text">John Doe</div>
    </div>
  </div>
      );
}

export default SectionCardDummy
