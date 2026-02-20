import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// Calculator Component
function Calculator() {
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

// TodoApp Component
function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() === "") {
      alert("Please enter a task");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: inputValue,
    };

    // Add task and sort in ascending order
    const updatedTasks = [...tasks, newTask].sort((a, b) =>
      a.text.localeCompare(b.text)
    );

    setTasks(updatedTasks);
    setInputValue(""); // Clear input field
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px" }}>
      <h1>Todo List</h1>

      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{
            flex: 1,
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <p style={{ textAlign: "center", color: "#999" }}>
          No tasks yet. Add one to get started!
        </p>
      ) : (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
          }}
        >
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px",
                margin: "8px 0",
                backgroundColor: "#f9f9f9",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            >
              <span>{task.text}</span>
              <button
                onClick={() => deleteTask(task.id)}
                style={{
                  padding: "6px 12px",
                  fontSize: "14px",
                  cursor: "pointer",
                  borderRadius: "4px",
                  border: "none",
                  backgroundColor: "#f44336",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {tasks.length > 0 && (
        <p style={{ textAlign: "center", marginTop: "20px", color: "#666" }}>
          Total tasks: {tasks.length}
        </p>
      )}
    </div>
  );
}

// Main App Component with Navigation
function MainApp() {
  const [currentApp, setCurrentApp] = useState("calculator");

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#333",
          color: "white",
        }}
      >
        <h1 style={{ margin: "0 0 20px 0" }}>React Apps</h1>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button
            onClick={() => setCurrentApp("calculator")}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "4px",
              border: "none",
              backgroundColor:
                currentApp === "calculator" ? "#4CAF50" : "#666",
              color: "white",
              fontWeight: "bold",
              transition: "background-color 0.3s",
            }}
          >
            Calculator
          </button>
          <button
            onClick={() => setCurrentApp("todo")}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "4px",
              border: "none",
              backgroundColor: currentApp === "todo" ? "#4CAF50" : "#666",
              color: "white",
              fontWeight: "bold",
              transition: "background-color 0.3s",
            }}
          >
            Todo List
          </button>
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        {currentApp === "calculator" ? <Calculator /> : <TodoApp />}
      </div>
    </div>
  );
}

// Styles for Calculator
const styles = {
  container: {
    width: "300px",
    margin: "100px auto",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#f0f0f0"
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

export default MainApp;
