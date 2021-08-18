import styled, { keyframes } from "styled-components";
import ArrowAnim from "./components/ArrowsLines.js";
import { Link } from "react-router-dom";
import RITC_LOGO from "../assets/images/ritc-logo-removebg.png";
import RITC_TEAM from "../assets/images/ritc_team.jpeg";
import CITADEL_LOGO from "../assets/images/citadel-logo.png";
import DATAOPEN_LOGO from "../assets/images/data-open-logo.jpeg";
import IQC_PHOTO from "../assets/images/IMG_7057.PNG";
import WQ_BANNER from "../assets/images/WorldQuant-Logo-removebg-preview.png";
import CBOE_IMG from "../assets/images/Cboe_Global_Markets_Logo.png";

const ExperienceContainer = styled.div`
  width: 100%;
  margin-bottom: 15%;
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
  height: 120em;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;
const SepLineVer = styled.div`
  height: 100%;
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
  margin-top: 3%;
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
  margin-bottom: 5px;
`;

function Experience({ reference, click }) {
  return (
    <ExperienceContainer ref={reference}>
      <HeadingContainer>
        <Heading>Experience</Heading>
        <SubHeading>
          “Without a GOAL, you can't SCORE”
          <br />
        </SubHeading>
      </HeadingContainer>
      <SepLine></SepLine>
      <JourneyContainer>
        {/* Left Experience Container */}
        <LeftContainer>
          <LeftContentBox>
            <LeftBox>
              <Img style={{ alignSelf: "flex-end" }} src={CBOE_IMG}></Img>
              <Title target="_blank">
                <h3 style={{ margin: 0 }}>Derivative Strats Intern</h3> @ Cboe
                Global Market
              </Title>
              <TimeWindow> June 21th 2021 - Present</TimeWindow>
              <Details>
                Using machine learning models tools to support new products,
                index calculations, and various VIX derivatives analyses.
              </Details>
            </LeftBox>
            <div style={ArrowContainer}>
              <ArrowAnim rotate={true}></ArrowAnim>
            </div>
          </LeftContentBox>
          <LeftContentBox />
          <LeftContentBox>
            <LeftBox>
              <Img style={{ alignSelf: "flex-end" }} src={CITADEL_LOGO}></Img>
              <Title
                href="https://github.com/styled-components/styled-components"
                target="_blank"
              >
                <h3 style={{ display: "inline" }}>Final 8@ Citadel Terminal</h3>
                <br />
                / West Coast Regional <br />
              </Title>

              <TimeWindow>
                Team: Caffinated
                <br />
                Rewards: 1000$
                <br />
                March 29th - April 5th
              </TimeWindow>
              <Details>
                Selected to compete in a AI e-sports tournament hosted by{" "}
                <strong>Correlation 1 & Citadel</strong>. Developing algo
                strategy in python to defeat the opponents
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
                <h3 style={{ display: "inline" }}>TOP 5 @ IQC</h3>
                <br /> / Taiwan Regional
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
        {/* Right Experience Container */}
        <RightContainer>
          <RightContentBox />
          <RightContentBox>
            {/* <div style={{backgroundColor:"green", width:"100%", height:"100%"}}></div> */}
            <div style={ArrowContainer}>
              <ArrowAnim rotate={false}></ArrowAnim>
            </div>
            <RightBox>
              <Img src={CITADEL_LOGO}></Img>
              <Title
                href="https://www.citadel.com/careers/the-data-open/"
                target="_blank"
              >
                <h3 style={{ display: "inline" }}>
                  3rd Place @ Citadel Datathon
                </h3>
                <br />
                Summer Invitational Datathon 2021
                <br />
              </Title>

              <TimeWindow>
                Team: 15
                <br />
                July 12th - July 19th
              </TimeWindow>
              {/* <button >click to see paper</button> */}
              <Details onClick={click}>
                Selected to compete in the biggest Datathon event of the year,
                hosted by <strong>Correlation 1 & Citadel</strong>. Created an
                improved review rating system for Airbnb listings using Machine
                Learning and Natural Language Processing techniques. <br />
                Created sentiment indicator using LDA and incorporated with
                supervised model techniques including RandomForest, XGBoost, SVM
                and multi-linear regression
                <br/>
                *** click to scroll to paper below***
                <br/>
              </Details>
            </RightBox>
          </RightContentBox>
          <RightContentBox />
          <RightContentBox>
            <div style={ArrowContainer}>
              <ArrowAnim rotate={false}></ArrowAnim>
            </div>
            <RightBox>
              <Img src={RITC_LOGO}></Img>
              <Title href="https://ritc.rotman.utoronto.ca/" target="_blank">
                <h3 style={{ display: "inline", margin: 0 }}>Rotman</h3>{" "}
                Internatinal Trading Competeting
              </Title>
              <TimeWindow> February 19th 2021</TimeWindow>
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
