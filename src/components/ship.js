import React from "react";
import { Line, Circle, Image } from 'react-konva';
/* import '../spaceship.css' */
import ship from '../img/spaceshipsmall.png';
import useImage from 'use-image';
/* import './App.css'; */

const ShipImage = () => {
    const [image] = useImage(ship);
    return <Image image={image} x={450} y={600}/>;
};

let modifier = 5;
window.addEventListener('keydown', (event) => {
    const { style } = Circle;
    switch (event.key) {
        case 'ArrowUp' : style.top = `$parseInt(style.top) - modifier}px`; break;
        case 'ArrowDown' : style.top = `$parseInt(style.top) + modifier}px`; break;
        case 'ArrowLeft' : style.left = `$parseInt(style.left) - modifier}px`; break;
        case 'ArrowRight' : style.left = `$parseInt(style.left) + modifier}px`; break;
    }
})
class Spaceship extends React.Component {
    constructor (props) {
        super(props);
        this.ref = React.createRef();
    };
    render () {
        return (
            <>
                <ShipImage />
                {/* <Circle position="absolute" top='0' left='0' fill="purple" stroke="blue" radius={30} />
                 <Line
                 x={50}
                 y={300}
                 points={[0, 0, 100, 0, 100, 100]}
                 tension={0}
                 closed
                 stroke="black"
                 fillLinearGradientStartPoint={{ x: -50, y: -50 }}
                 fillLinearGradientEndPoint={{ x: 50, y: 50 }}
                 fillLinearGradientColorStops={[0, 'purple', 1, 'violet']}
               />} */}
            </>
        )
    }
}



export default Spaceship;