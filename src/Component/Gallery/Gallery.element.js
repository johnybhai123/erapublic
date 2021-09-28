import styled from 'styled-components';

export const Main = styled.div`
padding:0 150px;
font-family: Arial, Helvetica, sans-serif ;
@media screen and (max-width: 768px) {
    padding:10px;
}
`
export const Sub = styled.div`
display:flex;
flex-flow: column wrap;
`
export const Galleryoptions = styled.div`
display:flex;
justify-content:center;
gap:150px;
background:#3c0088;
padding:10px;
cursor:pointer;
border-radius:10px;
@media screen and (max-width: 768px) {
    gap:10px;
}
`
export const Galleryoptions1 = styled.div`
gap:10px;
padding:10px;
align-items:center;

border-radius:10px;
display:flex;
background: ${({ ChangeColor1 }) => (ChangeColor1 ? "white" : "#3c0088")};
color: ${({ ChangeColor1 }) => (ChangeColor1 ? "black" : "white")};
`
export const Galleryoptions2 = styled.div`
gap:10px;
padding:10px;
align-items:center;

border-radius:10px;
display:flex;
background: ${({ ChangeColor2 }) => (ChangeColor2 ? "white" : "#3c0088")};
color: ${({ ChangeColor2 }) => (ChangeColor2 ? "black" : "white")};
`
export const Galleryoptions3 = styled.div`
gap:10px;
align-items:center;

padding:10px;
border-radius:10px;
display:flex;
background: ${({ ChangeColor3 }) => (ChangeColor3 ? "white" : "#3c0088")};
color: ${({ ChangeColor3 }) => (ChangeColor3 ? "black" : "white")};
`
export const Subgrid = styled.div`
display:flex;
flex-flow:row wrap;
gap:90px;
justify-content:space-evenly;
`

export const Img = styled.img`
height:250px;
width:250px;

`
export const Logo = styled.div`

`

export const P = styled.p`
font-size:20px;
font-weight:600;
@media screen and (max-width: 768px) {
    font-size:10px;
    font-weight:600;
}
`