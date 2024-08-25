import React, { useState } from 'react';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import { Container, FormContainer, ToggleContainer, TogglePanel } from '../styles/AuthStyles';

const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Container>
      <FormContainer>
        {isSignUp ? <SignUp /> : <SignIn />}
        <ToggleContainer>
          { isSignUp && (
            <TogglePanel
              onClick={() => setIsSignUp(false)}
              active={!isSignUp}
            >
              <h2>Log In</h2>
              <p>이미 회원이면 얼른 대화에 참여하세요!</p>
            </TogglePanel>
          )}
          { !isSignUp && (
            <TogglePanel
              onClick={() => setIsSignUp(true)}
              active={isSignUp}
            >
              <h2>Sign Up</h2>
              <p>아직 계정이 없으시면 회원가입하세요!</p>
            </TogglePanel>
          )}
        </ToggleContainer>
      </FormContainer>
    </Container>
  );
};

export default AuthPage;
