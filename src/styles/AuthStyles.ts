import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  margin: auto;
  transition: transform 0.3s ease-in-out;
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TogglePanel = styled.div`
  flex: 1;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  background-color: #e9ecef;
  border-radius: 4px;
  
  &:hover {
    background-color: #dee2e6;
  }
`;

export const Form = styled.form`
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
