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
              <IoLocationOutline/> &nbsp;271, 1/2, Chhota Bangarda Main Road , indore
Pin code – 452001

            </Li>
            <Li style={{padding:'10px 0'}}> <BiPhone/> <a href="tel:07312991095" style={{textDecoration:'none',color:'white'}}>&nbsp; 0731 2991095,8109100056</a></Li>
            <Li style={{paddingBottom:'10px'}}><AiOutlineMail/> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tneps.campus2@gmail.com" style={{textDecoration:'none',color:'white'}}>&nbsp;tneps.campus2@gmail.com</a></Li>
            <Li style={{paddingBottom:'10px'}}> <GoGlobe/><a href="https://www.tnepscbse.com" style={{textDecoration:'none',color:'white'}}> www.tnepscbse.com</a></Li>
          </Ul>
        </Footerdescription>
        <Footerlinks>
          <Ul>
          <a style={{color: 'white'}} href="https://drive.google.com/file/d/1aDmY-r0fJmzxeeZzzgjoAX6azEneayWp/view?usp=sharing">  <Li>BOOK LIST <hr /></Li></a>
          <a style={{color: 'white'}} href="https://drive.google.com/file/d/1bQOAIhordjyEj90yxKWJNaAuytZp23q4/view?usp=sharing">  <Li>TRANSFER CERTIFICATE <hr /></Li></a>
          <a style={{color: 'white'}} href="https://drive.google.com/file/d/1hahpcMml0IdGnV0amuabFK-WfRq2egsh/view?usp=sharing">  <Li>SCHOOL BROCHURE <hr /></Li></a>
          <a style={{color: 'white'}} href="https://drive.google.com/file/d/1ZQ3amxbnnvMtQEo2Au4chjm1dc9LhSBN/view?usp=sharing">  <Li>SCHOOL MANAGEMENT COMMITTEE <hr /></Li></a>
       
         
          </Ul>
        </Footerlinks>
        <Footervideo>
          <h2>School Video</h2>
          <iframe width="250" height="250" src="https://www.youtube.com/embed/zD3jEy3gpdc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
        </Footervideo>
      </Footerz>
      <hr />
      <h5>Copyright: 2021 Era Public School. All Rights Reserved.</h5>
    </Main>
  );
}

export default Footer;
