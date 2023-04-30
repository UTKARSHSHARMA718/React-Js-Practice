import "./App.css";
import React, { useState } from "react";
import Counter from "./Counter";

function App() {
  const [open, setOpen] = useState(false);
  const [count, setCounter] = useState(0);
  const handleCount = () => {
    setCounter(count + 1);
  };
  const showCounter  =()=>{
    setOpen(~open);
  }
  return (
    <div className="App">
      <button onClick={showCounter}>Toggle Counter</button>
      {open ? <Counter count={count} countSetter={handleCount} /> :""}
    </div>
  );
}


export default App;
