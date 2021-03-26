import styled, { keyframes } from "styled-components";
import myprofile_pic from "../assets/mypic.jpg";
import { SocialIcon } from "react-social-icons";

const TrapContainer = styled.div`
  position: relative;
  height: 120em;
  display: flex;
`;
const SvgContainer = {
  position: "absolute",
  fill: "#7da4ce",
  width: "100%",
  height: "100%",
};

const Contents = styled.div`
  display: block;
  position: relative;
  top: 7%;
  height: 80%;
  width: 100%;
  bottom: 10%;
  flex-direction: column;
  padding-top: 5%;
`;
const Content_top = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
const Content_h1 = styled.div`
  align-self: flex-start;
  font-size: calc(5px + 3vmin);
  font-family: Merriweather;
  letter-spacing: 3px;
  color: white;
  padding-left: 3vh;
`;

const Profile_Pic_Container = styled.div`
  position: relative;
  width: 25vh;
  height: 25vh;
  border-radius: 50%;
  overflow: hidden;
  border-width: thick;
  border-color: #c0c0c0;
  border-style: solid;
  touch-action: none;
  -ms-touch-action: none;
`;
const Profile_Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  transition: transform 500ms ease;
  :hover& {
    transform: scale(1.25);
  }
  touch-action: none;
  -ms-touch-action: none;
`;
const Content_Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 30%;
`;

const Content_Motto = styled.div`
  font-size: calc(10px + 2vmin);
  font-family: Merriweather;
  letter-spacing: 2px;
  line-height: 1cm;
  color: white;
`;

const Blink_wrapper = styled.div`
  display: inline-block;
  padding-left: 10px;
  animation: ${blinkingEffect} 1.1s linear infinite;
`;

const Content_Intro = styled.div`
  display: flex;
  height: 70%;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 5vh;
`;

const Intro_p1 = styled.div`
  width: 40%;
  height: 80%;
  padding: 3%;
  color: white;
  font-family: Merriweather;
  font-size: calc(4px + 2vmin);
  letter-spacing: 1px;
  line-height: 1cm;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;
const Intro_p2 = styled(Intro_p1)``;

const Intro_title = styled.h2`
  margin: auto;
  width: 100%;
  height: auto;
`;
const Intro_title2 = styled(Intro_title)``;

const hyperstyle = {
  display: "inline-block",
  color: "#202020",
  fontFamily: "Merriweather",
  fontWeight: "bold",
};

function blinkingEffect() {
  return keyframes`
      50% {
        opacity: 0;
      }
    `;
}

function IntroTrap() {
  return (
    <TrapContainer>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={SvgContainer}
      >
        <polygon points="0,5, 100,0 100,100 0,90"></polygon>
      </svg>
      <Contents>
        <Content_top>
          <Content_h1>
            Hi, I'm <b>Jer-Shen Chen</b>, aka <b>Jeffrey.</b>
          </Content_h1>

          <Profile_Pic_Container>
            <Profile_Img src={myprofile_pic} />
          </Profile_Pic_Container>

          <Content_Social>
            <SocialIcon
              url="https://www.linkedin.com/in/jeffrey-chen-537155173/"
              target="_blank"
            />
            <SocialIcon url="https://github.com/pewapplepie" target="_blank" />
          </Content_Social>
          <Content_Motto>
            I love Finance & Programming
            <Blink_wrapper> _ </Blink_wrapper>
          </Content_Motto>
        </Content_top>
        <Content_Intro>
          <Intro_p1>
            <Intro_title>My Bio ..</Intro_title>
            I from a small city called Hsinchu, aka the Silicon Valley in
            Taiwan. (Home of Semiconductor eg TSMC <p />
            I'm currently a Master student at UCLA Anderson School of Management
            with a B.S. in Chemistry at NTU <p />
            My passion in quant finance is driven by my desire to combine
            financial knowledge with in-depth data analysis and machine learning
            technique to surface impactful insight and facilitate sound-making
            decisions among various business strategies <p />I also enjoys world
            travel, and has visited over 20+ countries across four continents.
          </Intro_p1>
          <Intro_p2>
            <Intro_title2>About .. </Intro_title2>
            Jeffrey is a MFE candidate at UCLA Anderson School of Management.
            His course projects across different topics within empirical
            analysis, derivatives, fixed income, investment and financial
            decision making.
            <p />
            Previously, Jeffrey was an Quantitative Analyst Intern at{" "}
            <a
              style={hyperstyle}
              href="https://www.rosetta-analytics.com/"
              target="_blank"
            >
              Rosetta Analytics
            </a>{" "}
            ,where as an analyst he covered time series analysis, systematic
            backtesting and construction on different portfolios.
            <p />
            Over the year of 2019, Jeffrey competed in International Quant
            Championship hosted by the WorldQuant LLC and made into natioanl top
            5. <p />
            Prior to entering Finance, Jeffrey worked as an Undergraduate
            Researcher under{""}
            <a
              href="https://cchlabblog.wordpress.com/"
              style={hyperstyle}
              target="_blank"
            >
              Cheng-Chih Hsu Research Group
            </a>{" "}
            for Prof. Hsu within the Analytical Chemistry area, specializing in
            Mass Spectrometry (MALDI) and Bioinformation data analysis.
            <p />
            Jeffrey's experiences included AI-driven investment management
            firms, global leading hedge fund, academia science research, and the
            software industry.
          </Intro_p2>
        </Content_Intro>
      </Contents>
    </TrapContainer>
  );
}

export default IntroTrap;
