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
                ref.current.to({
                    x: Math.random() * 800,
                    y: Math.random() * 800,
                    duration: 10,
                    rotation: Math.random() * 400,   
                })
            },3000)
        }
    },[ref])
    return <Image image={image} ref={ref} x={150} y={400} />;
};






/* var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var player = new Player(100, 175);

function Player(x, y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.direction = -1;
}
Player.prototype.draw = function () {
    context.fillRect(this.x, this.y, this.width, this.height);
};
Player.prototype.update = function () {
    this.y = this.y+this.direction;
    if( this.y <= 0 || this.y+this.height >= canvas.height ) {
        this.direction *= -1;
    }
};

function frameUpdate() {
    player.update();
    player.draw();

    window.requestAnimationFrame(frameUpdate);
} */






/* function sateliteAnim(){
    var velocity = 50;

    var anim = new Konva.Animation(function(frame) {
    var dist = velocity * (frame.timeDiff / 1000);
    node.move({x: dist, y: 0});
    }, layer);

    anim.start();
} */


/* var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height,
});

var layer = new Konva.Layer();

var SateliteImage = new Konva.RegularPolygon({
    x: stage.width() / 2,
    y: stage.height() / 2,
    sides: 6,
    radius: 20,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
});

layer.add(hexagon);
stage.add(layer);

var amplitude = 100;
var period = 2000;
// in ms
var centerX = stage.width() / 2;

var anim = new Konva.Animation(function (frame) {
    hexagon.x(
        amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX
    );
}, layer);

anim.start(); */

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