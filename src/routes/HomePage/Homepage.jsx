import styled from 'styled-components';
import ContactMe from './ContactMe/ContactMe';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const SectionWrapper = styled.div`
  background-image: url('./background-app3.jpg');
  background-size: cover;
  background-repeat: no-repeat;
`;

function Homepage() {
  return (
    <>
      <Header />
      <SectionWrapper>
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
      </SectionWrapper>
    </>
  );
}

export default Homepage;
