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
            src="https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687984/IMG_1537_snrnmr.jpg"
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
            src="https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687934/3_jop39w.jpg"
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
            src="https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687984/IMG_1452_dre5ua.jpg"
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
            src="https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687971/IMG_1045_lweq28.jpg"
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
            src="https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687971/IMG_1010_kve8o2.jpg"
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
            src="https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687974/IMG_1461_olfjd6.jpg"
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
