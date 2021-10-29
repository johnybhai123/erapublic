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
            src="https://icecube-eu-403.icedrive.io/thumbnail?p=s%2B%2FNAiEvwhJj93GXbRyGOA2Rvw0XWMLsyUDANG1wCJq27N9Yh7C4RbthknXPKYoTdygnGP2ic7ZYE90FZuPn5YfOF7wQH7HjC7Dwk8QgY7DqrSc59n%2BlMaLMIygn7XjU&w=1280&h=1280&m=cropped"
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
            src="https://icecube-eu-403.icedrive.io/download?p=03MgP6WfyoV7ravJLXXPQpJPxfxWaLNK.om0e1LyOb46eZu3Jf0_ft7dSVYY1SguS1KUcsCHoCyytXLQKpnxn87bX0JZ3ScffVFeredcu9ipfZE9A_0A_GXVBE8dTWWUbgUHexV9BamX468859f0aymbq6fv8tMJaRcU9hMlGqafrQsPafA6S_RQiXIbB51YVZYQEw.QjJT6pzrPsjeAuR.n3c0C5XB7dSSWCIiEER85Pj0jXnuZ3Svt5zfpEcbd"
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
            src="https://icecube-eu-403.icedrive.io/download?p=03MgP6WfyoV7ravJLXXPQpJPxfxWaLNK.om0e1LyOb6oMGbhSIxZM8NynHXSIqcGS1KUcsCHoCyytXLQKpnxn87bX0JZ3ScffVFeredcu9hphIH1izFoFpWYy.Fqe57EGUQeSNO5sfUqA03.t7qQ2_3mj2yEUd3SdYNOYoOXgJCvY75DE.HjXCyOBMQKubKe6CJ1l8A1oB89dyXkbFoLwl7T84we_K6qogZSxBXY3ug5Pj0jXnuZ3Svt5zfpEcbd"
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
            src="https://icecube-eu-403.icedrive.io/thumbnail?p=BZWeaH.5dGZLwEOwCQ2krrzAfjnvGDrawjj2LzKnvY2qR7XAYlg1WmY1D2w5FB.Tqmz69UjxbKSWoV9B.6rH9mJjIueBzPUfljoMuTeVKtLgvTAHvNnEiQj9Tev8ouoq&w=1024&h=1024&m=cropped"
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
            src="https://icecube-eu-403.icedrive.io/download?p=03MgP6WfyoV7ravJLXXPQpJPxfxWaLNK.om0e1LyOb7ozLg4WNnHzSxrN8HBvkaLS1KUcsCHoCyytXLQKpnxn87bX0JZ3ScffVFeredcu9hU8QqtGk6eIiTVrLwfl_VRJqzq8hjIY2FXdGhmDflxDb10mMpfx86auVBCQi_sZ2IJJAsZU1S_.OScNPtS.QUGG7r8Hg2OtAxh3HowjHo1V2SyznozS6HGtfYGQ2CkBl45Pj0jXnuZ3Svt5zfpEcbd"
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
