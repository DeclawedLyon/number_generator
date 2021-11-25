import './App.css';
import { useState } from 'react';
import NumberDisplay from './components/NumberDisplay'
import Limits from './components/Limits';

function App() {
  const [ minLimit, setMinLimit ] = useState(0);
  const [ maxLimit, setMaxLimit ] = useState(10000);
  const [ generatedNumbers, setGeneratedNumbers ] = useState([])
  const [ numberCount, SetNumberCount ] = useState(0);
  const input = document.querySelectorAll('input');
  for(let i=0; i<input.length; i++){
      input[i].setAttribute('size',input[i].getAttribute('placeholder').length);
  }

  const generateNumbers = (minimum, maximum) => {
    const min = parseInt(minimum)
    const max = parseInt(maximum)
    console.log(`min: ${parseInt(min)}\nmax: ${max}`)
    const numbers = [];
    let count = 1;
    
    while(numbers.length < (max - min)) {
      const x = Math.floor(Math.random() * (max - min +1)) + min;
      if(max === min) {
        numbers.push(min)
      }
      else if(!numbers.includes(x) && (x < max && x > min)) {
        numbers.push({id: count, number: x})
      }
      count++
    }
    // console.log("App.js\n", numbers)
    setGeneratedNumbers(numbers)
    SetNumberCount(count)
  }

  return (
    <div className="App">
      <div id="main-container">
        <header>
          <h1 id="app-title">Random Number Generator</h1>
          <span>Generates a list of random numbers between a selected range.</span>
          <span>Default range is between (0 - 10,000).</span>
        </header>
        <NumberDisplay
          numbers={generatedNumbers}
          count={numberCount}
        />
        <Limits
          minLimit={minLimit}
          maxLimit={maxLimit}
          setMinLimit={setMinLimit}
          setMaxLimit={setMaxLimit}
          generateNumbers={generateNumbers}
        />
      </div>
    </div>
  );
}

export default App;

