// src/components/TestPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { logoutUser } from '../redux/userSlice';
import { test } from '../api/api';

const TestPage: React.FC = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [testSuccess, setTestSuccess] = useState(false);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();  // 로그아웃 요청 디스패치
      navigate('/login');  // 로그아웃 후 홈으로 이동
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error);
    }
  };

  const handleTest = async () => {
    try {
      await test();  // test API 호출
      setTestSuccess(true);  // 호출 성공 시 상태 업데이트
    } catch (error) {
      console.error('Test API 호출 중 오류 발생:', error);
    }
  };

  if (user.status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!user.email) {
    return <div>No user data found. Please log in.</div>;
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome, {user.email}</h1>
      <p>Phone: {user.phone}</p>
      <p>Role: {user.role}</p>
      <button onClick={handleLogout}>Log Out</button>
      <button onClick={handleTest}>Test</button>
      {testSuccess && <div>Test success</div>}
    </div>
  );
};

export default TestPage;
