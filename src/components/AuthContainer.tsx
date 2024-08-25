import React, { useState } from 'react';
import styled from 'styled-components';
import SignUp from './SignUp';
import SignIn from './SignIn';

const Container = styled.div`
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  height: 600px;
`;

const FormContainer = styled.div<{ active?: boolean }>`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  width: 50%;
  z-index: ${({ active }) => (active ? 2 : 1)};
  left: ${({ active }) => (active ? '50%' : '0')};
  opacity: ${({ active }) => (active ? 1 : 0)};
  transform: ${({ active }) => (active ? 'translateX(-100%)' : 'translateX(0)')};
`;

const ToggleContainer = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: ${({ active }) => (active ? '0 150px 100px 0' : '150px 0 0 100px')};
  z-index: 1000;
  transform: ${({ active }) => (active ? 'translateX(-100%)' : 'translateX(0)')};
`;

const Toggle = styled.div`
  background-color: #4c8bf5;
  height: 100%;
  background: linear-gradient(to right, #5a9dfc, #4c8bf5, #5a9dfc);
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
`;

const TogglePanel = styled.div<{ right?: boolean }>`
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  text-align: center;
  top: 0;
  transform: ${({ right }) => (right ? 'translateX(0)' : 'translateX(-200%)')};
  transition: all 0.6s ease-in-out;
`;

const Button = styled.button`
  background-color: #4c8bf5;
  color: #fff;
  font-size: 15px;
  padding: 10px 45px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 10px;
  transition: background-color 0.3s ease, transform 0.3s ease, cursor 0.3s ease;

  &:hover {
    background-color: #3b73e8;
    transform: scale(1.05);
    cursor: pointer;
  }

  &:active {
    background-color: #2d5acc;
    transform: scale(0.95);
    cursor: grabbing;
  }

  &.hidden {
    background-color: transparent;
    border-color: #fff;
    font-size: 15px;
  }
`;

const AuthContainer: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container>
      <FormContainer active={isLogin}>
        <SignIn />
      </FormContainer>
      <FormContainer active={!isLogin}>
        <SignUp />
      </FormContainer>
      <ToggleContainer active={!isLogin}>
        <Toggle>
          <TogglePanel>
            <h2>Remember Account?</h2>
            <p>로그인해서 대화를 나눠보세요!</p>
            <Button className="hidden" onClick={() => setIsLogin(true)}>로그인</Button>
          </TogglePanel>
          <TogglePanel right>
            <h2>Let's Communicate!</h2>
            <p>간단한 회원가입 후, 대화에 참여하세요!</p>
            <Button className="hidden" onClick={() => setIsLogin(false)}>회원가입</Button>
          </TogglePanel>
        </Toggle>
      </ToggleContainer>
    </Container>
  );
};

export default AuthContainer;
