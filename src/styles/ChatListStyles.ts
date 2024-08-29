import styled from 'styled-components';

export const OpenChatListContainer = styled.div`
  padding: 0.25rem;
  margin: 0.25rem 0.25rem 1rem 0.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 300px;
  max-height: 300px;
  overflow-y: auto;
  background-color: #e0e0e0; /* 기존 회색보다 조금 더 밝은 색상 */
  border-radius: 8px;
`;

export const ChatCardContainer = styled.div`
  padding: 1rem;
  margin-bottom: 0.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  h4 {
    margin: 0;
    font-size: 1.25rem;
    color: #333;
  }

  p {
    margin: 0.25rem 0 0;
    font-size: 0.875rem;
    color: #666;
  }
`;

export const ChatCreateButtonContainer = styled.div`
  padding: 0.25rem;
  margin: 1rem 0.25rem 0.25rem 0.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #f8f8f8;
  border-radius: 8px;
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
