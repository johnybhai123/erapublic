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
              image="http://erapublicschool.herokuapp.com/media/243006855_591717222182355_8501833702953860932_n.jpg"
              heading="Campus"
              description="Four Acre Campus"
            />
          </Link>
          <Link to="/classroom">
            <Component
              image="http://erapublicschool.herokuapp.com/media/243006855_591717222182355_8501833702953860932_n.jpg"
              heading=" Class Room "
              description=" Digital And Smart Class Room  "
            />
          </Link>
          <Link to="/library">
            <Component
              image="https://icecube-eu-403.icedrive.io/download?p=03MgP6WfyoV7ravJLXXPQpJPxfxWaLNK.om0e1LyOb6H4lvv1V9XeIHnifiXbwR3S1KUcsCHoCyytXLQKpnxn87bX0JZ3ScffVFeredcu9h_nwdqmPFdel1KAZUZox3DxwVaDmS_u0qFsYkNVz1qOTLg3cMVw9TaeY9_iSspNN4MMKYN.vicWAKXZYP9rL5_bjrpQUYtjwFXL5nCHkx7aVKtEbnrdgcjGcM.fKW6ujo5Pj0jXnuZ3Svt5zfpEcbd"
              heading="Library"
              description="Well equipped Library "
            />
          </Link>
          <Link to="/lab">
            <Component
              image="http://erapublicschool.herokuapp.com/media/243020495_591716008849143_2167807617762565681_n.jpg"
              heading="Laboratory "
              description="Science labs"
            />
          </Link>
        </Fac>
        <Fac>
          <Link to="/activity">
            {" "}
            <Component
              image="http://erapublicschool.herokuapp.com/media/243009588_591716282182449_8379969160563946591_n.jpg"
              heading="Activity Room"
              description="Kids Activity Room "
            />
          </Link>
          <Component
            heading=" Seminar "
            image='http://erapublicschool.herokuapp.com/media/243052124_591717072182370_1730723465015863467_n.jpg'
            description="Auditorium & Audio Visual Room   "
          />
          <Link to="/activity">
            <Component
              image="http://erapublicschool.herokuapp.com/media/243047458_591715168849227_5570078910238863828_n.jpg"
              heading="Arts"
              description=" Art & Craft, Music and Dance "
            />
          </Link>
          <Link to="/transportation">
            <Component
                image="https://icecube-eu-403.icedrive.io/download?p=03MgP6WfyoV7ravJLXXPQpJPxfxWaLNK.om0e1LyOb7cUlwe9jmY3o3xBLqqptiHS1KUcsCHoCyytXLQKpnxn87bX0JZ3ScffVFeredcu9iGFKT5.NBb02Cn9c.Pqe1duMS5lICvUmGjLNGj5esH0sXFaTyBQ_.dYDWrLXrHPrPtIE2WNMj_V.baHStqpywz9DzB8SiaPisUHUxGZhJbWIKxesSInL4G5rqLec0jPKI5Pj0jXnuZ3Svt5zfpEcbd"
              heading="Transportation Facility "
              description="Transportation Facility"
            />
          </Link>
        </Fac>
        <Fac>
          <Link to="/kinder">
            {" "}
            <Component
              image="https://icecube-eu-403.icedrive.io/download?p=03MgP6WfyoV7ravJLXXPQpJPxfxWaLNK.om0e1LyOb5PQiGZ96V9zdWYHIh3aTMmS1KUcsCHoCyytXLQKpnxn87bX0JZ3ScffVFeredcu9gopsS4oF4PQJht9RsSjsiWZ8RMhT9epQbolharBAY.jhSr7ck13QMnZWzPOMRfvOcrbEPkrHm24EBisv80BjFS8jdwsfLpY4IOCO8K0TnKzpMgukMsr5K5qJQDHey5xkw5Pj0jXnuZ3Svt5zfpEcbd"
              heading="Ecofriendly Campus"
              description="Secure and Eco friendly Campus"
            />
          </Link>
          <Link to="/modern">
            <Component
              image="https://icecube-eu-403.icedrive.io/download?p=03MgP6WfyoV7ravJLXXPQpJPxfxWaLNK.om0e1LyOb4fmYKRj794R._HoTwoibzPS1KUcsCHoCyytXLQKpnxn87bX0JZ3ScffVFeredcu9i3i47XSbcPusTlSJEME.QTnQcnOGsc7B5zsOjBLUpl9rOCSXCFBzPzE6E2Jl3Cby5Mz7CFh0dcV6LYNPHUzUib.ob7qPlNUbDk0fMpHt7kvRYY4Ttp0ffPnBPjGjWoZlI5Pj0jXnuZ3Svt5zfpEcbd"
              heading=" Sports "
              description=" Well maintained Sports Complex  "
            />
          </Link>
          <Component
            heading="Environment"
            description="Motivating learning environment "
          />
          <Link to="/wifi">
            <Component
              image="http://erapublicschool.herokuapp.com/media/243054964_591716202182457_6860487110440298584_n.jpg"
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
