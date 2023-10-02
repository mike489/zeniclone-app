import { Route, Routes } from "react-router";
import "./App.css";
import Homepage from "./page/Home/homepage";
import Error from "./page/error/Error";

import ProductDetail from "./page/details/productDetai";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog/details/:id" element={<ProductDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
