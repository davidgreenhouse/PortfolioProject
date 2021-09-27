import React from "react";
import { Line, Circle, Image, Stage, Animation, Layer } from 'react-konva';
/* import '../spaceship.css' */
import star from '../img/shootingstar.png';
import useImage from 'use-image';


const StarImage = () => {
    const [image] = useImage(star);
    const ref = React.useRef(null);
    React.useEffect(()=>{
        if (ref) {
            console.log(ref)
            setInterval(()=>{
                ref.current.to({
                    x: 2500,
                    y: -300,
                    duration: 1.5,   
                })
            },4000)
        }
    },[ref])
    return <Image image={image} ref={ref} x={-300} y={700} />;
};

class Star extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <>
                <StarImage />
            </>
        )
    }
}








export default Star;