import styled from "styled-components";

const EditorWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`

const Button = styled.button`
border: 1px solid black;
background-color: transparent;
`

const Text = styled.div`
margin-top:4vh;
border: 1px solid black;
width:800px;
padding:4vh;
font-size: 20px;
font-style: ${props => props.italicstyle};
font-weight: ${props => props.fontWeight};
font-family: ${props => props.font}, serif;
text-align: ${props => props.alignment};
color: ${props => props.fontColor};
`

const ButtonWrapper = styled.div`
margin-top:4vh;
display: flex;
align-items: center;
justify-content: space-evenly;
`

export {EditorWrapper, Button, Text, ButtonWrapper}