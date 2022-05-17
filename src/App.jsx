import { Counter } from "./Components/Counter";
import './App.css';

function App() {
  let num=0;
  return (
    <div className="App">
      <Counter value={num} ></Counter>
    </div>
  );
}

export default App;
