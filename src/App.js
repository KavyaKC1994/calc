import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleCalculate = () => {
    try {
      if (expression.trim() === "") {
        setResult("Error");
      } else {
        const calculatedResult = eval(expression);
        setResult(calculatedResult);
      }
    } catch (error) {
      setResult("Error: Invalid expression");
    }
  };

  const handleClear = () => {
    setExpression("");
    setResult("");
  };

  return (
    <div style={{ textAlign: "center" }} className="calculator">
      <h2 style={{ fontSize: "32px" }}> React Calculator</h2>
      <input type="text" value={expression} readOnly />
      <p style={{ color: "grey" }}>
        <div> {result}</div>
      </p>
      <div className="buttons">
        <div>
          <button class="button1" onClick={() => handleButtonClick("7")}>
            7
          </button>
          <button class="button1" onClick={() => handleButtonClick("8")}>
            8
          </button>
          <button class="button1" onClick={() => handleButtonClick("9")}>
            9
          </button>
          <button class="button1" onClick={() => handleButtonClick("+")}>
            +
          </button>
        </div>
        <div>
          <button class="button1" onClick={() => handleButtonClick("4")}>
            4
          </button>
          <button class="button1" onClick={() => handleButtonClick("5")}>
            5
          </button>
          <button class="button1" onClick={() => handleButtonClick("6")}>
            6
          </button>
          <button class="button1" onClick={() => handleButtonClick("-")}>
            -
          </button>
        </div>
        <div>
          <button class="button1" onClick={() => handleButtonClick("1")}>
            1
          </button>
          <button class="button1" onClick={() => handleButtonClick("2")}>
            2
          </button>
          <button class="button1" onClick={() => handleButtonClick("3")}>
            3
          </button>
          <button class="button1" onClick={() => handleButtonClick("*")}>
            *
          </button>
        </div>
        <div>
          <button class="button1" onClick={handleClear}>
            C
          </button>
          <button class="button1" onClick={() => handleButtonClick("0")}>
            0
          </button>
          <button class="button1" onClick={handleCalculate}>
            =
          </button>
          <button class="button1" onClick={() => handleButtonClick("/")}>
            /
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
