import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function TextField() {
  //The count seems like the variable, the setCount changes the variable, the useState is the default value of count
  var [fruit, setFruit] = useState("");
  var [text, setText] = useState("");
  //It seems like the second parameter returns everything as the value of count

  //Make sure to make this have a function that returns something so we can see the text update in real time
  var setTextValue = event => {
    setText(event.target.value);
  };

  //When enter is pressed, set text to the value of fruit
  var onEnterPress = a => {
    if (a.key === "Enter") {
      setFruit(text);
      setText("");
    }
  };

  return (
    <div className="App">
      <div>{fruit}</div>
      <input
        type="text"
        placeholder="Type in the fruit"
        onKeyPress={onEnterPress}
        onChange={setTextValue}
        value={text}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TextField />, rootElement);
