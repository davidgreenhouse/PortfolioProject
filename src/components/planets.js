import React from "react";
import { Circle, Image } from "react-konva";
import planetOne from '../img/planetOne.png';
import planetTwo from '../img/planetTwo.png';
import useImage from 'use-image';
/* import './App.css'; */


const PlanetOneImage = () => {
  const [image] = useImage(planetOne);
  return <Image image={image} />;
};

const PlanetTwoImage = () => {
  const [image] = useImage(planetTwo);
  return <Image image={image} /* x={this.image.x} y={this.image.y} */ />;
};




const Planet = () => {
  return (
    <>
      <Circle x={100} y={100} fill="blue" stroke="yellow" radius={70} />
      <PlanetTwoImage fill="green" stroke="yellow" radius={20} />
      <PlanetOneImage x={670} y={49} fill="blue" stroke="orange" radius={70}  />
      <Circle x={980} y={100} fill="red" stroke="green" radius={70} />
      <Circle x={900} y={510} fill="grey" stroke="pink" radius={70} />
    </>
  );
};
export default Planet;