import React from "react";
import "./styles.css";
import ConnectionLine from "../ConnectionLine";

const FunctionCard = ({
  funcNumber,
  equation,
  nextFunc,
  onEquationChange
}) => {
  return (
    <div className="function-card">
      <h3>::: Function: {funcNumber}</h3>
      <label>Equation</label>
      <input
        type="text"
        value={equation}
        onChange={(e) => onEquationChange(e.target.value)}
        className="equation"
      />
      <label>Next Function</label>
      <select disabled>
        <option>{nextFunc ? `Function ${nextFunc}` : "None"}</option>
      </select>
      <div className="result">
        <span className="input">
          <input
            type="checkbox"
            id={`radio1-${funcNumber}`}
            name={`group-${funcNumber}`}
            checked
          />
          <label htmlFor={`radio1-${funcNumber}`}>input</label>
        </span>
        <span className="output">
          <input
            type="checkbox"
            id={`radio2-${funcNumber}`}
            name={`group-${funcNumber}`}
            checked
          />
          <label htmlFor={`radio2-${funcNumber}`}>output</label>
        </span>
      </div>
    </div>
  );
};

export default FunctionCard;