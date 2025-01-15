import React, { useState, useEffect } from 'react';
import FunctionCard from '../src/Components/FunctionCard/index.jsx'
import './App.css';

const App = () => {
  const [initialValue, setInitialValue] = useState(2);
  const [equations, setEquations] = useState({
    1: "x^2",
    2: "2*x+4",
    4: "x-2",
    5: "x/2",
    3: "x^2+20",
  });
  const [results, setResults] = useState({});

  const chainOrder = [1, 2, 4, 5, 3];

  useEffect(() => {
    let x = initialValue;
    const newResults = {};
    for (const func of chainOrder) {
      const equation = equations[func].replaceAll("^", "**");
      try {
        x = eval(equation.replace(/x/g, x));
        newResults[func] = x;
      } catch (e) {
        newResults[func] = "Error";
        break;
      }
    }
    setResults(newResults);
  }, [initialValue, equations]);

  return (
    <div className="app">
      <div className="initial-value">
        <input
          type="number"
          value={initialValue}
          onChange={(e) => setInitialValue(Number(e.target.value))}
        />
        <label>Initial value of x</label>
      </div>
      <div className="function-chain">
        {chainOrder.map((func, index) => (
          <FunctionCard
            key={func}
            funcNumber={func}
            equation={equations[func]}
            nextFunc={chainOrder[index + 1] || null}
            onEquationChange={(newEq) =>
              setEquations({ ...equations, [func]: newEq })
            }
            result={results[func]}
          />
        ))}
      </div>
      <div className="final-output">
        <div className="output-box">{results[chainOrder.at(-1)] || 0}</div>
        <label>Final Output y</label>
      </div>
    </div>
  );
};

export default App;