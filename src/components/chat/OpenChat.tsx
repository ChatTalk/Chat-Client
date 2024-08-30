import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { clearChat, setChat } from '../../redux/chatSlice';
import { ChatCreateButtonContainer, OpenChatListContainer, ChatCardContainer, StyledButton } from '../../styles/ChatListStyles';
import { createOpenChat, getAllOpenChats } from '../../api/ChatApi';

interface ChatInfo {
    chatId: string;
    title: string;
    openUsername: string;
    maxPersonnel: number;
}
  
const OpenChat: React.FC = () => {
    const [chats, setChats] = useState<ChatInfo[]>([]);
    const navigate = useNavigate();
    const dispatch = useAppDispatch(); // 디스패치 훅 사용

    useEffect(() => {
        const fetchChats = async () => {
            try {
                const response = await getAllOpenChats();
                const chats: ChatInfo[] = response.data;
                setChats(chats);
            } catch (error) {
                console.error('Error fetching chats:', error);
            }
        };

        dispatch(clearChat());
        fetchChats();
    }, [dispatch]);

    const handleChatClick = (chat: ChatInfo) => {
        dispatch(setChat(chat)); // 클릭한 채팅 데이터를 리덕스 상태에 저장
        localStorage.setItem("chat", JSON.stringify(chat))
        navigate(`/chat/${chat.chatId}`);
    };

    const handleCreateChat = async () => {
        try {
            const title = window.prompt('채팅방 제목을 입력하세요');
            if (!title) {
                alert('채팅방 제목을 입력해야 합니다.');
                return;
            }

            const maxPersonnelString = window.prompt('제한 인원을 입력하세요');
            if (maxPersonnelString === null) {
                alert('제한 인원을 입력해야 합니다.');
                return;
            }

            const maxPersonnel = parseInt(maxPersonnelString, 10);
            if (isNaN(maxPersonnel)) {
                alert('유효한 숫자를 입력해야 합니다.');
                return;
            }

            if (title && maxPersonnel) {
                await createOpenChat({ title, maxPersonnel });
                alert('채팅방이 생성됐습니다.');
            }
        } catch (error) {
            console.error('Error creating chat:', error);
            alert('채팅방 생성 에러');
        }
    };

    return (
        <>
            <OpenChatListContainer>
                {chats.map((chat) => (
                    <ChatCardContainer key={chat.chatId} onClick={() => handleChatClick(chat)}>
                        <h4>{chat.title}</h4>
                        <p>Host: {chat.openUsername}</p>
                        <p>Max Personnel: {chat.maxPersonnel}</p>
                    </ChatCardContainer>
                ))}
            </OpenChatListContainer>
            <ChatCreateButtonContainer>
                <StyledButton onClick={handleCreateChat}>Create Chat Room</StyledButton>
            </ChatCreateButtonContainer>
        </>
    );
};

export default OpenChat;
