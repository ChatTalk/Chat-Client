import { styled } from "styled-components";

export const ChatListPageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
`;

export const UserProfileContainer = styled.div`
  flex: 1; /* 1 */
  margin-right: 1rem;
`;

export const ChatListContainer = styled.div`
  flex: 3; /* 3 */
  margin-right: 1rem;
  background-color: #f1f3f5;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SubscribedChatListContainer = styled.div`
  flex: 2; /* 2 */
  background-color: #e9ecef;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;