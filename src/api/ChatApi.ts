import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const setupInterceptors = (navigate: ReturnType<typeof useNavigate>) => {
  api.interceptors.request.use(config => {
    // 요청을 보내기 전에 쿠키에 토큰이 있는지 확인
    // 정상적인 토큰값인지 인증하는 로직도 추가 필요
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('Authorization='))
      ?.split('=')[1];

    console.log("토큰: " + token)

    if (!token) {
      // 토큰이 없으면 로그인 페이지로 리다이렉트
      navigate('/login');
      throw new axios.Cancel('토큰이 없습니다.');
    }

    return config;
  });

  api.interceptors.response.use(
    response => response,
    error => {
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        // 서버로부터 401 응답을 받으면 로그인 페이지로 리다이렉트
        console.log("response status: " + error.response.status)
        navigate('/login');
      }
      return Promise.reject(error);
    }
  );
};

export const createOpenChat = (data: { title: string; maxPersonnel: number })  => 
    api.post('open-chats/create')

export const getAllOpenChats = () =>
    api.get('/open-chats')