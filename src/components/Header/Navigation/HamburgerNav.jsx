import React from 'react';
import styled, { keyframes } from 'styled-components';
import SocialIcons from './SocialIcons';
import Navlinks from './Navlinks';
import { motion } from 'framer-motion';
import { CVButton, handleDownload } from './Navigation';

const NavContainer = styled(motion.div)`
  position: absolute;
  right: 4%;
  bottom: 70%;
  background-color: rgb(138, 13, 255, 0.5);
  padding: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

export default function HamburgerNav({ reference }) {
  return (
    <NavContainer
      ref={reference}
      animate={{ y: 15 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <NavItemsWrapper>
        <SocialIcons />
        <CVButton onClick={handleDownload}>DOWNLOAD CV</CVButton>
      </NavItemsWrapper>
    </NavContainer>
  );
}
