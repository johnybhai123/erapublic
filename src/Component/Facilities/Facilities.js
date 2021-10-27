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
        <Fac
      
        >
       <Link to='/'>
       <Component
            image="https://scontent.fbho4-2.fna.fbcdn.net/v/t1.6435-9/243007430_591715908849153_6866976988542216486_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=zOFV-ftBqTQAX8RgFYz&_nc_ht=scontent.fbho4-2.fna&oh=73474d92d76a4d3b4664bbc95990978a&oe=6178C5D1"
            heading="Campus"
            description="Four Acre Campus"
          /></Link>
          <Link to="/classroom">
            <Component
              image="https://scontent.fbho4-2.fna.fbcdn.net/v/t1.6435-9/243006212_591716055515805_374113974095213513_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=iB06cNoCa0kAX-BBOmP&tn=M4Zyun6SeeqEsVTT&_nc_ht=scontent.fbho4-2.fna&oh=8fac0141b97a1e0e2779776f5dca8434&oe=6179581C"
              heading=" Class Room "
              description=" Digital And Smart Class Room  "
            />
          </Link>
          <Link to="/library">
            <Component
              image='https://scontent.fbho4-2.fna.fbcdn.net/v/t1.6435-9/243318783_591715592182518_7551047071128773815_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=2x94u54rRNoAX967imH&_nc_ht=scontent.fbho4-2.fna&oh=31322d061213184063ecf84fbb8aa78c&oe=6177C76C'
              heading="Library"
              description="Well equipped Library "
            />
          </Link>
          <Link to="/lab">
            <Component
              image="https://scontent.fbho4-2.fna.fbcdn.net/v/t1.6435-9/243238205_591715468849197_1484819458339817203_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=u-TKP5ETmNsAX9T6DKY&tn=M4Zyun6SeeqEsVTT&_nc_ht=scontent.fbho4-2.fna&oh=a016299045032dc7eba07d0506b05be3&oe=61779203"
              heading="Laboratory "
              description="Science labs"
            />
          </Link>
        </Fac>
        <Fac
       
        >
          <Link to="/activity">
            {" "}
            <Component
              image='https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/243434357_591715422182535_6767829014693770393_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=a-mHa8-moeIAX8_dQbG&tn=M4Zyun6SeeqEsVTT&_nc_ht=scontent-bom1-1.xx&oh=2c8bc58cc35cfa0642f96e4190782342&oe=61773903'
              heading="Activity Room"
              description="Kids Activity Room "
            />
          </Link>
          <Component
            heading=" Seminar "
            description="Auditorium & Audio Visual Room   "
          />
          <Link to="/activity">
            <Component
              image='https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/243047458_591715168849227_5570078910238863828_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=CVYQIUkJvJoAX-Bk9Hr&_nc_ht=scontent-bom1-1.xx&oh=8da8c8dc659ad2214675e243a8e71ab1&oe=61776D70'
              heading="Arts"
              description=" Art & Craft, Music and Dance "
            />
          </Link>
          <Link to="/transportation">
            <Component
              heading="Transportation Facility "
              description="Transportation Facility"
            />
          </Link>
        </Fac>
        <Fac
      
        >
          <Link to="/kinder">
            {" "}
            <Component
              image='https://scontent.fbho4-2.fna.fbcdn.net/v/t1.6435-9/243019997_591715658849178_6993503452774393059_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=hltSBD0hdo4AX9VXVWo&_nc_ht=scontent.fbho4-2.fna&oh=aa9b5fc9c8089ba5688b7daa9a4be8ef&oe=6175BE9A'
              heading="Ecofriendly Campus"
              description="Secure and Eco friendly Campus"
            />
          </Link>
          <Link to="/modern">
            <Component
              image='https://scontent.fbho4-2.fna.fbcdn.net/v/t1.6435-9/243054861_591715308849213_5023238943677187445_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=aonglms9TKAAX98xYh7&tn=M4Zyun6SeeqEsVTT&_nc_ht=scontent.fbho4-2.fna&oh=2b7d281b72dbd181d00c7d36595f9ca3&oe=6177EDFD'
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
              image='https://scontent.fbho4-1.fna.fbcdn.net/v/t1.6435-9/243027734_591715838849160_7911354219088593251_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=yUCSdqoIvdAAX_9O76w&_nc_ht=scontent.fbho4-1.fna&oh=e9261eb724a362329dbbc0c832bf4782&oe=6177869D'
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
