import { styled } from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #B3C1D1;
`;

export const ChatListPageContainer = styled.div`
  display: flex;
  width: 77%; /* 화면의 70%만 사용 */
  height: 80vh;
  border-radius: 8px;
  overflow: hidden;
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

export const ChatListContainer = styled.div`
  flex: 2.5; /* 3 */
  margin: 0.5rem;
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SubscribedChatListContainer = styled.div`
  flex: 1.5; /* 2 */
  margin: 0.5rem;
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;