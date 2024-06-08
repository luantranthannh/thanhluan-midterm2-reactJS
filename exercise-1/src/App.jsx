import React from "react";
import { useState } from "react";
function App() {
  const [isRaining, setIsRaining] = useState(true);
  function onSunClick() {
    setIsRaining(false);
  }

  function onRainClick() {
    setIsRaining(true);
  }

  function getTitle() {
    return isRaining ? 'Raining time' : 'Sunny time';
  }

  function getBackgroundColor() {
    return isRaining? 'rainy' :'sunny';
  }
 
  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
