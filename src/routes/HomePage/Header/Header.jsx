import styled from 'styled-components';
import Navigation from '../../../components/Header/Navigation/Navigation';
import Hero from '../../../components/Header/HeroSection/Hero';

const HeaderWrapper = styled.div`
  background-image: url('./space-background.jpg');
  background-size: 150em;
  background-repeat: no-repeat;
  background-position: center;
  height: 70rem;
  color: white;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Navigation />
      <Hero />
    </HeaderWrapper>
  );
}

export default Header;
