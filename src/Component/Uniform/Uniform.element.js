import styled from "styled-components";


export const Directorbackground = styled.div`
background-image: url(${process.env.PUBLIC_URL + '/dress.jpg'});
height:80vh;
background-repeat:no-repeat;
background-size:cover;
background-position:center;
display:flex;
flex-direction:column;`

export const Sub = styled.div`
padding:30px 120px;
@media screen and (max-width:768px){
    padding:10px;
}
`

export const Row2 = styled.div`
display:grid;
grid-template-rows: 0.1fr 1fr;

`

export const Nur = styled.div`

`
export const Nuruniform = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
grid-template-rows:repeat(3,1fr);
text-align: left;
padding:20px;
@media screen and (max-width:768px){
    padding:0
}
    `

