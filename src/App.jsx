import { useState } from "react";
import "./App.css";
import { Calculator } from "./styles/Calculator";

const operators = ["/", "*", "-", "+"];

function App() {
  const [display, setDisplay] = useState("");

  const lastInput = display.slice(-1);
  const lastInputWasOperator = operators.includes(lastInput);

  const values = display.split(/([/*+-])/);
  let lastDigits = values[values.length - 1];

  const handleClick = (e) => {
    setDisplay(display + e.target.innerText);
  };

  const handleClickOperator = (e) => {
    !lastInputWasOperator && setDisplay(display + e.target.innerText);
  };

  const clear = () => {
    setDisplay("");
  };

  const deleteLast = () => {
    setDisplay(display.slice(0, -1));
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      console.log("Not a valid operation!");
    }
  };
  const percentage = () => {
    if (!lastInputWasOperator) {
      values[values.length - 1] = parseFloat(lastDigits) / 100;
      setDisplay(values.join(""));
    }
  };
  const decimalSeperator = (e) => {
    if (!lastDigits.includes(".")) {
      setDisplay(display + e.target.innerText);
    }
  };
  const zeroCheck = (e) => {
    if (lastDigits[0] !== "0" || lastDigits.includes(".")) {
      setDisplay(display + e.target.innerText);
    }
  };

  return (
    <Calculator>
      <div className="display">{display === "" ? 0 : display}</div>
      <button onClick={clear}>C</button>
      <button onClick={deleteLast}>⬅</button>
      <button onClick={percentage}>%</button>
      <button onClick={handleClickOperator}>/</button>
      <button onClick={handleClick}>7</button>
      <button onClick={handleClick}>8</button>
      <button onClick={handleClick}>9</button>
      <button onClick={handleClickOperator}>*</button>
      <button onClick={handleClick}>4</button>
      <button onClick={handleClick}>5</button>
      <button onClick={handleClick}>6</button>
      <button onClick={handleClickOperator}>-</button>
      <button onClick={handleClick}>1</button>
      <button onClick={handleClick}>2</button>
      <button onClick={handleClick}>3</button>
      <button onClick={handleClickOperator}>+</button>
      <button onClick={zeroCheck} className="span-two">
        0
      </button>
      <button onClick={decimalSeperator}>.</button>
      <button onClick={calculate}>=</button>
    </Calculator>
  );
}

export default App;
