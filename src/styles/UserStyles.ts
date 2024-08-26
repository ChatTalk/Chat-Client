import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
`;

export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserName = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  color: #343a40;
`;

export const UserDetail = styled.p`
  margin: 0.25rem 0;
  font-size: 0.875rem;
  color: #6c757d;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const Button = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3;
  }

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;