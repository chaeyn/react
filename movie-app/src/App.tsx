import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:paramId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
