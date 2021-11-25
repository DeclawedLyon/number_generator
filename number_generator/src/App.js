import './App.css';
import { useState } from 'react';
import NumberDisplay from './components/NumberDisplay'
import Limits from './components/Limits';

function App() {
  const [ minLimit, setMinLimit ] = useState(0);
  const [ maxLimit, setMaxLimit ] = useState(10000);
  const [ generatedNumbers, setGeneratedNumbers ] = useState([])
  const [ numberCount, SetNumberCount ] = useState(0);

  const generateNumbers = (minimum, maximum) => {
    // insure inputs are numbers and not strings.
    const min = parseInt(minimum)
    const max = parseInt(maximum)
    const numbers = [];
    // keeps count of numbers to be displayed later
    let count = 0;
    
    // insures list of numbers stays within range
    while(numbers.length < (max - min)) {
      const x = Math.floor(Math.random() * (max - min +1)) + min;
      // insures only 1 of each number may exist within the array
      if(max === min) {
        numbers.push(min)
        count = count + 1;
      }
      else if(!numbers.includes(x) && (x < max && x > min)) {
        numbers.push({id: count, number: x})
        count = count + 1;
      }

    }
    // stores variables in state
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
          count={numberCount}
          generateNumbers={generateNumbers}
        />
      </div>
    </div>
  );
}

export default App;

