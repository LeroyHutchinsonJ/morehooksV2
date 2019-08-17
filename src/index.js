import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, countIncrease] = useState(0);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => countIncrease(count + 1)}>Click Me</button>
      <div>Blahblah</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
