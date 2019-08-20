import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  //The count seems like the variable, the setCount changes the variable, the useState is the default value of count
  var [fruit, setFruit] = useState("");
  //It seems like the second parameter returns everything as the value of count

  var text = "";
  var setText = event => {
    text = event.target.value;
  };

  //When enter is pressed, set text to the value of fruit
  var onEnterPress = a => {
    if (a.key === "Enter") {
      setFruit(text);
      text = "";
    }
  };

  return (
    <div className="App">
      <div>{fruit}</div>
      <input
        type="text"
        placeholder="Type in the fruit"
        onKeyPress={onEnterPress}
        onChange={setText}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
