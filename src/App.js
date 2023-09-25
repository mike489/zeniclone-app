import { Route, Routes } from "react-router";
import "./App.css";
import Homepage from "./page/Home/homepage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
