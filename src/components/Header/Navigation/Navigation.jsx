import styled from 'styled-components';
import Navlinks from './Navlinks';
import SocialIcons from './SocialIcons';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useEffect, useRef, useState } from 'react';
import HamburgerNav from './HamburgerNav';

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  justify-content: space-between;
`;

const RightSideNav = styled.div`
  display: flex;
  gap: 4rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

const LogoLink = styled.a``;

const Logo = styled.h1``;

export const CVButton = styled.button`
  /* background-color: rgb(22, 21, 21, 0.88); */
  background-color: rgb(132, 0, 255);
  color: white;
  padding: 1.5rem;
  font-weight: 700;
  border: transparent;
  border: 1px solid rgb(255, 255, 255, 0.6);
  cursor: pointer;
`;

const HamburderMenuDiv = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: contents;
  }
`;

const HamburgerMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 2rem;
  color: white;
`;
export function handleDownload() {
  const link = document.createElement('a');
  link.href = '/OmriBakalResumeNEW.pdf';
  link.download = 'OmriBakalResumeNEW.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function Navigation() {
  const [NavOpen, setNavOpen] = useState(false);
  const NavButtonRef = useRef();
  const NavItemsRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (
        !NavItemsRef.current?.contains(e.target) &&
        !NavButtonRef.current?.contains(e.target)
      ) {
        setNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  const handleNavClick = () => {
    setNavOpen(!NavOpen);
  };

  return (
    <NavigationWrapper>
      <LogoLink href="/">
        <Logo>Omri B.</Logo>
      </LogoLink>
      <Navlinks />
      <RightSideNav>
        <div>
          <SocialIcons />
        </div>
        <CVButton onClick={handleDownload}>DOWNLOAD CV</CVButton>
      </RightSideNav>
      <HamburderMenuDiv>
        <HamburgerMenuButton onClick={handleNavClick} ref={NavButtonRef}>
          <RxHamburgerMenu size={40} />
        </HamburgerMenuButton>
      </HamburderMenuDiv>
      {NavOpen ? <HamburgerNav reference={NavItemsRef} /> : null}
    </NavigationWrapper>
  );
}

export default Navigation;
