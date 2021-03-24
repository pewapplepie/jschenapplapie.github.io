import logo from "./logo.svg";
import linkedin_icon from "./assets/linkedin_icon.png";
import github_icon from "./assets/github_icon.png";
import { SocialIcon } from "react-social-icons";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <strong>Jeffrey Chen</strong> | MFE @ UCLA | B.S Chemistry @ NTU
        </p>
      </header>
      <div class="App-trap-container">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <polygon points="0,5, 100,0 100,100 0,90"></polygon>
        </svg>
        <div class="App-trap-content">
          <p>
            Hi, I'm <b>Jer-Shen Chen</b>, aka <b>Jeffrey.</b>
          </p>
          <div class="App-trap-content-intro">
            <p>
              Finance + Programming + Math = Quantitative Finance <br/>
               I Love Quant Finance 
            </p>

            <p>
              I desire to combine financial knowledge with in-depth data
              analysis and machine learning technique to surface impactful
              insight and facilitate sound-making financial decisions
            </p>
          </div>
        </div>
      </div>
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
      </div>
    </div>
  );
}

export default App;
