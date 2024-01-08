import styled from "styled-components";
import Navlinks from "./Navlinks";
import SocialIcons from "./SocialIcons";

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  justify-content: space-between;
`;

const RightSideNav = styled.div`
  display: flex;
  gap: 4rem;
`;

const Logo = styled.h1``;

const CVButton = styled.button``;

function Navigation() {
  return (
    <NavigationWrapper>
      <Logo>Omri B.</Logo>
      <RightSideNav>
        <Navlinks />
        <SocialIcons />
        <CVButton>DOWNLOAD CV</CVButton>
      </RightSideNav>
    </NavigationWrapper>
  );
}

export default Navigation;
