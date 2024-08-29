import React, { useState } from "react";
import { ChatInputContainer, ChatMessagesContainer } from "../../styles/ChatStyles"
import ChatMessageList from "./ChatMessageList";
import { ChatMessageDTO } from "../../styles/MessageTypes";

const Chat: React.FC = () => {
    const dummyMessages: ChatMessageDTO[] = [
        {
            chatId: "1",
            type: "ENTER",
            username: "User1",
            message: "User1 님이 입장하셨습니다.",
            createdAt: new Date().toISOString(),
        },
        {
            chatId: "1",
            type: "MESSAGE",
            username: "User2",
            message: "안녕하세요!",
            createdAt: new Date().toISOString(),
        },
        {
            chatId: "1",
            type: "LEAVE",
            username: "User3",
            message: "User3 님이 퇴장하셨습니다.",
            createdAt: new Date().toISOString(),
        },
        {
            chatId: "1",
            type: "LEAVE",
            username: "User3",
            message: "User3 님이 퇴장하셨습니다.",
            createdAt: new Date().toISOString(),
        },
    ];

    // const [messages, setMessages] = useState<ChatMessageDTO[]>(dummyMessages);

    return (
        <>
            <ChatMessagesContainer>
            {/* 여기에 메시지 리스트를 표시 */}
                <ChatMessageList messages={dummyMessages} />
            </ChatMessagesContainer>
            <ChatInputContainer>
                <input type="text" placeholder="Type your message..." />
                <button>Send</button>
            </ChatInputContainer>
        </>
    )
}

export default Chat