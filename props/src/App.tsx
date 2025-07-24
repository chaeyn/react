import { memo, useState } from "react";

type PropsType = {
  changeValue?: () => void;
  children?: React.ReactNode;
  text?: string;
};

function Btn({ changeValue, text }: PropsType) {
  console.log(text, "was rendered");
  return (
    <button
      onClick={changeValue}
      style={{ backgroundColor: "blue", color: "white", cursor: "pointer" }}
    >
      {text}
    </button>
  );
}

const MemorisedBtn = memo(Btn);

function App() {
  const [value, setValue] = useState("Start Value");
  const changeValue = () => setValue("Changed Value");
  return (
    <>
      <MemorisedBtn text={value} changeValue={changeValue} />
      <MemorisedBtn text="Continue" />
    </>
  );
}

export default App;
