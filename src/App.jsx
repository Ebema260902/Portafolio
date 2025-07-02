import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
// import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Ticolancer from "./pages/Ticolancer.jsx";
import Jint from "./pages/Jint.jsx";
import Kimchis from "./pages/Kimchis.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="w-full flex justify-center">
        <Navbar />
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/ticolancer" element={<Ticolancer />} />
        <Route path="/jint" element={<Jint />} />
        <Route path="/kimchis" element={<Kimchis />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;