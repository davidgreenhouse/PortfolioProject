import React from "react";
import { Line, Circle, Image } from 'react-konva';
/* import '../spaceship.css' */
import ship from '../img/spaceshipsmall.png';
import useImage from 'use-image';
/* import './App.css'; */

const ShipImage = () => {
    const [image] = useImage(ship); 
    const [x, setX] = React.useState(parseInt(600))
    const [y, setY] = React.useState(parseInt(600))
    const [rotation, setRotation] = React.useState(0)

    const leftArrowPressed = () => {
        setX(prevState => prevState - 5);
        setRotation(270);
        
        /* var element = document.getElementById("ship");
        console.log(element);
        element.style.left = parseInt(element.style.left) - 5 + 'px'; */
    }

    const rightArrowPressed = () => {
        setX(prevState => prevState + 5);
        setRotation(90);
    }

    const upArrowPressed = () => {
        setY(prevState => prevState - 5);
        setRotation(0);
    }

    const downArrowPressed = () => {
        setY(prevState => prevState + 5);
        setRotation(180);
    }  

    const moveSelection = (evt) => {
        console.log(evt.keyCode)
        switch (evt.keyCode) {
            case 37:
                leftArrowPressed();
                break;
            case 39:
                rightArrowPressed();
                break;
            case 38:
                upArrowPressed(); 
                
                break;
            case 40:
                downArrowPressed();
                break; 
        }
    }; 
    
    React.useEffect(()=>{
        window.addEventListener('keydown', moveSelection);   
    },[]) 
    
    console.log(x, y)
    return <Image id="ship" image={image} x={x} y={y} rotation={rotation} offsetX={72} offsetY={46.5}/* onkeydown="docready()" onkeyup="" onload="docReady()" */ />;
};





class Spaceship extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    };
    render() {
        return (
            <>
                <ShipImage />
            </>
        )
    }
}



export default Spaceship;