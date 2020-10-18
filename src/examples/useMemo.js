import React, { useState, useEffect, useMemo } from "react";

function complexCompute(num) {
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2 + i;
}

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const computed = useMemo(() => complexCompute(number), [number]);

  const styles = useMemo(
    () => ({
      color: colored ? "darkred" : "black",
    }),
    [colored]
  );

  useEffect(() => {
    console.log("Style changed");
  }, [styles]);

  return (
    <div className="App">
      <h1>Calc num: {number}</h1>
      <h1>Calc num: {computed}</h1>
      <h3 style={styles}>Colored: {colored}</h3>
      <button
        className="btn btn-success"
        onClick={() => setNumber((prev) => prev + 1)}>
        Add
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setNumber((prev) => prev - 1)}>
        Sub
      </button>
      <button
        className="btn btn-warning"
        onClick={() => setColored((prev) => !prev)}>
        Change
      </button>
    </div>
  );
}

export default App;
