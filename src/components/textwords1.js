import React from 'react';
import { Stage, Layer, Image, Text, Rect } from 'react-konva';


const TextWords = () => {
    return (
        <>    
            <Text className="textbox" text="Welcome to David's Portfolio! Feel free to adventure" fontFamily="monospace" fill="black"  fontSize={20} x={535} y={740}></Text>
            <Text className="textbox" text="with your own personal spaceship, using the arrow keys" fontFamily="monospace" fill="black"  fontSize={20} x={520} y={765}></Text>
            <Text className="textbox" text="on your keyboard to travel the galaxy! If not, you can" fontFamily="monospace" fill="black"  fontSize={20} x={525} y={790}></Text>
            <Text className="textbox" text="also click on each planet individually. Have Fun!" fontFamily="monospace" fill="black"  fontSize={20} x={545} y={815}></Text>
        </>
    )
}


export default TextWords;