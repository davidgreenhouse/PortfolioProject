import React, { Component } from "react";
import { render } from 'react-dom';
import { Circle, Image } from "react-konva";
import planetOne from '../img/planetOne.png'; 
import planetTwo from '../img/planetTwo.png';
import planetThree from '../img/planetThree.png';
import planetFour from '../img/planetFour.png';
import planetFive from '../img/planetFive.png';
import useImage from 'use-image';
import satelite from'../img/satelite.png';


const PlanetOneLink = () => {
  window.open ("http://google.com")  
}

const PlanetTwoLink = () => {
  window.open ("http://google.com")  
}

const PlanetThreeLink = () => {
  window.open ("http://google.com")  
}

const PlanetFourLink = () => {
  window.open ("http://google.com")  
}

const PlanetFiveLink = () => {
  window.open ("http://google.com")  
}

/* React router DOM */


 const PlanetOneImage = () => {
  const [image] = useImage(planetOne);
  return <Image onClick={PlanetOneLink} image={image} x={1100} y={400} />;
};

const PlanetTwoImage = () => {
  const [image] = useImage(planetTwo);
  return <Image onClick={PlanetTwoLink} image={image} x={900} y={20}/>;
};

const PlanetThreeImage = () => {
  const [image] = useImage(planetThree);
  return <Image onClick={PlanetThreeLink} image={image} x={500} y={250}/>;
};

const PlanetFourImage = () => {
  const [image] = useImage(planetFour);
  return <Image onClick={PlanetFourLink} image={image} x={80} y={500}/>;
};

const PlanetFiveImage = () => {
  const [image] = useImage(planetFive);
  return <Image onClick={PlanetFiveLink} image={image} x={125} y={0}/>;
};

const PlanetImage = ({planetImage, x, y}) => {
  const [image] = useImage(planetImage);
  return <Image onClick={PlanetFiveLink} image={image} x={x} y={y}/>;
}




const Planet = ({planets}) => {
  return (
    <div>
      {planets.map(planet=>{
        console.log(planet)
        return <PlanetImage onClick={PlanetOneLink} planetImage={planet.image} x={planet.x} y={planet.y} />;
      
      })}
      
      {/* <PlanetFiveImage />
      <PlanetTwoImage />
      <PlanetOneImage />
      <PlanetFourImage /> 
      <PlanetThreeImage /> */}
    </div>
  ); 
}




export default Planet;