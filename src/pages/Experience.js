import styled, { keyframes } from "styled-components";
import ArrowAnim from "./components/ArrowsLines.js";
import { Link } from "react-router-dom";
import RITC_LOGO from "../assets/images/ritc-logo-removebg.png";
import RITC_TEAM from "../assets/images/ritc_team.jpeg";
import CITADEL_LOGO from "../assets/images/citadel-logo.png";
import WQ_IQC_LOGO from "../assets/images/WQ_IQC_Logo.jpeg";
import IQC_PHOTO from "../assets/images/IMG_7057.PNG";
import WQ_BANNER from "../assets/images/WorldQuant-Logo-removebg-preview.png";
const ExperienceContainer = styled.div`
  width: 100%;
`;
const HeadingContainer = styled.div`
  align-self: center;
  width: auto;
  text-align: center;
  justify-content: center;
  height: auto;
  margin-bottom: 5vh;
`;
const Heading = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  letter-spacing: 2px;
  color: #374785;
  font-size: 5vmin;
`;
const SubHeading = styled.h3`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  letter-spacing: 2px;
  color: #374785;
`;
const SepLine = styled.div`
  width: 90%;
  height: 0.3mm;
  background-color: #374785;
  margin: auto;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

const JourneyContainer = styled.div`
  display: flex;
  height: 105em;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;
const SepLineVer = styled.div`
  height: 90%;
  width: 0.5mm;
  background-color: #dcdcdc;
`;
const LeftContainer = styled.div`
  width: 45%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
const LeftContentBox = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  //background-color: white;
  flex-direction: row;
`;
const RightContainer = styled(LeftContainer)``;
const RightContentBox = styled(LeftContentBox)``;
const LeftBox = styled.div`
  flex: 8;
  height: auto;
  padding-right: 5%;
  text-align: right;
  display: flex;
  flex-direction: column;
`;
const RightBox = styled(LeftBox)`
  padding-left: 5%;
  text-align: left;
`;

const Title = styled.a`
  width: auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  letter-spacing: 2px;
  color: #000;
  font-size: 2.5vmin;
  text-decoration: none;
`;
const TimeWindow = styled.div`
  width: auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  letter-spacing: 2px;
  color: #000;
  font-size: 2vmin;
`;
const Details = styled(TimeWindow)`
  margin-top: 3%;
  font-size: 14px;
`;
const ArrowContainer = {
  flex: 2,
  height: "auto",
};
const Img = styled.img`
  width: 25%;
  height: 20%;
  background-size: cover;
  display: block;
`;
const PhotoBox = styled.img`
  height: 90%;
  width: 80%;
  border-radius: 10px;
  border: 2px solid #66ffb2;
`;
const ImgStyledBox = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 5px;
  transition: transform 500ms ease;
  &:hover {
    transform: scale(1.1);
  }
`;

