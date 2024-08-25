import React, { useState } from 'react';
import styled from 'styled-components';
import SignUp from './SignUp';
import SignIn from './SingIn';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: transparent;
  border: 2px solid #000;
  color: #000;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;

  &.active {
    background-color: #000;
    color: #fff;
  }
`;

const AuthContainer: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container>
      {isLogin ? <SignIn /> : <SignUp />}
      <ToggleContainer>
        <Button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>로그인</Button>
        <Button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>회원가입</Button>
      </ToggleContainer>
    </Container>
  );
};

export default AuthContainer;
