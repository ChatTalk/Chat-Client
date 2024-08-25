import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;  /* Optional: Background color to contrast panels */
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  max-width: 800px;
  margin: auto;
  transition: transform 0.3s ease-in-out;
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;  /* Add margin to separate from the form */
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
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
