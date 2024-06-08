import React from "react";
import { useState } from "react";
function App() {
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  function onA(e) {
    const value = e.target.value;
    setValueA(value);
  }

  function onB(e) {
    const value = e.target.value;
    setValueB(value);
  }

  function onCompute() {
    const numA = parseFloat(valueA);
    const numB = parseFloat(valueB);
    if (isNaN(numA) || isNaN(numB)) {
      setError(true);
      setResult("A and B shall be numbers!");
    } else {
      setError(false);
      setResult(numA + numB);
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      <input
        disabled
        value={result}
        style={{ color: error ? "red" : "black" }}
      />
      <button onClick={onCompute}>Compute</button>
    </main>
  );
}

export default App;
