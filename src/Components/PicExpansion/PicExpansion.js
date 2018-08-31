import React, { Component } from 'react';
import './picexpansion.css';
import ImageCard from '../ImageCard/ImageCard';
import {livecodingdata} from '../../Data/livecodingdata.js';
import {samplersamplerdata} from '../../Data/samplersamplerdata.js';
import {freelancedata} from '../../Data/freelancedata.js';
import {projectsdata} from '../../Data/projectsdata.js';
import { Container, Row, Col } from 'react-flexbox-grid';
import {UnmountClosed} from 'react-collapse'

//bottom bar that doesn't work
import BottomBar from '../BottomBar/BottomBar'

//footer that might
import Footer from '../Footer/Footer'

/*

Expansion grid designed to hold text on the left and a set of 'selected works' on the right

Uses react-flexbox-grid to assign widths.


*/

const PicExpansion = ({ dataIndex, openFooter }) => {

  const dataTypes = [livecodingdata, samplersamplerdata, freelancedata, projectsdata]

  return (
    <div className="masterdiv">
      <Row>
      <Col lg={3} md={4} sm={4} xs={6}>
      <div className="textDiv">
        <h1> {dataTypes[dataIndex].title} </h1>
        <p> {dataTypes[dataIndex].paragraph} </p>
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

        <UnmountClosed isOpened={openFooter}>
          <Footer>
            <span>twitter github bandcamp soundcloud linkedin </span>
          </Footer>
        </UnmountClosed>

     </div>
    );
  }

  export default PicExpansion
