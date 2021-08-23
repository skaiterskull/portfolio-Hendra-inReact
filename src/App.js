import "./App.css";
import { useState } from "react";
import { Hero } from "./components/hero/Hero";
import { Skill } from "./components/sections/skill/Skill";
import "bootstrap/dist/css/bootstrap.min.css";
import { Project } from "./components/sections/project/Project";
import { About } from "./components/sections/about/About";
import { ScrollUpButton } from "./components/scrollUpButton/ScrollUpButton";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DefaultLayout } from "./components/layout/DefaultLayout";

function App() {
  const [upBtn, setUpBtn] = useState("hidden");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 600) {
      setUpBtn("visible");
    } else {
      setUpBtn("false");
    }
  });
  // const handleOnBtnUpClicked = () => {};

  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path="/skills"
            children={<DefaultLayout children={<Skill />}></DefaultLayout>}
          ></Route>
          <Route
            exact
            path="/projects"
            children={<DefaultLayout children={<Project />}></DefaultLayout>}
          ></Route>
          <Route
            exact
            path="/about"
            children={<DefaultLayout children={<About />}></DefaultLayout>}
          ></Route>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route path="/">
            <h1>404 Page not found</h1>
          </Route>
        </Switch>
      </Router>
      {/* {upBtn == "visible" && (
        <ScrollUpButton handleOnBtnUpClicked={handleOnBtnUpClicked} />
      )} */}
    </div>
  );
}

export default App;
