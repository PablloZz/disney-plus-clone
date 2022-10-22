import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import {Routes, Route} from "react-router-dom"
import Detail from "./components/Detail";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
