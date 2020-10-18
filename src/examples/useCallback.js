import React, { useState, useEffect, useMemo, useCallback } from "react";
import ItemsList from "./ItemsList";

function App() {
  const [count, setCount] = useState(1);
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? "darkred" : "black",
  };

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill("").map((_, i) => `Element ${i + 1}`);
  }, [count]);

  return (
    <div className='App'>
      <h1 style={styles}>Count: {count}</h1>
      <button className='btn btn-success' onClick={() => setCount((prev) => prev + 1)}>
        Add
      </button>
      <button className='btn btn-warning' onClick={() => setColored((prev) => !prev)}>
        Change
      </button>

      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
}

export default App;
