import React, { useState } from 'react';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import { Container, FormContainer, ToggleContainer, TogglePanel, TogglePanelIntroduce, TogglePanelPharse } from '../styles/AuthStyles';

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
              <TogglePanelPharse>Log In</TogglePanelPharse>
              <TogglePanelIntroduce>이미 회원이면 얼른 대화에 참여하세요!</TogglePanelIntroduce>
            </TogglePanel>
          )}
          { !isSignUp && (
            <TogglePanel
              onClick={() => setIsSignUp(true)}
              active={isSignUp}
            >
              <TogglePanelPharse>Sign Up</TogglePanelPharse>
              <TogglePanelIntroduce>아직 계정이 없으시면 회원가입하세요!</TogglePanelIntroduce>
            </TogglePanel>
          )}
        </ToggleContainer>
      </FormContainer>
    </Container>
  );
};

export default AuthPage;
