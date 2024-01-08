import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialIconsWrapper = styled.div`
  display: flex;
  gap: 0.2rem;
`;

const SocialIcon = styled.button`
  border-radius: 2rem;
  padding: 0.8rem;
`;

function SocialIcons() {
  return (
    <SocialIconsWrapper>
      <SocialIcon>
        <FaLinkedin size={20} />
      </SocialIcon>
      <SocialIcon>
        <FaGithub size={20} />
      </SocialIcon>
    </SocialIconsWrapper>
  );
}

export default SocialIcons;
