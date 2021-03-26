import styled, { keyframes } from "styled-components";
const ContactContainer = styled.div`
  width: 100%;
  height: 30em;
  background-color: #2f4454;
`;
const Header = styled.h1`
  height: auto;
  //font-size: calc(5px + 1vmin);
  font-family: Noto Serif;
  color: #fff;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const DashLine = styled.div`
  height: 0.3mm;
  width: 30%;
  background-color: #fff;
  margin: 3%;
`;

const PersonalInfoContainer = styled.div`
  height: 50%;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const PersonalInfo = styled.h3`
  font-family: Noto Serif;
  color: #fff;
  text-decoration: none;
`;

function Contact() {
  return (
    <ContactContainer>
      <HeaderContainer>
        <DashLine />
        <Header>Contact Me</Header>
        <DashLine />
      </HeaderContainer>
      <PersonalInfoContainer>
        <a href="jschen1217@gmail.com" style={{ textDecoration: "none" }}>
          <PersonalInfo>jschen1217@gmail.com</PersonalInfo>
        </a>
      </PersonalInfoContainer>
    </ContactContainer>
  );
}

export default Contact;
