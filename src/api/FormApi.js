import axios from 'axios';
import { urldev, urlprod } from '../constants/urls/apiUrls';

export const SubmitForm = async (formData) => {
  const { firstName, Lastname, email, phone, message } = formData;

  try {
    const requestBody = {
      firstName,
      Lastname,
      email,
      message
    };

    if (phone !== undefined && phone !== '') {
      requestBody.phone = phone;
    }

    const response = await axios.post(urlprod, requestBody);

    return response.data;
  } catch (error) {
    console.error('An error occurred:', error.message);

    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('An error occurred. Please try again later.');
    }
  }
};
