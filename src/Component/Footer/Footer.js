import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { GoGlobe } from "react-icons/go";
import {
  Main,
  Footerz,
  Footerdescription,
  Ul,
  Li,
  Footerlinks,
  Footervideo,
} from "./Footer.elements";

function Footer() {
  return (
    <Main>
      <Footerz>
        <Footerdescription>
          <Ul>
            <Li style={{paddingBottom:'10px'}}>THE NEW ERA PUBLIC SCHOOL</Li>
            <Li style={{padding:'0px 80px',}}>
              <IoLocationOutline/> &nbsp;Chhota Bangarda Rd, Smruti Nagar, Rukmani Nagar, Indore, Madhya
              Pradesh 452006, India
            </Li>
            <Li style={{padding:'10px 0'}}> <BiPhone/> &nbsp; 0731 261 4700</Li>
            <Li style={{paddingBottom:'10px'}}><AiOutlineMail/> &nbsp;contact@erapublicschool.com</Li>
            <Li style={{paddingBottom:'10px'}}> <GoGlobe/> www.erapublicschool.com</Li>
          </Ul>
        </Footerdescription>
        <Footerlinks>
          <Ul>
            <Li>QUICK LINKS <hr /></Li>
            <Li>SCHOOL BROCHURE <hr /></Li>
            <Li>CAREERS <hr /></Li>
            <Li>UPDATES <hr /></Li>
            <Li>ALUMINI <hr /></Li>
          </Ul>
        </Footerlinks>
        <Footervideo>
          <h2>School Video</h2>
          <iframe
            width="250"
            height="250"
            src="https://www.youtube.com/embed/ZBBaZMsE-T8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </Footervideo>
      </Footerz>
      <hr />
      <h5>Copyright: 2021 Era Public School. All Rights Reserved.</h5>
    </Main>
  );
}

export default Footer;
