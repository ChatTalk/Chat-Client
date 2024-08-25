import axios from 'axios';

export const signUp = (data: any) => axios.post('/api/users/signup', data);
export const signIn = (data: any) => axios.post('/api/users/login', data);