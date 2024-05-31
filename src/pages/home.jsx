import Navbar from "../components/Navbar/Navbar";
import Intro from "../components/Intro/Intro";
import Services from "../components/Services/Services";
import Facts from "../components/Facts/Facts";
import Works from "../components/Works/Works";
import TemplatesPrev from "../components/TemplatesPrev/TemplatesPrev";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "../Context";
// import './fontawesome';


function Home() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        background: darkMode ? "#0f172a" : "",
        color: darkMode ? "white" : "",
      }}
      className="px-14 py-2"
    >
      <Navbar />
      <Intro />
      <TemplatesPrev />
      <Works />
      <Services />
      <Facts />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
