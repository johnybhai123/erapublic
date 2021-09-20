import React from "react";
import { Directortext, Main } from "../Directorpen/Director.element";
import {
  Directorbackground,
  Nur,
  Nuruniform,
  Row2,
  Sub,
} from "./Uniform.element";

function Uniform() {
  return (
    <Main>
      <Directorbackground>
        <Directortext>
          <h1>School Uniform</h1>
          <p>
            The New Era Public School| <span>School Uniform</span>{" "}
          </p>
        </Directortext>
      </Directorbackground>

      <Sub>
        <Row2>
          <Nur>CLASS NUR. TO KG II</Nur>
          <Nuruniform>
            <p style={{border:'1px solid black',alignSelf:'center',padding:'50px'}}>Monday, Tuesday, Thursday, Friday</p>
            <ul style={{border:'1px solid black'}}>
              <li>
                Green T-shirt with Chinese collar and half sleeves with navy
                blue linings
              </li>
              <li>Denim blue ¾ th Full pant</li>
              <li>black lace shoes</li>
              <li>Socks navy blue</li>
              <li>Batch card</li>
            </ul>
            <p style={{border:'1px solid black',alignSelf:'center',padding:'50px'}}>Wednesday, Saturday</p>
            <ul style={{border:'1px solid black'}}>
              {" "}
              <li>Orange printed T-shirt with round neck</li>
              <li>Denim blue ¾ th Full pant</li>
              <li>black lace shoes</li>
              <li>Socks navy blue</li>
              <li>Batch card</li>
            </ul>
            <p style={{border:'1px solid black',alignSelf:'center',padding:'50px'}}>Monday-Saturday</p>
            <ul style={{border:'1px solid black'}}><li>Winters-Navy Blue Hoodie</li></ul>
          </Nuruniform>
        </Row2>
      </Sub>
    </Main>
  );
}

export default Uniform;
