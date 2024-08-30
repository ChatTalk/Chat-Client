import styled from "styled-components";

export const ChatPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #B3C1D1;
`;

export const UserProfileContainer = styled.div`
  flex: 1.2; /* 1 */  
  margin: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ChatContainer = styled.div`
  flex: 2.5; /* 3 */
  margin: 0.5rem;
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ChatMessagesContainer = styled.div`
  padding: 0.25rem;
  margin: 0.25rem 0.25rem 1rem 0.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 300px;
  max-height: 300px;
  overflow-y: auto;
  background-color: #e0e0e0; /* 기존 회색보다 조금 더 밝은 색상 */
  border-radius: 8px;
`;

export const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  
  input {
    flex-grow: 1;
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
  
  button {
    padding: 0.75rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    
    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const ParticipatedUsersContainer = styled.div`
  flex: 1.5; /* 2 */
  margin: 0.5rem;
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`
