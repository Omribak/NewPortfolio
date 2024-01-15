import React from 'react';
import styled from 'styled-components';
import ContactForm from '../../../components/ContactMe/ContactForm';
import Lottie from 'react-lottie';
import ContactLottie from '../../../lotties/contact-lottie.json';

const ContactMeContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ContactLottieDiv = styled.div`
  @media (max-width: 1500px) {
    display: none;
  }
`;

const ContactImage = styled.img`
  width: 20%;
`;

export default function ContactMe() {
  const ContactLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: ContactLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <ContactMeContainer>
      <ContactLottieDiv>
        <Lottie options={ContactLottieOptions} height={500} width={500} />
      </ContactLottieDiv>
      <ContactForm />
    </ContactMeContainer>
  );
}
