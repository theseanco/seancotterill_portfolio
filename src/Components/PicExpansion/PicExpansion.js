import React, { Component } from 'react';
import './picexpansion.css'
import ImageCard from '../ImageCard/ImageCard'
import {livecodingdata} from '../../Data/livecodingdata.js'
import { Container, Row, Col } from 'react-flexbox-grid';

/*

Expansion grid designed to hold text on the left and a set of 'selected works' on the right

Uses react-flexbox-grid to assign widths.

TODO:
- Prop as an object name

*/

const PicExpansion = ({ dataIndex }) => {

  const dataTypes = [livecodingdata, livecodingdata, livecodingdata, livecodingdata]

  return (
    <div className="masterdiv">
      <Row>
      <Col lg={3} md={4} sm={4} xs={6}>
      <div className="textDiv">
        <h1> {dataTypes[dataIndex].title} </h1>
        <p> {dataTypes[dataIndex].paragraph} </p>
        <p> paragraph 2 </p>
      </div>
    </Col>
    <Col lg={9} md={8} sm={8} xs={6}>
      <div className="imagesDiv">
        <h2> Selected Works </h2>
        <div className="cardList">
          {
            dataTypes[dataIndex].selectedWorks.map((data, i) => {
              //map the array into a card list
              return(
                <ImageCard title={dataTypes[dataIndex].selectedWorks[i].text}
                  imagesrc={dataTypes[dataIndex].selectedWorks[i].image}
                  link={dataTypes[dataIndex].selectedWorks[i].link} />
                )
              })
            }
          </div>
        </div>
      </Col>
      </Row>
      </div>
    );
  }

  export default PicExpansion
