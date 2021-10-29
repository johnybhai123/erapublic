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
              image="https://drive.google.com/uc?id=1L91G9pSwDgElQscZVYnzeWE314Oji89w"
              heading="Campus"
              description="Four Acre Campus"
            />
          </Link>
          <Link to="/classroom">
            <Component
              image="https://drive.google.com/uc?id=1g3H-08V5Y-AbvCj9hrIoYR_t_2jo4waz"
              heading=" Class Room "
              description=" Digital And Smart Class Room  "
            />
          </Link>
          <Link to="/library">
            <Component
              image="https://drive.google.com/uc?id=1-qFbwx0rcryi0vINmWNt3JexOAtgAljO"
              heading="Library"
              description="Well equipped Library "
            />
          </Link>
          <Link to="/lab">
            <Component
              image="https://drive.google.com/uc?id=1FO45KKK9vBk5QekNDgm9AKx2TN-25Abc"
              heading="Laboratory "
              description="Science labs"
            />
          </Link>
        </Fac>
        <Fac>
          <Link to="/activity">
            {" "}
            <Component
              image="https://drive.google.com/uc?id=1E8AKtKjn0emHhi3hQah5U9rN2dPXBT4p"
              heading="Activity Room"
              description="Kids Activity Room "
            />
          </Link>
          <Component
            heading=" Seminar "
            image='https://drive.google.com/uc?id=11obVyNMqMisvCWET5ill3mD5AtqHGKpX'
            description="Auditorium & Audio Visual Room   "
          />
          <Link to="/activity">
            <Component
              image="https://drive.google.com/uc?id=19QGs_MUWMf2ndBn8EuifEj6IXBNSCZK-"
              heading="Arts"
              description=" Art & Craft, Music and Dance "
            />
          </Link>
          <Link to="/transportation">
            <Component
                image="https://drive.google.com/uc?id=1L91G9pSwDgElQscZVYnzeWE314Oji89w"
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
              image="https://drive.google.com/uc?id=1SC0rzkXFApexHwh_fKQVwPrZ4POx0Vwf"
              heading=" Sports "
              description=" Well maintained Sports Complex  "
            />
          </Link>
          <Component
            heading="Environment"
            image='https://drive.google.com/uc?id=11rIATFazq6a6Bu3hhTsnaMTJ8x9_NFmp'
            description="Motivating learning environment "
          />
          <Link to="/wifi">
            <Component
              image="https://drive.google.com/uc?id=15NByCygIGjQbNoaZjdjHhCd6VzpamhCP"
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
