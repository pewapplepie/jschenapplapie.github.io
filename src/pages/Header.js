import styled, { keyframes } from "styled-components";
const HeaderContainer = styled.div`
  min-height: 5vh;
  align-items: flex-start;
  padding-left: 1em;
  justify-content: center;
  font-size: calc(5px + 1vmin);
  font-family: Merriweather;
  color: #000;
`;

function Header() {
  return (
    <HeaderContainer>
      <p>
        <strong>Jeffrey Chen</strong> | MFE @ UCLA | B.S Chemistry @ NTU
      </p>
    </HeaderContainer>
  );
}

export default Header;
