import styled from 'styled-components'

export const Directorbackground = styled.div`
background-image: url(${process.env.PUBLIC_URL + '/Admissioninquiry.jpg'});
height:80vh;
background-repeat:no-repeat;
background-size:cover;
background-position:center;
display:flex;
flex-direction:column;
`

export const Sub = styled.div`
opacity:0.7;
padding: 50px 100px;
@media screen and (max-width:768px){
    padding:20px;
    text-align:left;
}
`