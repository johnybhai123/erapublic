import styled from 'styled-components';


export const Main = styled.div`
margin:0;
padding:140px;
font-family: Arial, Helvetica, sans-serif ;
@media screen and (max-width: 768px) {
    padding:20px;
}
`
export const Start = styled.div`
margin:0;
padding:0;
display:flex;
`

export const Date = styled.div`
display:flex;
border:1px solid green;
color:green;
padding:5px;
align-items:center;
cursor:pointer;
`

export const NoticeText = styled.div`
margin:
cursor:pointer;
`

export const Sub = styled.div`
padding:10px 100px;
display:flex;
flex-flow: column wrap;
gap:40px;
@media screen and (max-width: 768px) {
padding:10px;
}
`

export const ExclusiveNotice= styled.div`

background:black;
color:white;
padding:10px;
text-align:center;

`

export const Noticeboard= styled.div`
display:flex;
justify-content:space-around;
@media screen and (max-width: 768px) {
    flex-direction:column;
}
`

export const ImportantNotoice = styled.div`
display:flex;
flex-flow: column wrap;
`