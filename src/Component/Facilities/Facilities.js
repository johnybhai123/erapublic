import React,{useState} from 'react'
import { Dot3, Dot1, Dot2, Dots, H1, Main, P, Sub, Fac } from './Facilities.elements'

import Component from "./Component";
import { Link } from "react-router-dom";
function Facilities({ ChangeAnimation1, ChangeAnimation2, ChangeAnimation3 }) {
  const [color1, setColor1] = useState(1);
  const [color2, setColor2] = useState();
  const [color3, setColor3] = useState();

  {
    color1 ? (ChangeAnimation1 = true) : (ChangeAnimation1 = false);
  }
  {
    color2 ? (ChangeAnimation2 = true) : (ChangeAnimation2 = false);
  }
  {
    color3 ? (ChangeAnimation3 = true) : (ChangeAnimation3 = false);
  }
  console.log(ChangeAnimation2);
  return (
    <Main>
      <P>WHAT WE PROVIDED</P>
      <H1>SCHOOL FACILITIES</H1>
      <Sub
        ChangeAnimation1={ChangeAnimation1}
        ChangeAnimation2={ChangeAnimation2}
        ChangeAnimation3={ChangeAnimation3}
      >
        <Fac>
          <Link to="/">
            <Component
              image="https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687934/3_jop39w.jpg"
              heading="Campus"
              description="Four Acre Campus"
            />
          </Link>
          <Link to="/classroom">
            <Component
              image="https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687936/computerlab_e3u3ki.jpg"
              heading=" Class Room "
              description=" Digital And Smart Class Room  "
            />
          </Link>
          <Link to="/library">
            <Component
              image="https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687965/IMG_0963_luhjkh.jpg"
              heading="Library"
              description="Well equipped Library "
            />
          </Link>
          <Link to="/lab">
            <Component
              image="https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687962/IMG_0959_zxwzoo.jpg"
              heading="Laboratory "
              description="Science labs"
            />
          </Link>
        </Fac>
        <Fac>
          <Link to="/activity">
            {" "}
            <Component
              image="https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687980/IMG_1489_q1pr4h.jpg"
              heading="Activity Room"
              description="Kids Activity Room "
            />
          </Link>
          <Component
            heading=" Seminar "
            image='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687974/DSC_8026_ulfcdd.jpg'
            description="Auditorium & Audio Visual Room   "
          />
          <Link to="/activity">
            <Component
              image="https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687974/5_mc6l0l.jpg"
              heading="Arts"
              description=" Art & Craft, Music and Dance "
            />
          </Link>
          <Link to="/transportation">
            <Component
                image="https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687971/IMG_1010_kve8o2.jpg"
              heading="Transportation Facility "
              description="Transportation Facility"
            />
          </Link>
        </Fac>
        <Fac>
          <Link to="/kinder">
            {" "}
            <Component
              image="https://drive.google.com/uc?id=1L91G9pSwDgElQscZVYnzeWE314Oji89w"
              heading="Ecofriendly Campus"
              description="Secure and Eco friendly Campus"
            />
          </Link>
          <Link to="/modern">
            <Component
              image="https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687971/IMG_1010_kve8o2.jpg"
              heading=" Sports "
              description=" Well maintained Sports Complex  "
            />
          </Link>
          <Component
            heading="Environment"
            image='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687979/IMG_1512_xwikex.jpg'
            description="Motivating learning environment "
          />
          <Link to="/wifi">
            <Component
              image="https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687974/IMG_1486_u2nljh.jpg"
              heading="Computer Lab "
              description="Computer & Secure Wifi for kids"
            />
          </Link>
        </Fac>
      </Sub>
      <Dots>
        <Dot1
          onClick={() => {
            setColor1(true);
            setColor2(false);
            setColor3(false);
          }}
        ></Dot1>
        <Dot2
          onClick={() => {
            setColor1(false);
            setColor2(true);
            setColor3(false);
          }}
        ></Dot2>
        <Dot3
          onClick={() => {
            setColor1(false);
            setColor2(false);
            setColor3(true);
          }}
        ></Dot3>
      </Dots>
    </Main>
  );
}

export default Facilities
