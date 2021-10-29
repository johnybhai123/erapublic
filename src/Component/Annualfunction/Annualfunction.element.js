import styled from 'styled-components'

export const Directorbackground = styled.div`
background-image: url('https://drive.google.com/uc?id=1xPPbqm8E0Re73GrB9xLDDy3HXOB7tof8');
height:80vh;
background-repeat:no-repeat;
background-size:cover;
background-position:center;
display:flex;
flex-direction:column;
`
export const Div = styled.div`
display:flex;
flex-wrap:wrap;
padding:100px;
gap:50px;
justify-content:space-evenly;
@media screen and (max-width:768px){
    padding:10px;
}
`