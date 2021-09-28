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
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Main>
      <Footerz>
        <Footerdescription>
          <Ul>
            <Li style={{paddingBottom:'10px'}}>THE NEW ERA PUBLIC SCHOOL</Li>
            <Li style={{padding:'0px 80px',}}>
              <IoLocationOutline/> &nbsp;271 - 1/1, 1/2, Chhota Bangarda Main Road , indore
Pin code – 452001

            </Li>
            <Li style={{padding:'10px 0'}}> <BiPhone/> &nbsp; 0731 2991095</Li>
            <Li style={{paddingBottom:'10px'}}><AiOutlineMail/> &nbsp;tneps.campus2@gmail.com</Li>
            <Li style={{paddingBottom:'10px'}}> <GoGlobe/> www.tnepscbse.com</Li>
          </Ul>
        </Footerdescription>
        <Footerlinks>
          <Ul>
          <a style={{color: 'white'}} href="https://docs.google.com/spreadsheets/d/1E4y9VzUVDFcrEj4Wfr20gZ0LbWx_VQ5Z/edit#gid=1387076252">  <Li>BOOK LIST <hr /></Li></a>
          <a style={{color: 'white'}} href="https://docs.google.com/document/d/1m8CoeexrAyFr0n9nX8vcfcKWfuFEL-4P/edit">  <Li>TRANSFER CERTIFICATE <hr /></Li></a>
          <a style={{color: 'white'}} href="https://drive.google.com/file/d/1hahpcMml0IdGnV0amuabFK-WfRq2egsh/view?usp=sharing">  <Li>SCHOOL BROCHURE <hr /></Li></a>
          <a style={{color: 'white'}} href="https://drive.google.com/file/d/1ZQ3amxbnnvMtQEo2Au4chjm1dc9LhSBN/view?usp=sharing">  <Li>SCHOOL MANAGEMENT COMMITTEE <hr /></Li></a>
       
         
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
