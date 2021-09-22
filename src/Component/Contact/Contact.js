import React from 'react'
import { Directortext } from '../Codeofconduct/Code.element'
import { Directorbackground, Main, Sub } from './Contact.element'

function Contact() {
    return (
        <Main>
               <Directorbackground>
                <Directortext>
                    <h1>Contact Us</h1>
                    <p>The New Era Public School| <span>Contact Us</span> </p>
                </Directortext>
                </Directorbackground> 

<Sub>

<table class="table p-4">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Address</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Postal Address</th>
     <td>    The New Era Public School</td>

    </tr>
    <tr>
    <th scope="row">Phone</th>
     <td>  The New Era Public School </td>
  
    </tr>
    <tr>
    <th scope="row">E-mail</th>
     <td> Contact@erapublicschool.com</td>  
   
    </tr>
    <tr>
    <th scope="row">Website</th>
     <td> www.erapublicschool.com</td>
   
    </tr>
  </tbody>
</table>

<table class="table p-4">
  <thead class="thead-dark">
    <tr>
      <th scope="col">School Timings</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nursery to KG II</th>
     <td>    The New Era Public School</td>

    </tr>
    <tr>
    <th scope="row">Class I to class II</th>
     <td>  Class III to class X </td>
  
    </tr>
    <tr>
    <th scope="row">Class III to class X</th>
     <td> Contact@erapublicschool.com</td>  
   
    </tr>
  
  </tbody>
</table>

<table class="table p-4">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Visiting Hours</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Academic Head</th>
     <td>    The New Era Public School</td>

    </tr>
    <tr>
    <th scope="row">Directors</th>
     <td>  The New Era Public School </td>
  
    </tr>
    <tr>
    <th scope="row">Principal</th>
     <td> Contact@erapublicschool.com</td>  
   
    </tr>
    <tr>
    <th scope="row">Faculty</th>
     <td> www.erapublicschool.com</td>
   
    </tr>
  </tbody>
</table>

<div style={{padding:'10px'}}>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.829994115423!2d75.8264190149069!3d22.734559432735836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdf2e8e62ea9%3A0xb3c423226f7945e0!2sThe%20New%20Era%20Public%20School!5e0!3m2!1sen!2sin!4v1632161821130!5m2!1sen!2sin" style={{border: 0}} allowFullScreen loading="lazy" width={1000} height={500} />
</div>



</Sub>


        </Main>
    )
}

export default Contact
