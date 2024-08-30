import React, { ChangeEvent, useEffect, useState } from "react";
import { ChatInputContainer, ChatMessagesContainer } from "../../styles/ChatStyles"
import ChatMessageList from "./ChatMessageList";
import { useAppSelector } from '../../redux/hooks';
// import { dummyMessages } from "../../util/Dummys";
import { deactivate, initializeWebSocketClient, sendMessage } from "../../util/WebSocketClient";
import { ChatMessageDTO } from "../../styles/MessageTypes";
import { RootState } from "../../redux/store";

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessageDTO[]>([]);
    const [inputMessage, setInputMessage] = useState<string>("");
    const chatId = useAppSelector((state: RootState) => state.chat.chatId);
    // const username = useAppSelector((state: RootState) => state.user.email);

    useEffect(() => {
        const stompClient = initializeWebSocketClient(chatId, (message: ChatMessageDTO) => {
            console.log("받은 메세지: " + message.message)
            setMessages(prevMessages => [...prevMessages, message]);
        });

        return () => {
            deactivate();
        };
    }, [chatId]);

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            sendMessage(chatId, inputMessage);
            setInputMessage("");
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputMessage(e.target.value);
    };
    
    return (
        <>
            <ChatMessagesContainer>
            {/* 여기에 메시지 리스트를 표시 */}
                <ChatMessageList messages={messages} />
            </ChatMessagesContainer>
            <ChatInputContainer>
                <input
                    type="text"
                    value={inputMessage}
                    onChange={handleChange}
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </ChatInputContainer>
        </>
    )
}

export default Chat