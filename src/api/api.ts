import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const signUp = (data: { email: string; password: string; phone: string; role: string }) =>
  api.post('/users/signup', data);

export const signIn = (data: { email: string; password: string }) =>
  api.post('/users/login', data);

