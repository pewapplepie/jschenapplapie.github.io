import { SocialIcon } from "react-social-icons";
import Intro from "./pages/IntroPage.js";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

// components
// import FAMAMB from "./pages/projects/FamaMB.js";
// import EvtStudy from "./pages/projects/EvtStudy.js";
import HomePage from "./pages/HomePage.js";

function App() {
  return (
    // <AppDiv>
    <div>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
    // </AppDiv>
  );
}

export default App;
