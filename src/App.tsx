import React from "react";
import ReactLogo from "./react-logo.svg";
import BabylonLogo from "./babylon-logo.svg";
import "./App.css";
import BabylonCanvas from "./babylon/BabylonCanvas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React BabylonJS Demo</h1>
        <div>
          <img src={ReactLogo} className="App-logo" alt="logo" />
          <img src={BabylonLogo} className="App-logo" alt="logo" />
        </div>
      </header>
      <BabylonCanvas />
    </div>
  );
}

export default App;
