import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Ticolancer from "./pages/Ticolancer.jsx";
import Jint from "./pages/Jint.jsx";
import Contact from "./pages/Contact.jsx";
import Bento from "./pages/Bento.jsx";

function AppLayout() {
  const location = useLocation();
  const isBento = location.pathname === "/" || location.pathname === "/bento";

  return (
    <>
      {!isBento && (
        <div className="w-full flex justify-center">
          <Navbar />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Bento />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bento" element={<Bento />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/ticolancer" element={<Ticolancer />} />
        <Route path="/jint" element={<Jint />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!isBento && <Footer />}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <AppLayout />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
