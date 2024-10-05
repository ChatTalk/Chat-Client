import OpenChat from "../components/chat/OpenChat";
import SubscribeChat from "../components/user/SubscribeChat";
import UserProfile from "../components/user/UserProfile";
import { ChatListContainer, ChatListPageContainer, PageWrapper, SubscribedChatListContainer, UserProfileContainer } from "../styles/ListStyles";

const ChatListPage: React.FC = () => {

    return (
        <PageWrapper>
            <ChatListPageContainer>
                <UserProfileContainer>
                    <UserProfile />
                </UserProfileContainer>
                <ChatListContainer>
                    <h2>Chat List</h2>
                    <OpenChat />
                </ChatListContainer>
                <SubscribedChatListContainer>
                    <h2>Subscribed</h2>
                    <SubscribeChat />
                </SubscribedChatListContainer>
            </ChatListPageContainer>
        </PageWrapper>
    )
}

export default ChatListPage;