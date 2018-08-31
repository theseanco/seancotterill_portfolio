import React, { Component } from 'react';
import Title from './Components/Title/Title';
import SectionCard from './Components/SectionCard/SectionCard';
import SectionCardDummy from './Components/SectionCardDummy/SectionCardDummy';
import { TypographyStyle, GoogleFont } from 'react-typography';
import { Container, Row, Col } from 'react-flexbox-grid';
import BottomBar from './Components/BottomBar/BottomBar';
import Footer from './Components/Footer/Footer';
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
x Add pictures to cards
x edit picture of SoG
x sticky bottom bar (Achieved with UnmountClosed)

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

const cardImages = [
  "https://f4.bcbits.com/img/a0360341033_10.jpg",
  "https://payload499.cargocollective.com/1/22/723789/12288259/Stitches_cropped_4_670.png",
  "https://raw.githubusercontent.com/theseanco/seancotterill_portfolio/master/4668767_orig.jpg",
  "https://payload529.cargocollective.com/1/22/723789/12880873/Screenshot_20170530_141434_670.png"
];

const altSOGPic = "http://www.stateofgracenortheast.co.uk/uploads/5/3/7/7/53770757/9561895_orig.jpg"


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
      cat1Open: false,
      bottomBarOpen: false
    }
    this.changeOpenTabs = this.changeOpenTabs.bind(this);
  }

  //a function to change state
  changeOpenTabs(index) {
    let opentabs = [false, false, false, false];
    let openCategories = [false, false, false, false];

    //if tab is already clicked, it will not expand
    if (!this.state.openTabs[index]) {
    //select the tab that remains open and write it to the array
    //select the category that will be opened and write it to the array
    opentabs[index] = true;
    openCategories[index] = true;
  } else {
    //close all text boxes and show only image tabs
    openCategories = [true, true, true, true]
    //collapse the bottom bar. This could be abstracted out. Side effects.
    this.setState(prevState => ({
      bottomBarOpen: false
    }))
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
                  <SectionCard title={fieldNames[i]} imageurl={cardImages[i]}/>
                </div>
            </Collapse>
            <Collapse isOpened={this.state.openTabs[i]}  hasNestedCollapse={true}>
              <PicExpansion dataIndex={i} openFooter={this.state.openTabs[i]}/>
            </Collapse>

            {/*
            <UnmountClosed isOpened={this.state.openTabs[i]}>
              <Footer>
                <span> fdsjkfs </span>
              </Footer>
            </UnmountClosed>
            */}
          </Col>
        </Row>
        )
      })}

      {/*
<Collapse isOpened={this.state.bottomBarOpen}>
  <div>
              <BottomBar />
            </div>
            </Collapse>
            */}
    </div>
    )
    }




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
