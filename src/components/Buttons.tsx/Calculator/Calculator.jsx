import React from "react";
import { StyledCalculator } from "../../../styles/Calculator";
import { useState } from "react";
import Button from "../Buttons/Button";

// TO-DO first input can only be - operator, no other operator

const operators = ["/", "*", "-", "+"];

const Calculator = () => {
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
    <StyledCalculator>
      <div className="display">{display === "" ? 0 : display}</div>
      <Button label={"C"} onClick={clear} />
      <Button label={"⬅"} onClick={deleteLast} />
      <Button label={"%"} onClick={percentage} />
      <Button label={"/"} onClick={handleClickOperator} />
      <Button label={"7"} onClick={handleClick} />
      <Button label={"8"} onClick={handleClick} />
      <Button label={"9"} onClick={handleClick} />
      <Button label={"*"} onClick={handleClickOperator} />
      <Button label={"4"} onClick={handleClick} />
      <Button label={"5"} onClick={handleClick} />
      <Button label={"6"} onClick={handleClick} />
      <Button label={"-"} onClick={handleClickOperator} />
      <Button label={"1"} onClick={handleClick} />
      <Button label={"2"} onClick={handleClick} />
      <Button label={"3"} onClick={handleClick} />
      <Button label={"+"} onClick={handleClickOperator} />
      <Button label={"0"} onClick={zeroCheck} className="span-two" />
      <Button label={"."} onClick={decimalSeperator} />
      <Button label={"="} onClick={calculate} />
    </StyledCalculator>
  );
};

export default Calculator;
