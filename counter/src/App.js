import './App.css';
import { useState } from 'react';

function App() {

  const [value, setvalue] = useState("0");

  const increment = () => {
    setvalue((prevValue)=>prevValue+1);
  }

  const decrement = () => {
    setvalue((prevValue)=>prevValue-1);
  }

  const Reset = () => {
    setvalue(0);
  }

  return (
    <>
      <div> Counter App </div>
      <p>Value: {value}</p>
      <div>
        <button onClick={ decrement }> Decrement</button>
        <button onClick={ Reset }>reset</button>
        <button onClick={ increment }> Increment</button>
      </div>
    </>
  );
}

export default App;
