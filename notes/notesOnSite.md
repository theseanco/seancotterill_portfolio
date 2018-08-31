# Sean Cotterill Portfolio Website

This is designed to replace my original portfolio, which is hosted on Cargo.

What I need:

- Sections for different practices:
  - Live Coding
  - Sampler/Sampler
  - Freelance Work
  - Hacks and Projects

I would like it to have a landing page which has my name and a bunch of pictures

Then a screen in four sections which has my four sections in it, which are four photos that

Then when you click on one of the four sections, something happens. but i don't know what yet.

## Design:

A colour scheme could be nice. Let's use one:

This is a nice site that shows some colour pallettes:

https://www.canva.com/learn/website-color-schemes/

I really like:

#38
#42

#38's colors are:

STORMY - #494E6B
CLOUD - #98878F
SUNSET - #985E6D
EVENING - #192231

### How to use colours

 Sean Cotterill overlay fades in and out with a heavy #494E6B

 Four pictures that are covered by a low-alpha #494E6B serve as the four links on the website

## Layout

Four sections are layed out as an overflowing table in flexbox

## WHAT I'VE DONE

create-react-app
installed Emotion and react-emotion
created a title component
installed react-typography and typography
installed typography-theme-grand-view

Didn't like grand grand view

installed typography-theme-moraga

used the google color picker to grab the color for BlanchedAlmond h1, then a less prominent color for h3

One of my components needed a lifecycle, so I added react-pure-lifecycle.
Guide is in here:
https://stackoverflow.com/questions/44506207/reactjs-lifecycle-method-inside-a-functional-component

used this codepen to sort out the fadein/out transition, all done using pure CSS, it didn't need to be done using state
https://jsfiddle.net/Q9kYa/

#### WORKING ON THE TITLE CARD:
centered the title vertically using alligator.io
Used a CSS animation to make it fade out on mount. This could probably do with being done by state, as it needs to unmount too.

#### WORKING ON SECTION CARD
Created test cards, which I will then put inside of a flexbox container
Grabbed this w3schools gist, which shows how to

Installed react-card-stack
Bad, Didn't work

Installed React-grid-system
Bad, didn't work

Installed react-flexbox-grid

In order to get the cards properly positioned:

- Used two xs containers to align the cards in two rows
- An image container that holds an image and an overlay that contains text
- The image container was relatively positioned
- the image itself was relatively positioned WITHIN the absolutely positioned container
- The overlay was ABSOLUTELY positioned over the relatively positioned image, inside the relatively positioned container
- A div to control text opacity that is given no further instructions within the overlay

- The hover control on the container makes text opacity change, and makes overlay opacity and colour change

#### Bottom Bar

Entypo used for social fonts

http://www.entypo.com/

I got it from weloveiconfonts.com

#### Expanding section cards

If you encase something which changes within a Collapse tag, then it will collapse outwards from nothing.

I used this:

```
<Collapse isOpened={true}>
            <div onClick={(e) => this.setState(prevState => ({displayTestText: !prevState.displayTestText})) } >
        <SectionCard title={`test card for expansion`} />
        {this.renderParagraph()}
      </div>
      </Collapse>
```

renderParagraph is this:

```
renderParagraph() {
    if (this.state.displayTestText) {
      return(
        <p> fdshkjdshfskjhfdkjhfddsagdhjashbvdvaghsdjvsaghvjasgdhgkadjkvgkjadsghjkgasjdkgdjkasgkjghdsjagjdgsajkgdashagdsgakskhjsfhkjdshfds </p>
      )
    }
  }
```


#### STUFF FOR REFERENCE:

Working collapse example
```
return(
          <div onClick={(e) => this.setState(prevState => ({displayTestText: !prevState.displayTestText})) } >
            <SectionCard title={`test card for expansion`} />
            <Collapse isOpened={this.state.displayTestText}>
              <p> expand expand expand expand expand expand expand </p>
            {this.renderParagraph()}
          </Collapse>
          </div>
      )
      ```

#### Making cards

Cards were constructed inside a wrapped flexbox grid
