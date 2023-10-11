import React, { useEffect, useState } from 'react'
import { Button, ButtonWrapper, EditorWrapper, Text } from './EditorStyled'
import { SketchPicker } from 'react-color';


const Editor = () => {
const [font, setFont] = useState('Arial')
const [fontWeight, setFontWeight] = useState(400)
const [italicstyle, setItalicstyle] = useState("none")
const [alignment, setAlignment] = useState(["left", "center", "right", "justify"])
const [selectedText, setSelectedText] = useState('');
const [fontColor, setFontColor] = useState("#000000")
const [showColorPicker, setShowColorPicker] = useState(false)

// same can be done for font size and font color

const handleFontStyle = () => {
    if (selectedText !== '') setFont('Tangerine')
}

const handleBold = () => {
    if (selectedText !== '')  setFontWeight(600)
}

const handleItalics = () => {
    if (selectedText !== '') setItalicstyle("italic") 
}

const handleFontAlignment = (alignment) => {
    if (selectedText !== '') setAlignment(alignment)
}

const handleMouseUp = () => {
    const selection = window.getSelection();
    if (selection.toString().length > 0) {
      setSelectedText(selection.toString());
    } else {
      setSelectedText('');
    }
};

const handleFontColor = () => {
  setShowColorPicker(true)
}

const handleChangeComplete = (color) => {
  console.log(color)
  if (selectedText !== '') setFontColor(color.hex)
}


  return (
   <EditorWrapper>
    <ButtonWrapper>
    <Button onClick = {handleFontStyle}>Fonts</Button>
    <Button onClick = {handleBold}>Bold</Button>
    <Button onClick = {handleItalics} >Italics</Button>
    <Button onClick = {() => handleFontAlignment("left")}>Left</Button>
    <Button onClick = {() => handleFontAlignment("center")}>Center</Button>
    <Button onClick = {() => handleFontAlignment("right")}>Right</Button>
    <Button onClick = {() => handleFontAlignment("justify")}>Justify</Button>
    <Button onClick = {handleFontColor}>Color</Button>
    </ButtonWrapper>
    {showColorPicker ? <SketchPicker
    color={ fontColor }
    onChangeComplete={ handleChangeComplete }
     /> : null}
    <Text font={font} fontWeight={fontWeight} italicstyle={italicstyle} alignment={alignment} onMouseUp={handleMouseUp} fontColor={fontColor}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </Text>
   </EditorWrapper>
  )
}

export default Editor
