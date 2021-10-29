import styled from 'styled-components'

export const Directorbackground = styled.div`
background-image: url('http://erapublicschool.herokuapp.com/media/243076811_591716142182463_30702599338143971_n.jpg');
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