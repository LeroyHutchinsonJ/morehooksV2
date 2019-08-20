import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  //The count seems like the variable, the setCount changes the variable, the useState is the default value of count
  var [count, setCount] = useState(0);

  //It seems like the second parameter returns everything as the value of count
  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Hello</button>
      <div>Blahblah</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
