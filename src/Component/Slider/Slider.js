import React from "react";


import { Carouselcaption, Img } from "./Slider.elements";
function Slider() {


  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Img
            className="d-block w-100"
            src="https://drive.google.com/uc?id=1Jrp0HTd9DDmpRDkP4gbIcPuw5NvSxfyU"
            alt="First slide"
          />
          {/* <Carouselcaption>
            <h2 style={{color:'blue',textShadow:'1px 1px white'}}>Be able to work independently and with others</h2>
            <p style={{color:'white'}}>School Description</p>
          </Carouselcaption> */}
        </div>
        <div className="carousel-item">
          <Img
            className="d-block w-100"
            src="https://drive.google.com/uc?id=1eLScClqrvDB4K7NyBjCs7WjRI3jjtMuW"
            alt="Second slide"
          />
          {/* <Carouselcaption>
            <h1 style={{color:'black',textShadow:'1px 1px white'}}>School Heading</h1>
            <p style={{color:'white'}}>School Description</p>
          </Carouselcaption> */}
        </div>
        <div className="carousel-item">
          <Img
            className="d-block w-100"
            src="https://drive.google.com/uc?id=11rIATFazq6a6Bu3hhTsnaMTJ8x9_NFmp"
            alt="Third slide"
          />
          {/* <Carouselcaption>
            <h1 style={{color:'black',textShadow:'1px 1px white'}}>School Heading</h1>
            <p style={{color:'white'}}>School Description</p>
          </Carouselcaption> */}
        </div>
        <div className="carousel-item">
          <Img
            className="d-block w-100"
            src="https://drive.google.com/uc?id=1xPPbqm8E0Re73GrB9xLDDy3HXOB7tof8"
            alt="Third slide"
          />
          {/* <Carouselcaption>
            <h1 style={{color:'black',textShadow:'1px 1px white'}}>School Heading</h1>
            <p style={{color:'white'}}>School Description</p>
          </Carouselcaption> */}
        </div>
        <div className="carousel-item">
          <Img
            className="d-block w-100"
            src="https://drive.google.com/uc?id=1U-te8BAfrxeaCj4YVzw2qZVGaaR5G336"
            alt="Third slide"
          />
          {/* <Carouselcaption>
            <h1 style={{color:'black',textShadow:'1px 1px white'}}>School Heading</h1>
            <p style={{color:'white'}}>School Description</p>
          </Carouselcaption> */}
        </div>
        <div className="carousel-item">
          <Img
            className="d-block w-100"
            src="https://drive.google.com/uc?id=1m4wAaQ64eUfucfTBU8eq3q_fuuNg7u2d"
            alt="Third slide"
          />
          {/* <Carouselcaption>
            <h1 style={{color:'black',textShadow:'1px 1px white'}}>Goals of education  </h1>
            <p style={{color:'white'}}>Be able to work independently and with others</p>
          </Carouselcaption> */}
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Slider;
