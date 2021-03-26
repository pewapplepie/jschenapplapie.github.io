import { SocialIcon } from "react-social-icons";
import Intro from "./pages/IntroPage.js";
// import FAMAMB from "./pages/projects/FamaMB.js";
import EvtStudy from "./pages/projects/EvtStudy.js";
import IntroTrap from "./pages/IntroTrap.js";
import Header from "./pages/Header.js";
import Experience from "./pages/Experience.js";
import styled from "styled-components";
import Contact from "./pages/Contact.js"
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const AppDiv = styled.div`
  //text-align: center;
  background-color: #f7f4e8; //#FAF4DD;//#E3E2DF;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    // <AppDiv>
    <div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects-evtstudy">
          <EvtStudy />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    // </AppDiv>
  );
}
function Home() {
  return (
    <AppDiv>
      <Header></Header>
      <IntroTrap />
      <Experience></Experience>
      <Contact></Contact>
    </AppDiv>
  );
}

function About() {
  return (
    <div>
      <h1>
        AboutAboutAboutAboutAboutAbout AboutAboutAboutAboutAboutAboutAbout
      </h1>
    </div>
  );
}
export default App;
