import React, { useState } from 'react';
import SignUp from '../components/auth/SignUp';
import SignIn from '../components/auth/SignIn';
import { Container, FormWrapper, FormContainer, ToggleContainer, TogglePanel, TogglePanelIntroduce, TogglePanelPharse } from '../styles/AuthStyles';
import { PageWrapper } from '../styles/ListStyles';

const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <PageWrapper>
      <Container>
        <FormWrapper isSignUp={isSignUp}>
          <FormContainer isSignUp={isSignUp}>
            <SignIn />
          </FormContainer>
          <FormContainer isSignUp={isSignUp}>
            <SignUp />
          </FormContainer>
        </FormWrapper>
        <ToggleContainer>
            { isSignUp && (
              <TogglePanel
                onClick={() => setIsSignUp(false)}
                active={!isSignUp}
              >
                <TogglePanelPharse>Sign In</TogglePanelPharse>
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
      </Container>
    </PageWrapper>
  );
};

export default AuthPage;
