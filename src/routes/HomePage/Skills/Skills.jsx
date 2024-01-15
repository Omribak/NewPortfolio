import styled from 'styled-components';
import {
  SkillsDescription,
  SkillsSectionTitle
} from '../../../constants/strings/Strings';
import Carousel from '../../../components/Skills/Carousel';
import Lottie from 'react-lottie';
import animationData2 from '../../../lotties/galaxy-anim2.json';
import animationData1 from '../../../lotties/galaxy-anim4.json';

const SkillsSectionContainer = styled.div`
  padding-top: 5rem;
  width: 100%;

  @media only screen and (max-width: 450px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(15, 15, 15, 0.7);
  border: 1px solid rgb(132, 0, 255);
  margin: 0 auto;
  padding: 5rem;
  border-radius: 2rem;
  width: 60%;
  box-shadow: 0px 0px 7px 4px purple;

  @media only screen and (max-width: 450px) {
    width: 50%;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-decoration: underline;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  overflow-wrap: break-word;
  width: 80%;
  text-align: center;

  @media only screen and (max-width: 450px) {
    width: 150%;
  }
`;

const LottieDiv = styled.div`
  position: absolute;
  top: 150%;
  left: -5%;
`;

function Skills() {
  return (
    <SkillsSectionContainer id="skills">
      <SectionWrapper>
        <Title>{SkillsSectionTitle}</Title>
        <Description>{SkillsDescription}</Description>
        <Carousel />
      </SectionWrapper>
    </SkillsSectionContainer>
  );
}

export default Skills;
