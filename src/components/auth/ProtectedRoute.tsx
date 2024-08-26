import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = document.cookie
    .split('; ')
    .find(row => row.startsWith('Authorization='))
    ?.split('=')[1];

  console.log("토큰: " + token)

  // 토큰이 정상적인 값인지도 검증 필요
  if (!token) {
    // 쿠키에 토큰이 없으면 로그인 페이지로 리다이렉트
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
