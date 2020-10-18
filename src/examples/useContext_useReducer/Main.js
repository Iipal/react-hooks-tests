import React from "react";
import { useAlert } from "./alert/AlertContext";

export default function Main() {
  const { show } = useAlert();

  return (
    <>
      <h1>Hello useContext</h1>
      <button onClick={() => show("This is main.js from")} className='btn btn-success'>
        Show alert
      </button>
    </>
  );
}
