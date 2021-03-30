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
  height: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: auto;
  justify-content: space-between;
`;

const PersonalInfo = styled.div`
  font-family: Noto Serif;
  color: #fff;
  width: 80%;
  height: 10vh;
  display: flex;
  justify-content: center;

  align-items: center;
`;
const CoolDecorLine = styled.div`
  background-color: #66ffb2;
  width: auto;
  height: 1%;
  bottom: 0;
  transition: transform 500ms ease;
`;
const EmailAnim = styled.div`
  font-family: Noto Serif;
  height: auto;
  display: block;
  //background: linear-gradient(#66ffb2 0%,  #2f4454 100%);
  transition: box-shadow 0.5s linear;
  //transition: color .5s linear;
  &:hover {
    //background-color: linear-gradient(#2f4454 50%,#66ffb2 50%);
    //background-color: #d1d1d1;
    box-shadow: 0 -5px 0 0 #33ffff inset;
    //color: #606060;
  }
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
        <PersonalInfo>
          <h2 style={{ textAlign: "center" }}>
            Desire to combine advanced Quantitative technique with in-depth
            financail knowledge to creat impact
          </h2>
        </PersonalInfo>
        <a
          href="jschen1217@gmail.com"
          style={{ textDecoration: "none", color: "#fff", width: "auto" }}
        >
          <EmailAnim>jschen1217@gmail.com</EmailAnim>
        </a>
        <PersonalInfo>
          Feel free to shoot me email or connect me on Linkedlin if you find me
          interesting ;)
        </PersonalInfo>
      </PersonalInfoContainer>
    </ContactContainer>
  );
}

export default Contact;
