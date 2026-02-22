import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Please enter valid numbers");
      return;
    }

    let output;

    switch (operation) {
      case "add":
        output = number1 + number2;
        break;
      case "sub":
        output = number1 - number2;
        break;
      case "mul":
        output = number1 * number2;
        break;
      case "div":
        if (number2 === 0) {
          setResult("Cannot divide by zero");
          return;
        }
        output = number1 / number2;
        break;
      default:
        return;
    }

    setResult("Result: " + output);
  };

  return (
    <div style={styles.container}>
      <h2>React Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={styles.input}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={styles.input}
      />

      <div style={styles.buttonContainer}>
        <button onClick={() => calculate("add")}>+</button>
        <button onClick={() => calculate("sub")}>-</button>
        <button onClick={() => calculate("mul")}>*</button>
        <button onClick={() => calculate("div")}>/</button>
      </div>

      <div style={styles.result}>{result}</div>
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "100px auto",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  },
  input: {
    width: "90%",
    padding: "8px",
    margin: "8px 0"
  },
  buttonContainer: {
    marginTop: "10px"
  },
  result: {
    marginTop: "15px",
    fontWeight: "bold"
  }
};


export default App;
