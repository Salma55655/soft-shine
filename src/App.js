import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Facts from "./components/Facts/Facts";
import Works from "./components/Works/Works";
import TemplatesPrev from "./components/TemplatesPrev/TemplatesPrev";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context.js";
import './fontawesome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx"
import Pricing from "./pages/price.jsx"


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#0f172a" : "",
        color: darkMode ? "white" : "",
      }}
    >
      {/* <Navbar />
      <Intro />
      <TemplatesPrev />
      <Works />
      <Services />
      <Facts />
      <Contact />
      <Footer /> */}
      <BrowserRouter>
        <Routes>
            <Route index  path="/"element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />

        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
