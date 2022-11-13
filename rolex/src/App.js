import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Collection from "./components/Collection";
import Furniture from "./components/Furniture";
import Store from "./components/Store";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Navbar title="Dec-furniture"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/furniture" element={<Furniture />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/collection" element={<Collection />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;