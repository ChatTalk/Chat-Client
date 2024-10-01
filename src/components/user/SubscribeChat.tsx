import { useEffect, useState } from "react";
import { ChatCardContainer, OpenChatListContainer } from "../../styles/ChatListStyles";
import { useNavigate } from "react-router-dom";
import { setChat } from '../../redux/chatSlice';
import { useAppDispatch } from "../../redux/hooks";
import { getSubscribedOpenChats } from "../../api/ChatApi";

interface ChatInfo {
    chatId: string;
    title: string;
    openUsername: string;
    maxPersonnel: number;
}

const SubscribeChat: React.FC = () => {
    const [chats, setChats] = useState<ChatInfo[]>([]);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchSubscribeChats = async () => {
            try {
                const response = await getSubscribedOpenChats();
                const chats: ChatInfo[] = response.data;
                setChats(chats);
            } catch (error) {
                console.error('Error fetching chats:', error);
            }
        };

        fetchSubscribeChats();
    })

    const handleChatClick = (chat: ChatInfo) => {
        dispatch(setChat(chat)); // 클릭한 채팅 데이터를 리덕스 상태에 저장
        localStorage.setItem("chat", JSON.stringify(chat))
        navigate(`/chat/${chat.chatId}`);
    };

    return (
        <OpenChatListContainer>
            {chats.map((chat) => (
                <ChatCardContainer key={chat.chatId} onClick={() => handleChatClick(chat)}>
                    <h4>{chat.title}</h4>
                    <p>Host: {chat.openUsername}</p>
                </ChatCardContainer>
            ))}
        </OpenChatListContainer>
    )
}

export default SubscribeChat;