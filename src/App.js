import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import "./styles.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import Transport from "./components/Transport";
import Spedition from "./components/Spedition";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/spedition" element={<Spedition />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
