import styled from 'styled-components';
import  AwsGetAssets  from '../../../aws-utils/aws-service';
export const FooterContainer = styled.div`
  margin-top: 5rem;
  padding: 2rem;
`;

const CopyRight = styled.p``;
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <AwsGetAssets/>
      <CopyRight>&copy; Omri Bakal {currentYear}.</CopyRight>
    </FooterContainer>
  );
}

export default Footer;
