import styled from 'styled-components';
import { Link } from 'react-scroll';

const NavLink = styled(Link)`
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
  text-decoration: none;
  transition: transform 250ms ease-in;

  &:hover {
    text-decoration: underline;
    transform: scale(1.1);
  }
`;

const HomeLink = styled.a`
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  transition: transform 250ms ease-in;

  &:hover {
    text-decoration: underline;
    transform: scale(1.1);
  }
`;

const NavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

function Navlinks() {
  return (
    <NavLinksWrapper>
      <HomeLink href="/">Home</HomeLink>
      <NavLink to="skills" smooth={true} duration={500}>
        Skills
      </NavLink>
      <NavLink to="projects" smooth={true} duration={500}>
        Projects
      </NavLink>
    </NavLinksWrapper>
  );
}

export default Navlinks;
