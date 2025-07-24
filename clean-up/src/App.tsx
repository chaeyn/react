import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("hello :)");
    return () => console.log("bye :(");
  }, []);
  return <div>Hello, World!</div>;
}

function App() {
  const [showing, setShowing] = useState(true);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <>
      {showing && <Hello />}
      <button onClick={onClick}>{showing ? "Hide" : "Show"} Hello</button>
    </>
  );
}

export default App;
