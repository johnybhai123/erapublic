import styled from 'styled-components'

export const Main= styled.div`
padding:90px;
@media screen and (max-width:768px){
    padding:10px;
}

`

export const Sub = styled.div`
display:flex;
flex-flow: row wrap;
justify-content:center;
gap:100px;
@media screen and (max-width:768px){
    flex-direction:column;
    gap:20px;
}
`

export const Fill = styled.div`
display:flex;
flex-flow: column wrap;
gap:20px;
`

export const Talk = styled.div`
display:flex;
flex-direction: column;
align-items:center;
`

export const Form = styled.form`
padding:10px;
`

export const Input = styled.input`
border-width: 0 0 2px;
border-color:rgb(211,211,211);
outline:0;
height:50px;
&:focus{
border-color:rgb(0,0,30);

}
`
export const Button = styled.button`
margin:auto;
width:150px;
height:50px;
color:rgb(211,211,211);
background-color:rgb(230,46,52);
border:none;
cursor:pointer;
border-radius:50px;
font-weight:600;
&:hover{
background-color:rgb(191,4,1);
    
}
`