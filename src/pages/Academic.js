import styled, { keyframes } from "styled-components";
import NewWindow from "react-new-window";
import UCLA_IMG from "../assets/UCLA-Anderson-School-1440x960.jpeg";
import NTU_IMG from "../assets/NTU-campus.jpeg";
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

const AcademisContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;
const SectionContainer = styled.div`
  /* display: flex;
  flex-direction: row; */
  width: auto;
  height: auto;
  padding-left: 5%;
  padding-right: 5%;
`;
const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
`;
const LeftBlock = styled.div`
  flex: 4;
  height: auto;
  align-items: flex-start;
`;
const RightBlock = styled.div`
  flex: 6;
  height: auto;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  transition: transform 500ms ease;
  /* 
  :hover& {
    transform: scale(1.15);
  } */
`;
const PhotoBlock = styled.div`
  width: 80%;
  height: auto;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 1000ms ease;
  &:hover {
    transform: scale(1.15);
  }

  &:hover {
    ${Img} {
      transform: scale(1.2);
    }
  }
`;
const Title = styled.h3`
  font-family: Merriweather;
  letter-spacing: 2px;
  color: #000;
`;
const Subtitle = styled.h4`
  //display: inline-block;
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 2px;
  color: #000;
  font-style: italic;
`;
const Context = styled.p`
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 2px;
  color: #000;
  text-align: left;
  line-height: 3vh;
  font-size: 2vmin;
`;
const SepLine = styled.div`
  width: 90%;
  height: 0.3mm;
  background-color: #374785;
  margin: auto;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;
function Academis() {
  return (
    <AcademisContainer>
      <HeadingContainer>
        <Heading>Education</Heading>
      </HeadingContainer>
      <SepLine />
      <SectionContainer>
        <DetailContainer>
          <LeftBlock>
            <Title>UCLA ANDERSON SCHOOL</Title>
            <Subtitle>Master of Financial Engineering</Subtitle>
            <PhotoBlock>
              <a
                href="https://www.anderson.ucla.edu/degrees/master-of-financial-engineering"
                target="_blank"
              >
                <Img src={UCLA_IMG}></Img>
              </a>
            </PhotoBlock>
          </LeftBlock>
          <RightBlock>
            <Context>
              <b>• Econometrics (R):</b> Simple Linear Regression, Multiple
              Linear Regression, Prediction in a Multiple Regression Model,
              Lasso Regression, Ridge Regression, Elastic-Net Regression, CART
              Regression <p />
              <b>• Stochastic Calculus:</b> Black-Scholes, Equivalent Martingale
              Measures, Risk-Neutral Valuation, Ito’s Lemma, Girsanov Theorem,
              Feynman Kac, Derivatives Heding and Replication
              <p />
              <b>• Investments (R):</b> CAPM, APT, Fama-French 3 Factor Model,
              Dynamic Portfolio Selection, Portfolio Optimization
              <p />
              <b>• Empirical Methods in Finance (R):</b> AR model, VAR model,
              ARIMA model, ARCH model, GARCH model, I-GARCH model, GARC-M model,
              EGARCH model, GJR model, PCA, Fama-MacBeth <p />
              <b>• Derivatives (R):</b> Binomial model for various options and
              convertible bonds, Monte Carlo Simulation, Least Squares Monte
              Carlo, Real Options, VIX, Stochastic Volatility (Heston Model),
              Delta Hedging, Gamma-Neutrality, Collars in Acquisitions <p />
              <b>• Fixed Income (R&Python):</b> BDT model, Vasicek Model, Merton
              Model, Cox-Ingersoll Ross Model, Hull & White Model, Forwards,
              Futures, Swaps, Credit Default Swaps, Eurodollar Futures, Treasury
              Bond Futures, DV01, Duration, Convexity, Bootstrapping, Curve
              Models (LMM, BJM, HJM), String Models, Merton Credit Model,
              Poisson Process
              <p />
              <b>• Financial Decision Making (R&Python):</b> Market
              Imperfections, Inefficient Markets (+Causality), Discussion of
              Event Studies, Statistics of Pfio Tests, (Beta) Shrinkage, NPV
              Applications, Financial Statements, Comparables, Perfect Capital
              Structure, Capital Structure, Perfect, Taxes (WACC), Perfect
              Capital Structure, Brief Taxes (Clienteles)
              <br />
            </Context>
          </RightBlock>
        </DetailContainer>
        <DetailContainer>
          <LeftBlock>
            <Title>NATIONAL TAIWAN UNIVERSITY</Title>
            <Subtitle>Bachelor of Science in Chemistry</Subtitle>
            <PhotoBlock>
              <a href="https://www.ntu.edu.tw/english/" target="_blank">
                <Img src={NTU_IMG}></Img>
              </a>
            </PhotoBlock>
          </LeftBlock>
          <RightBlock>
            <Context>
              <b>• Relative Coursework:</b> Advanced Statistics, Calculus, Data
              mining, Programming (Python), Using R for Data Analysis, Special
              Topic on Advanced Sobware Development (BlockChain ApplicaEon),
              Research Training for Junior
              <br />
              <br></br>
              <b>
                • Undergraduate Researcher: <br />- Rapid Identification of
                Bacteria by Surfaced-assisted Laser Desorption Ionization Mass
                Spectrometry using Gold Nanoparticle Arrays
              </b>
              <br />
              Poster Presentation @ 15th TSMS Annual Conference & 7th World
              Chinese Mass Spectrometry Conference
            </Context>
          </RightBlock>
        </DetailContainer>
      </SectionContainer>
      <HeadingContainer>
        <Heading>Projects</Heading>
      </HeadingContainer>
      <SepLine />
      <SectionContainer>
        <a href="https://rpubs.com/Pewapplepie/FDM-FamaMB" target="_blank">
          <Context>
            • Analysis of Predicting Cross-Sectional stock returns with
            Fama-Macbeth regression: firm-marketcap, price-normalized accruals,
            the earnings-price ratio, and 1/price.
          </Context>
        </a>
      </SectionContainer>
      <SectionContainer>
        <a href="https://rpubs.com/Pewapplepie/745815" target="_blank">
          <Context>
            • Historical Financial Data Analysis, Earnings, Cash Flows &
            Leverage Ratios
          </Context>
        </a>
      </SectionContainer>
      <SectionContainer>
        <div style={{ height: "20vh", textAlign:"center",marginTop:"10vh" }}>*More Projects will be added blow*</div>
      </SectionContainer>
    </AcademisContainer>
  );
}

export default Academis;
