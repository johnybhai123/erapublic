import React from "react";

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
            src='https://scontent.fbho4-2.fna.fbcdn.net/v/t1.6435-9/243080144_591715882182489_5673644056499407793_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=Z4O5uOUDGrwAX82yvg8&_nc_oc=AQkGOQ4w-jqcgeo-OMMNO-w3-x3t3QBhizWBr7TCqSEW6cskaINX4R4RQ-VvChJZ5Tn3W3DODNgt6YA-46FKJjOa&_nc_ht=scontent.fbho4-2.fna&oh=b714fc222ddc91ac909edd623990612a&oe=6175F136'
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

            src='https://scontent.fbho4-2.fna.fbcdn.net/v/t1.6435-9/243019997_591715658849178_6993503452774393059_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=F9kQXBCYgswAX8mpgcM&_nc_ht=scontent.fbho4-2.fna&oh=f5327d3b6f7d67ec3010870d6f8f1a4d&oe=6175BE9A'
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

            src='https://scontent.fbho4-2.fna.fbcdn.net/v/t1.6435-9/243015080_591715952182482_2729346948280851643_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=HazgE1DC490AX-v7jIN&_nc_ht=scontent.fbho4-2.fna&oh=74dc705a47d616773b57e62f2b6d2b0d&oe=6177F722'
            
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

            src='https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/243031373_591716368849107_7582309625470400637_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=XgrhgreIZVYAX8qtZs8&_nc_ht=scontent-bom1-1.xx&oh=f9c246afa2cd1bd71f47e3d536ba7054&oe=61763355'
            
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

            src='https://scontent.fbho4-2.fna.fbcdn.net/v/t1.6435-9/243040691_591715808849163_5320327392361602970_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=VlPNb4otmEEAX9SwPXM&_nc_ht=scontent.fbho4-2.fna&oh=f8f084206865b14719ff4cf1f82f1b60&oe=6177D10B'
            
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

            src='https://scontent.fbho4-2.fna.fbcdn.net/v/t1.6435-9/243018839_591715928849151_7645543950741479550_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=ilpalfZA7uQAX8RnTpB&_nc_ht=scontent.fbho4-2.fna&oh=3402ee0baaa6bdb65412f68e61e07246&oe=6178843E'
            
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
