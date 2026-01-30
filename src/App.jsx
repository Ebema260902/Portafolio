import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Ticolancer from "./pages/Ticolancer.jsx";
import Jint from "./pages/Jint.jsx";
import Kimchis from "./pages/Kimchis.jsx";
import Contact from "./pages/Contact.jsx";
import AgueroArtesanal from "./pages/AgüeroArtesanal.jsx"; 

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
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
            <Route path="/agueroartesanal" element={<AgueroArtesanal />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;