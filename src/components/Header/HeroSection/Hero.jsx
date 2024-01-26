import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  HeaderDescription,
  HeroSectionTitle
} from '../../../constants/strings/Strings';
import Lottie from 'react-lottie';
import Astronaut from '../../../lotties/header-lottie.json';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HeroSection = styled.section`
  display: flex;
  padding: 3rem;
  gap: 2rem;
  margin-top: 7rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const AboutMySelf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  overflow-wrap: break-word;
  /* width: 50rem; */
  width: 60%;

  @media only screen and (max-width: 1900px) {
    width: 80%;
    font-size: 3rem;
  }

  @media only screen and (max-width: 1500px) {
    font-size: 2.5rem;
    width: 90%;
  }
`;

const Description = styled.p`
  overflow-wrap: break-word;
  width: 50%;
  font-size: 1.4rem;

  @media only screen and (max-width: 1900px) {
    width: 80%;
    text-align: center;
  }

  @media only screen and (max-width: 1500px) {
    width: 100%;
    text-align: center;
  }
`;

const HeroImage = styled.img`
  width: 40%;
  margin-right: 5rem;
`;

const AstroLottieDiv = styled.div`
  padding: 2rem;

  @media only screen and (max-width: 1900px) {
    padding: 0;
  }

  @media only screen and (max-width: 699px) {
    display: none;
  }
`;

export default function Hero() {
  const AstronautOptions = {
    loop: true,
    autoplay: true,
    animationData: Astronaut,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <HeroSection>
      <AboutMySelf>
        <Title>{HeroSectionTitle}</Title>
        <Description>{HeaderDescription}</Description>
      </AboutMySelf>
      <AstroLottieDiv>
        <Lottie options={AstronautOptions} height={600} width={600} />
      </AstroLottieDiv>
    </HeroSection>
  );
}
