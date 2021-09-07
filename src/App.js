import { Stage, Layer, Image } from 'react-konva';
import './App.css';
import { UP, DOWN, LEFT, RIGHT } from './helpers/constants'
import Spaceship from './components/ship';
import Space from './components/background';
import Planet from './components/planets';
import Satelite from './components/satelite';
import useImage from 'use-image';

export const App = () => {
  return (
    <div className = "container" > 
      <Stage className="canvas" width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Space />
          <Planet />
          {/* <FirstPlanet /> */}
          {/* <PlanetOneImage /> */}
          <Satelite />
          <Spaceship />
        </Layer>
       </Stage>
    </div>
  );
}
export default App;
