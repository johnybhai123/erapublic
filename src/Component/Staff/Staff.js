import React from 'react'
import { Directortext } from '../Codeofconduct/Code.element'
import { Directorbackground, Main, Sub } from './Staff.element'

function Staff() {
    return (
        <Main>
               <Directorbackground>
                <Directortext>
                    <h1>Staff</h1>
                    <p>The New Era Public School| <span>Staff</span> </p>
                </Directortext>
                </Directorbackground> 

<Sub>

<table class="table p-4">
  <thead class="thead-dark">
    <tr>
      <th scope="col">OFFICE STAFF</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Principal</th>
     
    </tr>
    <tr>
      <th scope="row">Director</th>
  
    </tr>
    <tr>
      <th scope="row">Admministrator</th>
   
    </tr>
    <tr>
      <th scope="row">Office Incharge</th>
   
    </tr>
  </tbody>
</table>

<table class="table p-4">
  <thead class="thead-dark">
    <tr>
      <th scope="col">TGT</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Principal</th>
     
    </tr>
    <tr>
      <th scope="row">Director</th>
  
    </tr>
    <tr>
      <th scope="row">Admministrator</th>
   
    </tr>
    <tr>
      <th scope="row">Office Incharge</th>
   
    </tr>
  </tbody>
</table>

<table class="table p-4">
  <thead class="thead-dark">
    <tr>
      <th scope="col">PRT</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Principal</th>
     
    </tr>
    <tr>
      <th scope="row">Director</th>
  
    </tr>
    <tr>
      <th scope="row">Admministrator</th>
   
    </tr>
    <tr>
      <th scope="row">Office Incharge</th>
   
    </tr>
  </tbody>
</table>
</Sub>


        </Main>
    )
}

export default Staff
