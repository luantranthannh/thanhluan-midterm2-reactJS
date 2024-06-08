import React from "react";
import { useState } from "react";
function App() {
  /* You will need to use a boolean state to keep the value of the text entered */
  const [text, setText ] = useState("");
  /* You will need a function to handle a key pressed on the first input and update the state*/
  function handleToUpperCase(event) {
    setText(event.target.value.toUpperCase());
  }
  
  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input type="text" onChange={(e) => handleToUpperCase(e)} />
      <p>
        <label>Here is the text in upper case</label>
        <input value={text} disabled />
      </p>
    </main>
  );
}

export default App;
