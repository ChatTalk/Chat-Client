import React from "react";
import UserProfile from "../components/user/UserProfile";
import { ChatContainer, UserProfileContainer, ParticipatedUsersContainer, Header } from "../styles/ChatStyles";
// import { useParams } from "react-router-dom";
import { ChatListPageContainer, PageWrapper } from "../styles/ListStyles";
import Chat from "../components/chat/Chat";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const ChatPage: React.FC = () => {
    // const { chatId } = useParams<{ chatId: string }>(); // URL 파라미터에서 chatId 추출
    const chat = useSelector((state: RootState) => state.chat);
    
    return (
        <PageWrapper>
            <ChatListPageContainer>
                <UserProfileContainer>
                    <UserProfile />
                </UserProfileContainer>
                <ChatContainer>
                    <Header>
                        <div>
                            <h2>{chat.title}</h2>
                            <p>Host: {chat.openUsername}</p>
                        </div>
                        <div>
                            <button>Go to List</button>
                        </div>
                    </Header>
                    <Chat />
                </ChatContainer>
                <ParticipatedUsersContainer>
                    <h2>Participated Users</h2>
                    <p>Max Personnel: {chat.maxPersonnel}</p>
                </ParticipatedUsersContainer>
            </ChatListPageContainer>
        </PageWrapper>
    );
  };
  
  export default ChatPage;
