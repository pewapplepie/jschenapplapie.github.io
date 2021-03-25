import { SocialIcon } from "react-social-icons";
import Intro from "./pages/IntroPage.js";
import IntroTrap from "./pages/IntroTrap.js";
import Header from "./pages/Header.js";
import Experience from "./pages/Experience.js";
import styled from "styled-components";
import "./App.css";

const AppDiv = styled.div`
  //text-align: center;
  background-color: #d7e0f1;  
  display:flex;
  flex-direction:column;
`;

function App() {
  return (
    <AppDiv>
      <Header></Header>
      <IntroTrap></IntroTrap>
      <Experience></Experience>
      <div className="Blog-Post-Container">
        course work will be updated below
        
      </div>
    </AppDiv>
  );
}

export default App;
