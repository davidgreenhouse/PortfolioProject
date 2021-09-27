import React from "react";
import { Line, Circle, Image } from 'react-konva';
/* import '../spaceship.css' */
import ship from '../img/spaceshipsmall.png';
import useImage from 'use-image';
 
/* import './App.css'; */

const ShipImage = (props) => {
    const [image] = useImage(ship); 
    const [x, setX] = React.useState(parseInt(600))
    const [y, setY] = React.useState(parseInt(600))
    const [rotation, setRotation] = React.useState(0)
    const checkIntersection = () => {
        props.planets.forEach(planet => {
        const spaceShip = {x: x, y: y, width: 144, height: 186 }
        if (haveIntersection(planet, spaceShip)){
            console.log("collision")
        } else {
            console.log("no collision")
        }       
        });
    }
    const haveIntersection = (r1, r2) => {
        return !(
          r2.x > r1.x + r1.width ||
          r2.x + r2.width < r1.x ||
          r2.y > r1.y + r1.height ||
          r2.y + r2.height < r1.y
        );
    }
    React.useEffect(()=>{
        checkIntersection()
    },[x, y])

    const leftArrowPressed = () => {
        setX(prevState => prevState - 7);
        setRotation(270);
    }

    const rightArrowPressed = () => {
        setX(prevState => prevState + 7);
        setRotation(90);
    }

    const upArrowPressed = () => {
        setY(prevState => prevState - 7);
        setRotation(0);
    }

    const downArrowPressed = () => {
        setY(prevState => prevState + 7);
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

    /* const CollisionDetection = () => {    
        return (
            console.log("Hit")
        )   
    }; */

    
    /* if (Spaceship.setX===607 && Spaceship.setY===600) {
        console.log("You hit")
    }  */

    
    

    
    React.useEffect(()=>{
        window.addEventListener('keydown', moveSelection);   
    },[]) 
    
    console.log(x, y)
    return <Image id="ship" image={image} x={x} y={y} rotation={rotation} offsetX={72} offsetY={46.5} />;
};





class Spaceship extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    };
    render() {
        return (
            <>
                <ShipImage planets={this.props.planets}/>
            </>
        )
    }
}



export default Spaceship;