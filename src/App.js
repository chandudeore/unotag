import "./App.css";
import { Routes, Route } from "react-router-dom";
import View from "./components/View";
import Create from "./components/Create";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      {/* Creting two buttons for starting page */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/view" element={<View />}></Route>
        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </div>
  );
}

export default App;
