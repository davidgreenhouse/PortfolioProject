import { Stage, Layer, Image, Text } from 'react-konva';
import './App.css';
import { UP, DOWN, LEFT, RIGHT } from './helpers/constants'
import Spaceship from './components/ship';
import Space from './components/background';
import Planet from './components/planets';
import Satelite from './components/satelite';
import Textbox from './components/textbox';
import Textwords from './components/textwords1';
import planetOne from './img/planetOne.png'; 
import planetTwo from './img/planetTwo.png';
import planetThree from './img/planetThree.png';
import planetFour from './img/planetFour.png';
import planetFive from './img/planetFive.png';
import useImage from 'use-image';
import Star from './components/star';

export const App = () => {
  const planets = [{
    x: 1100,
    y: 400,
    width: 439,
    height: 568,
    image: planetOne 
  },{
    x: 900,
    y: 20,
    width: 439,
    height: 568,
    image: planetTwo 
  },{
    x:500,
    y:250,
    width: 439,
    height: 568,
    image: planetThree 
  },{
    x: 80,
    y: 500,
    width: 439,
    height: 568,
    image: planetFour 
  },{
    x: 125,
    y: 0,
    width: 439,
    height: 568,
    image: planetFive 
  }]

  return (
    <div className = "container" > 
      <Stage className="canvas" width={window.innerWidth} height={window.innerHeight}>
        <Layer>
           
          <Space />
          <Planet planets={planets}/>
          <Textbox />
          <Textwords />
          <Satelite />
          {/* <Star /> */}
          <Spaceship planets={planets}/>
        </Layer>
       </Stage>
    </div>
  );
}
export default App;
