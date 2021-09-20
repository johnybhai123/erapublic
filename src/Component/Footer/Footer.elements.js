import styled from 'styled-components'

export const Main = styled.div`
margin:0;
padding:30px;
background-color:rgba(0,0,0,0.7);
color:white;
`

export const Footerz = styled.div`
display:flex;
justify-content:space-around;
@media screen and (max-width: 768px) {
    flex-flow:column wrap;
}
`
export const Ul = styled.ul`
cursor:pointer;

list-style:none;
display:flex;
flex-flow: column wrap;

`
export const Li = styled.li`


`
export const Footerlinks = styled.div`
flex-basis:0;
flex-grow:1;

`
export const Footerdescription = styled.div`
flex-basis:0;
flex-grow:1;
`

export const Footervideo = styled.div`
flex-basis:0;
flex-grow:1;

`