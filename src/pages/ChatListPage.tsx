import UserProfile from "../components/user/UserProfile";
import { ChatListContainer, ChatListPageContainer, SubscribedChatListContainer, UserProfileContainer } from "../styles/ListStyles";

const ChatListPage: React.FC = () => {

    return (
        <ChatListPageContainer>
            <UserProfileContainer>
                <UserProfile />
            </UserProfileContainer>
            <ChatListContainer>
                <h2>Chat List</h2>
                {/* ChatList 컴포넌트 자리 */}
            </ChatListContainer>
            <SubscribedChatListContainer>
                <h2>Subscribed Chat List</h2>
                {/* SubscribedChatList 컴포넌트 자리 */}
            </SubscribedChatListContainer>
        </ChatListPageContainer>
    )
}

export default ChatListPage;