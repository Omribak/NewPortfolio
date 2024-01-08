import styled from "styled-components";
import Navigation from "../../../components/Header/Navigation/Navigation";

const HeaderWrapper = styled.div`
  background-image: url("./space-background.jpg");
  background-size: 100em;
  background-repeat: no-repeat;
  background-position: center;
  height: 30rem;
  color: white;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Navigation />
      <div>Header Section Hero</div>
    </HeaderWrapper>
  );
}

export default Header;
