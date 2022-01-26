import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import Prediction from './components/Prediction';

function App() {
  return (
    <div className="App">
      <h1 className='tamil'>சொல்</h1>
      <Prediction></Prediction>
      <Board></Board>
      <Keyboard></Keyboard>
    </div>
  );
}

export default App;
