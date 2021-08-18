import "./App.css";

import { Hero } from "./components/hero/Hero";
import { Skill } from "./components/sections/skill/Skill";

import "bootstrap/dist/css/bootstrap.min.css";
import { Project } from "./components/sections/project/Project";

function App() {
  return (
    <div>
      <Hero />
      <Skill />
      <Project />
    </div>
  );
}

export default App;
