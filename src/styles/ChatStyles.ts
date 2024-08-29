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
  flex-grow: 1;
  padding: 1rem;
  background-color: #fafafa;
  border-radius: 8px;
  overflow-y: auto;
  margin-bottom: 1rem;
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
    margin-right: 0.5rem;
  }
  
  button {
    padding: 0.75rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
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
