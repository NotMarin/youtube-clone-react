import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/watch/:id " element={<Watch />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
