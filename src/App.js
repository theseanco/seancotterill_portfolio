import React, { Component } from 'react';
import Title from './Components/Title/Title';
import SectionCard from './Components/SectionCard/SectionCard';
import SectionCardDummy from './Components/SectionCardDummy/SectionCardDummy';
import { TypographyStyle, GoogleFont } from 'react-typography';
import { Container, Row, Col } from 'react-flexbox-grid';
import BottomBarTable from './Components/BottomBarTable/BottomBarTable';
import PicExpansion from './Components/PicExpansion/PicExpansion';
import Typography from 'typography';
import moragaTheme from 'typography-theme-moraga';
import {Collapse, UnmountClosed} from 'react-collapse';
import './App.css'

/*

TODO:

- Update the titles
- Make the grid more responsive
- Make the bottom bar including links to socials

TODO August 30:

x background color changing on hover
x remove border
x default overlay on images
x react-collapse
  x TESTED
x responsive link set
x align all images to right
x Make concertinas selectively open.
x Make props control the type of data that is rendered to within components

TODO August 31:

x Add remaining data columns
x Make paragraphs better
- Start on format for 'new page' component
- Make 'new page' component link to React Router
x Make all units collapse when one is opened (!!).
x Programatically generate fields using a map function
- Make sure content of right divs are right-aligned
- Add pictures to cards

*/


//overwrite the styling of headers
moragaTheme.overrideThemeStyles = (options) => ({
  'h1,h2': {
    Color: 'BlanchedAlmond',
  },
  'h3' : {
    Color: 'hsl(36,51%,10%)'
  },
  'p' : {
    Color: 'BlanchedAlmond',
  }
})

const fieldNames = [
    'Live Coding',
    'Sampler/Sampler',
    'Freelance Work',
    'Hacks/Tools/Projects'
  ]


const typography = new Typography(moragaTheme)

class App extends Component {

  constructor() {
    super();
    this.state = {
      testImages: [
        "https://payload499.cargocollective.com/1/22/723789/12288259/Stitches_cropped_4_670.png",
        "https://payload529.cargocollective.com/1/22/723789/12880873/Screenshot_20170530_141319_800.png",
        "https://f4.bcbits.com/img/a0360341033_10.jpg",
        "https://www.dancecity.co.uk/wp-content/uploads/2017/10/IMG_1474-565x340.jpg"
      ],
      testFeatures: true,
      testText: 'fdshdjksfhdfskj',
      displayTestText: false,
      openTabs: [false, false, false, false],
      openCategories: [true, true, true, true],
      cat1Open: false
    }
    this.changeOpenTabs = this.changeOpenTabs.bind(this);
  }

  //a function to change state
  changeOpenTabs(index) {
    let opentabs = [false, false, false, false];
    let openCategories = [false, false, false, false];

    //if tab is already clicked, it will not expand
    if (!this.state.openTabs[index]) {
    opentabs[index] = true;
    openCategories[index] = true;
  } else {
    openCategories = [true, true, true, true]
  };

    //expand tabs
    this.setState(prevState => ({
      openTabs: opentabs
    }));

    this.setState(prevState => ({
      openCategories: openCategories
    }))

  }

  //function to change whether text is being displayed
  changeDisplayTestText() {
    this.setState(prevState => ({
      displayTestText: !prevState.displayTestText
    }))
  }

  testFunction() {
    console.log("clicked")
  }

  //function to conditionally render either:
  //A grid (first thing I made)
  //OR: a new screen to test out app features.
  conditionalRender() {
    if (!this.state.testFeatures) {
      {/* the first version of the table*/}
      return(
        <div className="tableBackground">
          <Row>
            <Col xs >
              <SectionCard title={`some work`}/>
            </Col>
            <Col xs>
              <SectionCard title={`a bit more work`}/>
            </Col>
          </Row>
          <Row>
            <Col xs >
              <SectionCard title={`different work`}/>
            </Col>
            <Col xs >
              <SectionCard title={`the other thing`}/>
            </Col>
          </Row>
          <Row>
            <Col xs >
              <BottomBarTable />
            </Col>
          </Row>
        </div>
      )
    } else {


      /*
      OLD CODE for a test of react-collapse
      return(
          <div onClick={(e) => this.setState(prevState => ({displayTestText: !prevState.displayTestText})) } >
            <SectionCard title={`test card for expansion`} />
            <Collapse isOpened={this.state.displayTestText}>
              <p> expand expand expand expand expand expand expand </p>
            {this.renderParagraph()}
          </Collapse>
          </div>
      )
      */


      //This can be refactored into a map function



      /*

      uncomment this for dumb hard-coded stuff

      return(
      <div className="tableBackground">
          <Row>
            <Col xs >

            <Collapse isOpened={this.state.openCategories[0]}>
              <div
                className="bottom-border top-border"
                onClick={(param) => this.changeOpenTabs(0)}>
              <SectionCard title={`some work`} />
              </div>
          </Collapse>

          <Collapse isOpened={this.state.openTabs[0]}>
            <PicExpansion dataIndex={0}/>
          </Collapse>
            </Col>
          </Row>

            <Row>
            <Col xs>

              <Collapse isOpened={this.state.openCategories[1]}>
              <div
                className="bottom-border"
                onClick={(param) => this.changeOpenTabs(1)}
                >
              <SectionCard title={`a bit more work`}/>
            </div>

          </Collapse>
            <Collapse isOpened={this.state.openTabs[1]}>
            <PicExpansion dataIndex={1}/>
          </Collapse>

            </Col>
          </Row>

          <Row>
            <Col xs >
              <Collapse isOpened={this.state.openCategories[2]}>
              <div
                className="bottom-border"
                onClick={(param) => this.changeOpenTabs(2)}>
              <SectionCard title={`different work`}/>
            </div>
          </Collapse>

          <Collapse isOpened={this.state.openTabs[2]}>
            <PicExpansion dataIndex={2}/>
          </Collapse>
            </Col>
          </Row>

          <Row>
            <Col xs >
              <Collapse isOpened={this.state.openCategories[3]}>
              <div
                onClick={(param) => this.changeOpenTabs(3)}
                className="bottom-border">
              <SectionCard title={`the other thing`}/>
            </div>
          </Collapse>

            <Collapse isOpened={this.state.openTabs[3]}>
              <PicExpansion dataIndex={3} />
            </Collapse>
            </Col>
          </Row>

        </div>
      )
      */

      return (

        <div>
      {fieldNames.map((data, i) => {
        return (
          <Row>
          <Col xs >
            <Collapse isOpened={this.state.openCategories[i]}>
              <div
                className="bottom-border top-border"
                onClick={(param) => this.changeOpenTabs(i)}>
                  <SectionCard title={fieldNames[i]} />
                </div>
            </Collapse>
            <Collapse isOpened={this.state.openTabs[i]}>
              <PicExpansion dataIndex={i} />
            </Collapse>
          </Col>
        </Row>
        )
      })}
    </div>

    )
    }}

    render() {
      return (
        <div className="App">

          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          {/*
            TITLE THAT WORKS
            <Title displayTitle={this.state.displayTitle}/>
            */}
            {this.conditionalRender()}

          </div>
        );
      }
    }


export default App;
