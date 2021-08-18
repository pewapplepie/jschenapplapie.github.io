import styled from "styled-components";

import IntroTrap from "./IntroTrap.js";
import Header from "./Header.js";
import Experience from "./Experience.js";
import Contact from "./Contact.js";
import Academis from "./Academic.js";
import Footer from "./Footer";
import React, { useRef } from "react";
const AppDiv = styled.div`
  background-color: #f7f4e8; //#FAF4DD;//#E3E2DF;
  display: flex;
  flex-direction: column;
`;
function HomePage(params) {
  const experience = useRef()
  const academic = useRef()
  const scrolltoDiv = (ref) => ref.current.scrollIntoView({block:'end',behavior:'smooth'})//window.scrollTo(0, ref.current.offsetTop)
  return (
    <AppDiv>
      <Header></Header>
      <IntroTrap />
      <Experience reference={experience} click={()=>scrolltoDiv(academic)}></Experience>
      <Academis reference={academic}></Academis>
      <Contact></Contact>
      <Footer></Footer>
    </AppDiv>
  );
}
export default HomePage;
