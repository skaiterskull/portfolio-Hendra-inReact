import "./App.css";

import { Hero } from "./components/hero/Hero";
import { Skill } from "./components/sections/skill/Skill";

import "bootstrap/dist/css/bootstrap.min.css";
import { Project } from "./components/sections/project/Project";
import { About } from "./components/sections/about/About";
import { Footer } from "./components/sections/footer/Footer";
import { Contact } from "./components/contact/Contact";

function App() {
  return (
    <div>
      <Hero />
      <Skill />
      <Project />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
