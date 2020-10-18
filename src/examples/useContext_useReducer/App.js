import React, { useState, useEffect, useMemo, useCallback, createContext } from "react";
import Alert from "./alert/Alert";
import { AlertProvider } from "./alert/AlertContext";
import Main from "./Main";

function App() {
  return (
    <AlertProvider>
      <div className='App container pt-3'>
        <Main />
        <Alert />
      </div>
    </AlertProvider>
  );
}

export default App;
