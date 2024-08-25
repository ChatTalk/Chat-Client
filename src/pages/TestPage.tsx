// src/components/TestPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { logout } from '../redux/userSlice';

const TestPage: React.FC = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
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
    </div>
  );
};

export default TestPage;
