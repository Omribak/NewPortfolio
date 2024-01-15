import styled from 'styled-components';
import {
  ProjectsDescription,
  ProjectsSectionTitle
} from '../../../constants/strings/Strings';
import { Description, SectionWrapper, Title } from '../Skills/Skills';
import { ProjectsList } from '../../../constants/data-objects/Arrays';
import ProjectCard from '../../../components/Projects/ProjectCard';
import Lottie from 'react-lottie';
import animationData3 from '../../../lotties/galaxy-anim5.json';

const ProjectsSectionContainer = styled.div`
  margin-top: 10rem;

  @media only screen and (max-width: 450px) {
    width: 80%;
    margin: 0 auto;
    margin-top: 10rem;
  }
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  place-items: center;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 450px) {
    width: 50%;
  }
`;

const LottieDiv = styled.div`
  position: absolute;
  top: 270%;
  right: 1%;
`;

function Projects() {
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: animationData3,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <ProjectsSectionContainer id="projects">
      <SectionWrapper>
        <Title>{ProjectsSectionTitle}</Title>
        <Description>{ProjectsDescription}</Description>
        <ProjectsContainer>
          {ProjectsList.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ProjectsContainer>
      </SectionWrapper>
    </ProjectsSectionContainer>
  );
}

export default Projects;
