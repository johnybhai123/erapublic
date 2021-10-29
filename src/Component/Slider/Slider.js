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
            src="http://erapublicschool.herokuapp.com/media/243080144_591715882182489_5673644056499407793_n.jpg"
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
            src="http://erapublicschool.herokuapp.com/media/243019997_591715658849178_6993503452774393059_n.jpg"
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
            src="http://erapublicschool.herokuapp.com/media/243015080_591715952182482_2729346948280851643_n.jpg"
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
            src="http://erapublicschool.herokuapp.com/media/243029211_591716085515802_1834474687651002025_n.jpg"
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
            src="https://icecube-eu-403.icedrive.io/download?p=03MgP6WfyoV7ravJLXXPQpJPxfxWaLNK.om0e1LyOb65BaWWFVWKkso1bETa5nfjS1KUcsCHoCyytXLQKpnxn87bX0JZ3ScffVFeredcu9gojKmbupNA_75hJcwqbO16djPRCeYjzxvN2QvZ5Bs8r.3RU3lnr6fVwp9ata45j_LDWv5LB86LMBVq3gvDjvbfrXiJpYjYQJ0a8iOO3OI9z3jK3WYuevxNxbJ9Gtxs8cA5Pj0jXnuZ3Svt5zfpEcbd"
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
            src="http://erapublicschool.herokuapp.com/media/243076811_591716142182463_30702599338143971_n.jpg"
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
