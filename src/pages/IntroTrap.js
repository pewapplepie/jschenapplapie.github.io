import styled, { keyframes } from "styled-components";
import { SocialIcon } from "react-social-icons";
import myprofile_pic from "../assets/mypic.jpg";

const TrapContainer = styled.div`
  position: relative;
  height: 140em;
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
const Content_Top = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: auto;
  /* overflow: hidden; */
`;
const Content_h1 = styled.div`
  align-self: flex-start;
  font-size: calc(5px + 3vmin);
  font-family: Merriweather;
  letter-spacing: 3px;
  color: white;
  padding-left: 3vh;
`;

const Profile_Img = styled.img`
  display: block;
  width: 104%;
  height: 104%;
  margin: -2% auto auto -2%; 
  // border-radius: 50%;
  transition: transform 500ms ease;
  // background-size: cover;
  z-Index: -1;
`;

const Profile_Pic_Container = styled.div`
  position: relative;
  width: 25vh;
  height: 25vh;
  border-radius: 50%;
  overflow: hidden;
  border-width: 5px;
  border-color: #c0c0c0;
  border-style: solid;
  // touch-action: none;
  // -ms-touch-action: none;
  // transition: transform 500ms ease;
  &:hover {
    border-color: #99ffff;
  }
  &:hover {
    ${Profile_Img} {
      transform: scale(1.25);
      -ms-touch-action: none;
      touch-action: none;
    }
  }
`;

const Content_Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 30%;
`;

const IconBox = styled.div`
  width: auto;
  height: auto;
  transition: transform 500ms ease;
  &:hover {
    transform: scale(1.15);
  }
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
  animation: ${blinkingEffect} 1.5s linear infinite;
`;

const Blink_wrapper2 = styled.div`
  display: inline-block;
  padding-left: 10px;
  animation: ${blinkingEffect2} 2s linear infinite;
`;
const Blink_wrapper3 = styled(Blink_wrapper2)`
  padding-left: 0px;
  animation-delay: 0.5s;
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
  color: "#374785",
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

function blinkingEffect2() {
  return keyframes`
      0% {
        opacity: 1;
      }
      90% {
        opacity: 0;
      }
      100% {
        opacity: 1;
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
        <Content_Top>
          <Content_h1>
            Hi, I'm <b>Jeffrey</b>
          </Content_h1>

          <Profile_Pic_Container>
            <Profile_Img src={myprofile_pic} />
          </Profile_Pic_Container>

          <Content_Social>
            <IconBox>
              <SocialIcon
                url="https://www.linkedin.com/in/jeffrey-chen-537155173/"
                target="_blank"
              />
            </IconBox>
            <IconBox>
              <SocialIcon
                url="https://github.com/pewapplepie"
                target="_blank"
              />
            </IconBox>
          </Content_Social>
          <Content_Motto>
            a Financial Engineer & a Programmer
            <Blink_wrapper> _ </Blink_wrapper>
          </Content_Motto>
        </Content_Top>
        <Content_Intro>
          <Intro_p1>
            <Intro_title>
              Facts about me <Blink_wrapper2>. </Blink_wrapper2>{" "}
              <Blink_wrapper3>.</Blink_wrapper3>
            </Intro_title>
            <br />
            I from Hsinchu City, Taiwan. <br />
            Also know as Silicon Valley in Taiwan/ Home of Semiconductor <p />
            I'm currently a Master student at UCLA Anderson School of Management
            with a B.S. in Chemistry at National Taiwan University <p />
            My passion in quant finance is driven by my desire to combine
            financial knowledge with in-depth data analysis and machine learning
            technique to surface impactful insight and facilitate sound-making
            decisions among various business strategies <p />I also enjoys
            traveling, and already visited over 20+ countries across four
            continents. <p />
            I'm adventurous and constantly want to learn new thing <p />
            
          </Intro_p1>
          <Intro_p2>
            <Intro_title2>
              Introduction <Blink_wrapper2>. </Blink_wrapper2>{" "}
              <Blink_wrapper3> .</Blink_wrapper3>
            </Intro_title2>
            <br />
            Jeffrey is a MFE candidate at UCLA Anderson School of Management,
            class of 2021.
            <br />
            His course projects across different topics including Machine Learning, Statistical Arbitrage, 
            Quantitative Assets Management, Empirical Methods, Derivatives,
            Fixed Income, Investment and Econometrics.
            <p />
            Jeffrey is a Quant Research Summer Associate of Derivative Strats Team at <a style={hyperstyle} href="https://www.cboe.com/"> Cboe Global Market </a>. 
            At Cboe Global Market Derivative Strats Team, he
            delivered significant usage for product production, helped the team transform ideas into new products and
            analyze various option trading strategies associated with derivative
            products to improve the efficiency of the markets. <p/>

            Prior to Cboe, Jeffrey was a Quantitative Analyst Intern at{" "}
            <a
              style={hyperstyle}
              href="https://www.rosetta-analytics.com/"
              target="_blank"
            >
              Rosetta Analytics
            </a>{" "}
            . He covered time series analysis, systematic backtestings, and construction on different portfolios. <p/>
            Over the year of 2019, Jeffrey competed in International Quant Championship hosted by the WorldQuant LLC and made into the national top 5.<p />
            Before Finance, Jeffrey studied Chemistry and worked as an
            Undergraduate Researcher under{""}
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
            Jeffrey's experiences include financial service firms, global leading hedge fund, academia science research, and the software industry. 
            Jeffrey helps drive the quantitative value with an innovative mindset. 
          </Intro_p2>
        </Content_Intro>
      </Contents>
    </TrapContainer>
  );
}

export default IntroTrap;
