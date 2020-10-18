import React, { useState } from "react";

function computeInitCounter() {
  console.log("Some calcs...");
  return Math.trunc(Math.random() * 20);
}

function App() {
  // const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState(computeInitCounter());
  const [counter, setCounter] = useState(() => computeInitCounter());

  const [state, setState] = useState({
    title: "Counter",
    date: Date.now(),
  });

  function updateTitle() {
    setState((prev) => {
      return { ...prev, title: "New title" };
    });
  }

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-success">
        Increment
      </button>
      <button
        onClick={() => setCounter(counter - 1)}
        className="btn btn-danger">
        Decrement
      </button>
      <button onClick={updateTitle} className="btn btn-default">
        Change Title
      </button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
