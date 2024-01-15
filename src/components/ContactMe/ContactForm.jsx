import React, { useState } from 'react';
import styled from 'styled-components';
import { ContactMeSectionTitle } from '../../constants/strings/Strings';
import toast from 'react-hot-toast';
import { SubmitForm } from '../../api/FormApi';
import { ClipLoader } from 'react-spinners';

const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1500px) {
    width: 50rem;
  }
`;

const ContactMeTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const ContactMeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const InfoInputWrapper = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;

const InfoInput = styled.input`
  width: 20rem;
  height: 3rem;
  border-radius: 1rem;
  text-indent: 5%;
  outline: none;
  font-family: 'Poppins';

  &:hover {
    box-shadow: 0 0 15px 5px rgb(132, 0, 255);
  }
`;

const MessageArea = styled.textarea`
  width: 47rem;
  height: 10rem;
  border-radius: 1rem;
  outline: none;
  font-family: 'Poppins';
  padding: 1.5rem;

  &:hover {
    box-shadow: 0 0 15px 5px rgb(132, 0, 255);
  }

  @media (max-width: 950px) {
    margin: 0 auto;
    width: 18rem;
  }
`;

const FormButton = styled.button`
  background-color: rgb(132, 0, 255);
  color: white;
  padding: 1.5rem;
  font-weight: 700;
  border: transparent;
  cursor: pointer;
  width: 12rem;
  align-self: center;
`;

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    Lastname: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleFormChange = (e, option) => {
    const value = e.target.value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [option]: value
    }));
  };

  const handleButtonSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await SubmitForm(formData);
      if (response.success === true) {
        toast.success('Form was submitted , Thank You.');
        document.getElementById('contact-me-form').reset();
        setFormData({
          firstName: '',
          Lastname: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setIsLoading(false);
  };

  return (
    <ContactFormContainer>
      <ContactMeTitle>{ContactMeSectionTitle}</ContactMeTitle>
      <ContactMeForm id="contact-me-form">
        <InfoInputWrapper>
          <InfoInput
            type="text"
            required={true}
            placeholder="First Name *"
            onChange={(e) => handleFormChange(e, 'firstName')}
          />
          <InfoInput
            type="text"
            placeholder="Last Name *"
            required={true}
            onChange={(e) => handleFormChange(e, 'Lastname')}
          />
        </InfoInputWrapper>
        <InfoInputWrapper>
          <InfoInput
            type="email"
            placeholder="Email *"
            required={true}
            onChange={(e) => handleFormChange(e, 'email')}
          />
          <InfoInput
            type="text"
            placeholder="Phone No."
            onChange={(e) => handleFormChange(e, 'phone')}
          />
        </InfoInputWrapper>
        <MessageArea
          type="text"
          placeholder="Message *"
          required={true}
          onChange={(e) => handleFormChange(e, 'message')}
        />
        <FormButton onClick={handleButtonSubmit}>
          {isLoading ? (
            <ClipLoader color="#ffffff" loading={true} size={20} />
          ) : (
            <>SEND</>
          )}
        </FormButton>
      </ContactMeForm>
    </ContactFormContainer>
  );
}
