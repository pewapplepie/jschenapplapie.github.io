import styled, { keyframes } from "styled-components";
import ArrowAnim from "./components/ArrowsLines.js";
import { Link } from "react-router-dom";
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
  height: 100em;
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
              <Title
                href="https://github.com/styled-components/styled-components"
                target="_blank"
              >
                <h1 style={{ display: "inline" }}>Terminal</h1>/ West Coast
                Regional{" "}
              </Title>
              <TimeWindow>March 29th - April 5th</TimeWindow>
              <Details>
                Competing in a Algo dota games hosted by{" "}
                <strong>Correlation 1 & Citadel</strong>. Developing algo
                strategy to defeat the opponents
              </Details>
            </LeftBox>
            <div style={ArrowContainer}>
              <ArrowAnim rotate={true}></ArrowAnim>
            </div>
          </LeftContentBox>
        </LeftContainer>
        <SepLineVer></SepLineVer>
        <RightContainer>
          <RightContentBox></RightContentBox>
          <RightContentBox>
            <div style={ArrowContainer}>
              <ArrowAnim rotate={false}></ArrowAnim>
            </div>
            <RightBox>
              <Title
                href="https://ritc.rotman.utoronto.ca/"
                target="_blank"
              >
                <h1 style={{ display: "inline" }}>Rotman</h1> Internatinal Trading Competeting
              </Title>
              <TimeWindow> February 19th, 2021</TimeWindow>
              <Details>
                UCLA Anderson School Team Trader<br/>
                Perform trading around the Rotman Interactive Trader (RIT) market simulator platform in three cases, BP commodity, liquidity and algorithm trading. <br/>
               
              </Details>
            </RightBox>
          </RightContentBox>
        </RightContainer>
      </JourneyContainer>
    </ExperienceContainer>
  );
}

export default Experience;
