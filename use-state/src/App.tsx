import { useState } from "react";
import "./App.css";

function Button() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>clicked {count} times</button>;
}

function App() {
  return (
    <>
      <Button />
      <Button />
    </>
  );
}

export default App;
