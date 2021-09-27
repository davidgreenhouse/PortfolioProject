import React from 'react';
import { Stage, Layer, Image, Text, Rect } from 'react-konva';

const TextBox = () => {
    return (
        <Rect fill="white" width="700" height="125" stroke="grey" lineJoin="round" strokeWidth="10" x={500} y={725}>
            {/* <div className="textbox"fill="black" fontSize={40}>Hi everybody, lets talk about pyramid schemes </div>  */}  
        </Rect>
        

    )
}
/* const TextWords = () => {
    return (
        <Text className="textbox" text="Hi everybody, lets talk about pyramid schemes" fill="black" fontSize={40} x={500} y={725} />
    )
} */


export default TextBox;