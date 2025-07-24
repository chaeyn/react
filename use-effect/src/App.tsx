import { useEffect, useState } from "react";

interface EventType {
  target: { value: string };
}

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event: EventType) => setKeyword(event.target.value);
  console.log("I run all the time");
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when keyword changes", keyword);
    }
  }, [keyword]);
  return (
    <>
      <input
        onChange={onChange}
        type="text"
        placeholder="Search here..."
        value={keyword}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </>
  );
}

export default App;
