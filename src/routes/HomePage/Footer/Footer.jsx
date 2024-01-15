import styled from 'styled-components';

export const FooterContainer = styled.div`
  margin-top: 5rem;
  padding: 2rem;
`;

const CopyRight = styled.p``;
function Footer() {
  return (
    <FooterContainer>
      <CopyRight>&copy; Omri Bakal 2024.</CopyRight>
    </FooterContainer>
  );
}

export default Footer;
