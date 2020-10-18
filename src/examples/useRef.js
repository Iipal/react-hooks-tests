import { render } from "@testing-library/react";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [value, setValue] = useState("init");
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef("");

  const focus = () => inputRef.current.focus();

  useEffect(() => {
    renderCount.current++;
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div className="App">
      <h1>Render count: {renderCount.current}</h1>
      <h2>Value: {value}</h2>
      <h2>prevValue: {prevValue.current}</h2>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="btn btn-success" onClick={focus}>
        Focus buton
      </button>
    </div>
  );
}

export default App;
