import React, { useState } from 'react';
import styled from 'styled-components';

const ProjectCardContainer = styled.div`
  width: 30rem;
  height: 50rem;
  overflow: hidden;
  box-shadow: 0px 0px 15px -5px;
  transition: transform 500ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media only screen and (max-width: 1500px) {
    width: 20rem;
    height: 70rem;
  }
  @media only screen and (max-width: 1100px) {
    width: 40rem;
    height: 50rem;
  }

  @media only screen and (max-width: 900px) {
    width: 30rem;
    height: 45rem;
  }

  @media only screen and (max-width: 650px) {
    width: 25rem;
    height: 50rem;
  }

  @media only screen and (max-width: 450px) {
    width: 20rem;
    height: 60rem;
  }

  @media only screen and (max-width: 415px) {
    width: 15rem;
    height: 70rem;
  }
`;

const ProjectTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  overflow-wrap: break-word;
  width: 100%;
  font-size: 1.5rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
`;

const ProjDetails = styled.p`
  overflow-wrap: break-word;
  width: 80%;
  text-align: center;
`;

const ViewProjectLink = styled.a`
  text-decoration: underline;
`;

const ComingSoon = styled.a``;

export default function ProjectCard({ project }) {
  return (
    <ProjectCardContainer>
      <ProjectImage src={`projects-images/${project.image}`} />
      <ProjectTextContainer>
        <Title>{project.name}</Title>
        <ProjDetails>{project.description}</ProjDetails>
        {project.state === 'inactive' ? (
          <ComingSoon>Coming Soon</ComingSoon>
        ) : (
          <ViewProjectLink
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </ViewProjectLink>
        )}
      </ProjectTextContainer>
    </ProjectCardContainer>
  );
}
