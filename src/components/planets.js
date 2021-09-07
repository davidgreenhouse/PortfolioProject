import React, { Component } from "react";
import { render } from 'react-dom';
import { Circle, Image } from "react-konva";
import planetOne from '../img/planetOne.png'; 
import planetTwo from '../img/planetTwo.png';
import planetThree from '../img/planetThree.png';
import planetFour from '../img/planetFour.png';
import planetFive from '../img/planetFive.png';
import useImage from 'use-image';
/* import FirstPlanet from '../img/planetOne.png'; */
/* import './App.css'; */


 const PlanetOneImage = () => {
  const [image] = useImage(planetOne);
  return <Image image={image} x={1300} y={400} />;
};

const PlanetTwoImage = () => {
  const [image] = useImage(planetTwo);
  return <Image image={image} x={975} y={20}/>;
};

const PlanetThreeImage = () => {
  const [image] = useImage(planetThree);
  return <Image image={image} x={500} y={250}/>;
};

const PlanetFourImage = () => {
  const [image] = useImage(planetFour);
  return <Image image={image} x={80} y={500}/>;
};

const PlanetFiveImage = () => {
  const [image] = useImage(planetFive);
  return <Image image={image} x={125} y={0}/>;
};




const Planet = () => {
  return (
    <div>
      <PlanetFiveImage />
      <PlanetTwoImage />
      <PlanetOneImage />
      <PlanetFourImage /> 
      <PlanetThreeImage />
    </div>
  ); 
}

/* class FirstPlanet extends React.Component {
  state = {
    image: null
  };
  componentDidMount() {
    const image = new window.Image();
    image.src = '../img/planetOne.png';
    image.onload = () => {
      this.setState({
        image: image
      });
    };
  }

  render() {
    return <Image image={this.state.image} y={400}/>;
  }
} */



export default Planet;