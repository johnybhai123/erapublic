import styled from 'styled-components'

export const Main = styled.div`
padding:40px 0;
margin:50px;
background:#3F4142;
font-family: Arial, Helvetica, sans-serif ;
@media screen and (max-width: 768px) {
}
`

export const Sub = styled.div`
display:flex;
flex-flow: column wrap;

`

export const Logo = styled.div`
cursor:pointer;
`

export const Logoheading = styled.div`
color:yellow;
font-size:20px;
font-weight:600;
padding:10px;
cursor:pointer;
&:hover{
    opacity:0.7;
}
`

export const Subflex = styled.div`
display:flex;
justify-content:space-around;
@media screen and (max-width: 768px) {
    flex-flow:column wrap;
    }
`