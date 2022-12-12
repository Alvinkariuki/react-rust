import React from "react";
import ReactDOM from "react-dom";

const wasm = import("../build/react_rust_wasm");

wasm.then((wasm) => {
  const App = () => {
    return (
      <div>
        <h1>Hi There</h1>
        <button onClick={wasm.big_computation}>Run computation</button>
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
});
