import React from "react";
import UserProfile from "../components/user/UserProfile";
import { ChatContainer, UserProfileContainer, ParticipatedUsersContainer } from "../styles/ChatStyles";
import { useParams } from "react-router-dom";
import { ChatListPageContainer, PageWrapper } from "../styles/ListStyles";
import Chat from "../components/chat/Chat";

const ChatPage: React.FC = () => {
    const { chatId } = useParams<{ chatId: string }>(); // URL 파라미터에서 chatId 추출
  
    return (
        <PageWrapper>
            <ChatListPageContainer>
                <UserProfileContainer>
                    <UserProfile />
                </UserProfileContainer>
                <ChatContainer>
                    <Chat />
                </ChatContainer>
                <ParticipatedUsersContainer>
                    <h2>Participated Users</h2>
                </ParticipatedUsersContainer>
            </ChatListPageContainer>
        </PageWrapper>
    );
  };
  
  export default ChatPage;
