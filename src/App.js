import { Stage, Layer } from 'react-konva';
import './App.css';
import { UP, DOWN, LEFT, RIGHT } from './helpers/constants'
import Spaceship from './components/ship';
import Space from './components/background';
import Planet from './components/planets';
export const App = () => {
  return (
    <div className = "container" > 
      <Stage className="canvas" width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Spaceship className="spaceship"/>
          <Space />
          <Planet /* x={700} y={150} */ />
        </Layer>
      </Stage>
    </div>
  );
}
export default App;
