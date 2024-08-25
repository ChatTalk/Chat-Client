import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
  overflow: hidden;
`;

export const FormWrapper = styled.div<{ isSignUp: boolean }>`
  display: flex;
  width: 30rem;
  max-width: 800px;
  overflow: hidden;
`;

export const FormContainer = styled.div<{ isSignUp: boolean }>`
  display: flex;
  justify-content: center;
  min-width: 100%;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease-in-out;
  transform: ${({ isSignUp }) => (isSignUp ? 'translateX(-100%)' : 'translateX(0)')};
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30rem;
  margin-top: 2rem;
`;

export const TogglePanel = styled.div<{ active: boolean }>`
  flex: 1;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#dee2e6' : '#e9ecef')};
  border-radius: 4px;
  box-shadow: ${({ active }) => (active ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none')};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: ${({ active }) => (active ? '#ced4da' : '#dee2e6')};
  }
`;

export const TogglePanelPharse = styled.div`
  margin: 0.5rem;
`;

export const TogglePanelIntroduce = styled.p`
  margin: 0.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  flex: 1;
  padding: 2rem;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ErrorText = styled.div`
  color: red;
  margin-top: 1rem;
`;
