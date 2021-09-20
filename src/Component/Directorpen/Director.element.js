import styled from 'styled-components';

export const Main = styled.div`
margin:0;
padding:0;

`

export const Directorbackground = styled.div`
background-image: url(${process.env.PUBLIC_URL + '/pen.jpg'});
height:80vh;
background-repeat:no-repeat;
background-size:cover;
background-position:center;
display:flex;
flex-direction:column;
`
export const Directortext = styled.div`
color:white;
display:flex;
flex-direction: column;
align-self:center;
padding:200px;
// @media screen and (max-width: 768px) {
//     padding:0;
// }
`

export const Directordescription = styled.div`
display:flex;
justify-content: space-evenly; 
gap:100px;
padding:100px;
@media screen and (max-width: 1250px) {
    flex-wrap:wrap;
}
`
export const Directorthought = styled.div`
display:flex;
flex-direction:column;
`
export const Directorimage = styled.div`
// max-width:100px;

`