import styled from "styled-components";

import IntroTrap from "./IntroTrap.js";
import Header from "./Header.js";
import Experience from "./Experience.js";
import Contact from "./Contact.js";
import Academis from "./Academic.js";
import Footer from "./Footer";
const AppDiv = styled.div`
  background-color: #f7f4e8; //#FAF4DD;//#E3E2DF;
  display: flex;
  flex-direction: column;
`;

const SectionBar = styled.div`
  display: block;
  position: absolute;
  background-color: green;
  height: 30vh;
  width: 20vh;
`;
function HomePage(params) {
  return (
    <AppDiv>
      <Header></Header>
      <IntroTrap />
      <Experience></Experience>
      <Academis></Academis>
      <Contact></Contact>
      <Footer></Footer>
    </AppDiv>
  );
}
export default HomePage;
