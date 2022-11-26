import axios from 'axios';

const createRequestMethod = (baseURL: string) => {
  const request = axios.create({
    baseURL,
  });
  return request;
};

export const getCommonHeader = () => {
  return {
    'Content-Type': 'application/json',
    email: localStorage.getItem('email'),
    password: localStorage.getItem('password')
  };
};

export const api = createRequestMethod(`/api/`);
