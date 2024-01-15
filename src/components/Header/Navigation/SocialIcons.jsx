import styled from 'styled-components';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGit } from 'react-icons/fa6';

const SocialIconsWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.7rem;
`;

const SocialIcon = styled.a`
  border-radius: 80%;
  padding: 0 0.2rem;
  background-color: rgb(22, 21, 21, 0.88);
  border: 1px solid rgb(255, 255, 255, 0.8);
  color: white;
  transition: background-color 0.5s, color 0.5s ease-in-out;

  &:hover {
    background: white;
    color: black;
  }
`;

const IconStyle = styled.div`
  padding: 0.6rem;
`;

const LinkedInIconStyle = styled.div`
  padding: 0.7rem;
`;

const LinkedInIconDiv = styled.div`
  margin-top: 0.3rem;
`;

const GitIconDiv = styled.div`
  margin-top: 0.3rem;
`;

function SocialIcons() {
  return (
    <SocialIconsWrapper>
      <SocialIcon
        href="https://www.linkedin.com/in/omri-bakal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIconStyle>
          <LinkedInIconDiv>
            <FaLinkedinIn size={20} />
          </LinkedInIconDiv>
        </LinkedInIconStyle>
      </SocialIcon>
      <SocialIcon
        href="https://github.com/Omribak"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconStyle>
          <GitIconDiv>
            <FaGit size={25} />
          </GitIconDiv>
        </IconStyle>
      </SocialIcon>
    </SocialIconsWrapper>
  );
}

export default SocialIcons;
