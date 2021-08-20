import "./App.css";

import { useState } from "react";
import { Hero } from "./components/hero/Hero";
import { Skill } from "./components/sections/skill/Skill";
import "bootstrap/dist/css/bootstrap.min.css";
import { Project } from "./components/sections/project/Project";
import { About } from "./components/sections/about/About";
import { Footer } from "./components/sections/footer/Footer";
import { Contact } from "./components/contact/Contact";
import { ScrollUpButton } from "./components/scrollUpButton/ScrollUpButton";

function App() {
  const [upBtn, setUpBtn] = useState("hidden");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 600) {
      setUpBtn("visible");
    } else {
      setUpBtn("false");
    }
  });
  return (
    <div>
      <Hero />
      <Skill />
      <Project />
      <About />
      <Contact />
      <Footer />
      {upBtn == "visible" && <ScrollUpButton page="#hero" />}
    </div>
  );
}

export default App;
