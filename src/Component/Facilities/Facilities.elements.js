import styled from 'styled-components';

export const Main = styled.div`
box-sizing:border-box;
padding:0;
margin:0;
`

export const Sub = styled.div`
display:flex;
justify-content:space-evenly;
flex-flow: row wrap;
padding: 50px 0;
gap:40px;

`

export const P = styled.p`
text-align:center;
margin-top:140px;
`
export const H1 = styled.h1`
text-align:center;
`

//Component

export const Subcomponent = styled.div`
display:flex;
flex-flow: column wrap;
flex-basis:250px;
// border:1px solid #111;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.09), 0 5px 12px 0 rgba(0, 0, 0, 0.09);
cursor:pointer;
border-radius:5px;
padding:30px;

`

export const Imagecomponent = styled.img`
height:250px;
width:280px;
border-radius:10px;
`

export const Headingcomponent = styled.div`
font-size:20px;
padding:3px;

`

export const Descriptioncomponent = styled.div`
padding:3px;


`

export const Dots = styled.div`
display:flex;
gap:50px;
justify-content:center;
`
export const Dot = styled.div`
border: 4px solid red;
border-radius:50%;
height:20px;
width:20px;



`