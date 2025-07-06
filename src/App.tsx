import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/index";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
