import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./components/Home";
import Skills from "./components/Skills";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Works from "./components/Works";
import Contact from "./components/Contact";
// import About from "./components/About";
import Certifications from "./components/Certifications";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <NavBar />
      <Home />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Works />
      <Certifications />
      <Contact />
    </>
  );
}

export default App;
