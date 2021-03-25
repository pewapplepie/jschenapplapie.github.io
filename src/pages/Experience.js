import styled, { keyframes } from "styled-components";
import NewWindow from "react-new-window";
// import FamaMBhtml from "./projects/FamaMB.js";
import { Link } from "react-router-dom";
const ExperienceContainer = styled.div`
  width: 100%;
`;
const HeadingContainer = styled.div`
  display: flex;
  width: auto;
  text-align: center;
  justify-content: center;
`;
const Heading = styled.h1`
  font-family: Merriweather;
  letter-spacing: 2px;
  color: #000;
  border-bottom: thin solid #000;
  width: 80%;
`;
const ResumeContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;
const Education = styled.div`
  //display: flex;
  //flex-direction: row;
  width: auto;
  height: auto;
  padding-left: 5%;
  padding-right: 5%;
`;

const Title = styled.h3`
  font-family: Merriweather;
  letter-spacing: 2px;
  color: #000;
`;
const Subtitle = styled.h4`
  display: inline-block;
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 2px;
  color: #000;
  font-style: italic;
  margin-left: 1vh;
`;
const Context = styled.p`
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 2px;
  color: #000;
  text-align: left;
  line-height: 3vh;
`;
const Demo = () => (
  <NewWindow>
    <h1>Hi 👋</h1>
  </NewWindow>
);
// const handleClick = ()=>{
//     <NewWindow>
//         <FamaMBhtml></FamaMBhtml>
//     </NewWindow>
// }
function Experience() {
  return (
    <ExperienceContainer>
      <HeadingContainer>
        <Heading>Education</Heading>
      </HeadingContainer>
      <ResumeContainer>
        <Education>
          <Title>
            UCLA ANDERSON SCHOOL -{" "}
            <Subtitle>Master of Financial Engineering</Subtitle>
          </Title>
          <Context>
            <b>• Econometrics (R):</b> Simple Linear Regression, Multiple Linear
            Regression, Prediction in a Multiple Regression Model, Lasso
            Regression, Ridge Regression, Elastic-Net Regression, CART
            Regression <p />
            <b>• Stochastic Calculus:</b> Black-Scholes, Equivalent Martingale
            Measures, Risk-Neutral Valuation, Ito’s Lemma, Girsanov Theorem,
            Feynman Kac, Derivatives Heding and Replication
            <p />
            <b>• Investments (R):</b> CAPM, APT, Fama-French 3 Factor Model,
            Dynamic Portfolio Selection, Portfolio Optimization • Empirical
            Methods in Finance (R): AR model, VAR model, ARIMA model, ARCH
            model, GARCH model, I-GARCH model, GARC-M model, EGARCH model, GJR
            model, PCA, Fama-MacBeth <p />
            <b>• Derivatives (R):</b> Binomial model for various options and
            convertible bonds, Monte Carlo Simulation, Least Squares Monte
            Carlo, Real Options, VIX, Stochastic Volatility (Heston Model),
            Delta Hedging, Gamma-Neutrality, Collars in Acquisitions <p />
            <b>• Fixed Income (R&Python):</b> BDT model, Vasicek Model, Merton
            Model, Cox-Ingersoll Ross Model, Hull & White Model, Forwards,
            Futures, Swaps, Credit Default Swaps, Eurodollar Futures, Treasury
            Bond Futures, DV01, Duration, Convexity, Bootstrapping, Curve Models
            (LMM, BJM, HJM), String Models, Merton Credit Model, Poisson Process
            <p />
            <b>• Financial Decision Making (R&Python):</b> Market Imperfections,
            Inefficient Markets (+Causality), Discussion of Event Studies,
            Statistics of Pfio Tests, (Beta) Shrinkage, NPV Applications,
            Financial Statements, Comparables, Perfect Capital Structure,
            Capital Structure, Perfect, Taxes (WACC), Perfect Capital Structure,
            Brief Taxes (Clienteles)
            <br />
          </Context>
          <Title>
            NATIONAL TAIWAN UNIVERSITY -{" "}
            <Subtitle>Bachelor of Science in Chemistry</Subtitle>
          </Title>
          <Context>
            <b>Relative Coursework:</b> Advanced Statistics, Calculus, Data
            mining, Programming (Python), Using R for Data Analysis, Special
            Topic on Advanced Sobware Development (BlockChain ApplicaEon),
            Research Training for Junior
          </Context>
        </Education>
        <HeadingContainer>
          <Heading>Projects</Heading>
        </HeadingContainer>
        <Education>
          <Context>
            Analysis of Predicting Cross-Sectional stock returns with
            Fama-Macbeth regression: firm-marketcap, price-normalized accruals,
            the earnings-price ratio, and 1/price.
          </Context>
        </Education>
      </ResumeContainer>
    </ExperienceContainer>
  );
}

export default Experience;
