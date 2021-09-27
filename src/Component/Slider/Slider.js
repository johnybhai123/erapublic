import React from "react";
import image1 from "../../images/1.JPG";
import image2 from "../../images/2.JPG";
import image3 from "../../images/3.JPG";
import image4 from "../../images/4.JPG";
import image5 from "../../images/5.JPG";
import image6 from "../../images/6.JPG";
import { Carouselcaption } from "./Slider.elements";
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
          <img
            className="d-block w-100"
            style={{ height: "100vh",opacity:'0.9' }}
            src={image1}
            alt="First slide"
          />
          {/* <Carouselcaption>
            <h2 style={{color:'blue',textShadow:'1px 1px white'}}>Be able to work independently and with others</h2>
            <p style={{color:'white'}}>School Description</p>
          </Carouselcaption> */}
        </div>
        <div className="carousel-item">
          <img 
            className="d-block w-100"
            style={{ height: "100vh",opacity:'0.7' }}

            src={image2}
            alt="Second slide"
          />
             {/* <Carouselcaption>
            <h1 style={{color:'black',textShadow:'1px 1px white'}}>School Heading</h1>
            <p style={{color:'white'}}>School Description</p>
          </Carouselcaption> */}
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            style={{ height: "100vh",opacity:'0.7' }}

            src={image3}
            alt="Third slide"
          />
             {/* <Carouselcaption>
            <h1 style={{color:'black',textShadow:'1px 1px white'}}>School Heading</h1>
            <p style={{color:'white'}}>School Description</p>
          </Carouselcaption> */}
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            style={{ height: "100vh",opacity:'0.7' }}

            src={image4}
            alt="Third slide"
          />
             {/* <Carouselcaption>
            <h1 style={{color:'black',textShadow:'1px 1px white'}}>School Heading</h1>
            <p style={{color:'white'}}>School Description</p>
          </Carouselcaption> */}
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            style={{ height: "100vh",opacity:'0.7' }}

            src={image5}
            alt="Third slide"
          />
             {/* <Carouselcaption>
            <h1 style={{color:'black',textShadow:'1px 1px white'}}>School Heading</h1>
            <p style={{color:'white'}}>School Description</p>
          </Carouselcaption> */}
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            style={{ height: "100vh",opacity:'0.7' }}

            src={image6}
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
