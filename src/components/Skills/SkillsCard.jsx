import React from 'react';
import styled from 'styled-components';

const SkillCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;

  @media only screen and (max-width: 450px) {
    width: 200%;
  }
`;

const Description = styled.p`
  text-align: center;
  overflow-wrap: break-word;
  width: 80%;
  font-size: 1.4rem;

  @media only screen and (max-width: 450px) {
    width: 200%;
  }
`;

const SkillImage = styled.img`
  width: 40%;

  @media only screen and (max-width: 650px) {
    width: 80%;
  }
`;

export default function SkillsCard({ skill }) {
  return (
    <SkillCardContainer>
      <Title>{skill.name}</Title>
      <Description>{skill.description}</Description>
      <SkillImage src={`/skills-images/${skill.image}`} />
    </SkillCardContainer>
  );
}
