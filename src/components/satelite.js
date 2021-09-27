import React from "react";
import { Line, Circle, Image, Stage, Animation, Layer } from 'react-konva';
/* import '../spaceship.css' */
import satelite from '../img/satelite.png';
import useImage from 'use-image';


const SateliteImage = () => {
    const [image] = useImage(satelite);
    const ref = React.useRef(null);
    React.useEffect(()=>{
        if (ref) {
            console.log(ref)
            setInterval(()=>{
                if (ref.current){
                    ref.current.to({
                        x: Math.random() * 600,
                        y: Math.random() * 600,
                        duration: 10,
                        rotation: Math.random() * 400,  
                })
                }
            },1000)
        }
    },[ref])
    return <Image image={image} ref={ref} x={150} y={250} />;
};



class Satelite extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <>
                <SateliteImage />
            </>
        )
    }
}








export default Satelite;