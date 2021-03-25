import { SocialIcon } from "react-social-icons";
import Intro from "./pages/IntroPage.js";
import IntroTrap from "./pages/IntroTrap.js";
import styled from "styled-components";
import "./App.css";

const AppDiv = styled.div`
  //text-align: center;
  background-color: #d7e0f1;
`;

function App() {
  return (
    <AppDiv>
      <header className="App-header">
        <p>
          <strong>Jeffrey Chen</strong> | MFE @ UCLA | B.S Chemistry @ NTU
        </p>
      </header>
      <IntroTrap></IntroTrap>
      <div className="App-intro">
        <div className="App-intro-more">
          <p>More about me at</p>
          <div className="App-intro-dash">_</div>
        </div>
        <div className="App-img-container">
          <div className="App-img">
            <SocialIcon url="https://www.linkedin.com/in/jeffrey-chen-537155173/" />
            <SocialIcon url="https://github.com/pewapplepie" />
          </div>
        </div>
      </div>
      <div className="Blog-Post-Container">
        course work will be updated below
        <Intro></Intro>
      </div>
    </AppDiv>
  );
}

export default App;
