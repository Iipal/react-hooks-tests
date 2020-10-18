import React, { useEffect, useState } from "react";

function useLogger(value) {
  useEffect(() => {
    console.log("value", value);
  }, [value]);
}

function useInput(initValue) {
  const [value, setValue] = useState(initValue);
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const clear = () => setValue("");

  return {
    bind: { value, onChange },
    value,
    clear,
  };
}

function App() {
  const firtName = useInput("");

  useLogger(firtName.value);

  return (
    <div className='container pt-3'>
      <input type='text' {...firtName.bind} />
      <hr />
      <h1>{firtName.value}</h1>
      <button className='btn btn-warning' onClick={() => firtName.clear()}>
        Clear
      </button>
    </div>
  );
}

export default App;
