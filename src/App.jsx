import { useState } from "react";
import "./App.css";

function App() {
  const [text, settext] = useState("");

  const operators = ["/", "*", "-", "+"];

  const handleClick = (e) => {
    if (operators.includes(e.target.innerText)) {
      if (text.slice(-1) !== e.target.innerText) {
        settext(text + e.target.innerText);
      }
    } else {
      settext(text + e.target.innerText);
    }
  };

  const clear = () => {
    settext("");
  };

  const deleteLast = () => {
    settext(text.slice(0, -1));
  };

  const calculate = () => {
    settext(eval(text).toString());
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">{text === "" ? 0 : text}</div>
        <button onClick={clear}>C</button>
        <button onClick={deleteLast}>DEL</button>
        <button onClick={handleClick}>%</button>
        <button onClick={handleClick}>/</button>
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>*</button>
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleClick}>-</button>
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick}>+</button>
        <button className="span-two">0</button>
        <button onClick={handleClick}>,</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;