function Experience() {
  return (
    <ExperienceContainer>
      <HeadingContainer>
        <Heading>Experience</Heading>
        <SubHeading>
          “Protons give an atom its identity, electrons its personality.” <br />
          - Bill Bryson, A short history of nearly everything
        </SubHeading>
      </HeadingContainer>
      <SepLine></SepLine>
      <JourneyContainer>
        <LeftContainer>
          <LeftContentBox>
            <LeftBox>
              <Img style={{ alignSelf: "flex-end" }} src={CITADEL_LOGO}></Img>
              <Title
                href="https://github.com/styled-components/styled-components"
                target="_blank"
              >
                <h3 style={{ display: "inline" }}>Terminal</h3>/ West Coast
                Regional{" "}
              </Title>
              <TimeWindow>March 29th - April 5th</TimeWindow>
              <Details>
                Selected to compete in a AI e-sports tournament hosted by{" "}
                <strong>Correlation 1 & Citadel</strong>. Developing algo
                strategy to defeat the opponents
              </Details>
            </LeftBox>
            <div style={ArrowContainer}>
              <ArrowAnim rotate={true}></ArrowAnim>
            </div>
          </LeftContentBox>
          <LeftContentBox />
          <LeftContentBox>
            <LeftBox>
              <Title>
                <h3 style={{ margin: 0 }}>Quantitative Analyst Intern</h3>
                <a
                  href="https://www.rosetta-analytics.com/"
                  target="_blank"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  @ Rosetta Analytics
                </a>
              </Title>
              <TimeWindow>Novenber 2020 - January 2021</TimeWindow>
              <Details>
                Collaborated with the senior quant researcher to develop
                different portfolios, built various back-testing functions to
                validate different alpha models, and devise algorithms for
                processing over 200M+ of financial data
                <br />
              </Details>
            </LeftBox>
            <div style={ArrowContainer}>
              <ArrowAnim rotate={true}></ArrowAnim>
            </div>
          </LeftContentBox>
          <LeftContentBox />
          <LeftContentBox>
            <LeftBox>
              <Img style={{ alignSelf: "flex-end" }} src={WQ_BANNER}></Img>
              <Title>
                <h3 style={{ margin: 0 }}>Research Consultant</h3> @ WorldQuant
                LLC
              </Title>
              <TimeWindow>August 2019 - October 2020</TimeWindow>
              <Details>
                Optimized and improved different alpha strategies. Analyzed
                trading data across various asset classes and researched
                trending strategies during quant trainning session with senior
                qunat researcher
              </Details>
              <Title style={{ marginTop: "10px" }}>
                <h3 style={{ display: "inline" }}>IQC</h3> International Quant
                Championship
              </Title>
              <TimeWindow>March 29th - April 5th</TimeWindow>
              <Details>
                Led a team to compete and designed various trading strategy and
                Alpha-models with Python, finishing{" "}
                <strong>top 5 in Taiwan</strong>
                <br />
              </Details>

              <ImgStyledBox>
                <PhotoBox src={IQC_PHOTO} />
              </ImgStyledBox>
            </LeftBox>
            <div style={ArrowContainer}>
              <ArrowAnim rotate={true}></ArrowAnim>
            </div>
          </LeftContentBox>
        </LeftContainer>
        <SepLineVer></SepLineVer>
        <RightContainer>
          <RightContentBox />
          <RightContentBox>
            <div style={ArrowContainer}>
              <ArrowAnim rotate={false}></ArrowAnim>
            </div>
            <RightBox>
              <Img src={RITC_LOGO}></Img>
              <Title href="https://ritc.rotman.utoronto.ca/" target="_blank">
                <h3 style={{ display: "inline" }}>Rotman</h3> Internatinal
                Trading Competeting
              </Title>
              <TimeWindow> February 19th, 2021</TimeWindow>
              <Details>
                UCLA Anderson School Team Trader
                <br />
                Perform trading around the Rotman Interactive Trader (RIT)
                market simulator platform in three cases, BP commodity,
                liquidity and algorithm trading <br />
              </Details>

              <ImgStyledBox style={{ justifyContent: "flex-start" }}>
                <a
                  href="https://www.linkedin.com/posts/ucla-anderson-school-of-management_join-us-in-congratulating-ucla-andersons-activity-6773056734174040064-f1ib"
                  target="_blank"
                  style={{
                    width: "auto",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <PhotoBox src={RITC_TEAM}></PhotoBox>
                </a>
              </ImgStyledBox>
            </RightBox>
          </RightContentBox>
          <RightContentBox />
          <RightContentBox>
            <div style={ArrowContainer}>
              <ArrowAnim rotate={false}></ArrowAnim>
            </div>
            <RightBox>
              <Title>
                <h3 style={{ margin: 0 }}>Software Engineer</h3> @
                DragonCloud.ai
              </Title>
              <TimeWindow> April 2020 - July 2020</TimeWindow>
              <Details>
                Formulated Chatbot infrastructure of an AI-enabled English
                learning platform with AWS Lambda, Python and React-Native
              </Details>
              <Title
                style={{ marginTop: "5%" }}
                href="https://www.aptan.io/#/"
                target="_blank"
              >
                @ Aptan Inc
              </Title>
              <TimeWindow> Novenber 2019 - June 2020</TimeWindow>
              <Details>
                Constructed fin-tech platform incoorperated an HD Wallet
                (Hierarchical Deterministic), BIP 32 (Bitcoin Improvement
                Proposals) procedure, smart contract and token economy to
                established a cryptocurrency payment
              </Details>
            </RightBox>
          </RightContentBox>
        </RightContainer>
      </JourneyContainer>
    </ExperienceContainer>
  );
}

export default Experience;
