import styled from 'styled-components'

export const Directorbackground = styled.div`
background-image: url('https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/243031373_591716368849107_7582309625470400637_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=XgrhgreIZVYAX8qtZs8&_nc_ht=scontent-bom1-1.xx&oh=f9c246afa2cd1bd71f47e3d536ba7054&oe=61763355');
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