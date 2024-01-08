import styled from "styled-components";

const NavLink = styled.a``;

const NavLinksWrapper = styled.div`
  margin-right: 5rem;
  display: flex;
  align-items: center;
  gap: 3rem;
`;

function Navlinks() {
  return (
    <NavLinksWrapper>
      <NavLink>Home</NavLink>
      <NavLink>Skills</NavLink>
      <NavLink>Projects</NavLink>
    </NavLinksWrapper>
  );
}

export default Navlinks;
