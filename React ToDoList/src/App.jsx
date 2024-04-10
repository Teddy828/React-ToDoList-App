import { useState, useEffect } from "react";
import React from "react";
import ToDoList from "./ToDoList.jsx";
import "./index.css";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("The text has been changed");
  }, [text]);

  return <ToDoList />;
}

export default App;
