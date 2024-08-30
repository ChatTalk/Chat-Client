import React, { ChangeEvent, useEffect, useState } from "react";
import { ChatInputContainer, ChatMessagesContainer } from "../../styles/ChatStyles"
import ChatMessageList from "./ChatMessageList";
import { useAppSelector } from '../../redux/hooks';
import { deactivate, initializeWebSocketClient, sendMessage } from "../../util/WebSocketClient";
import { ChatMessageDTO } from "../../styles/MessageTypes";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";


const Chat: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessageDTO[]>([]);
    const [inputMessage, setInputMessage] = useState<string>("");

    const chat = useAppSelector((state: RootState) => state.chat);
    const navigate = useNavigate()

    useEffect(() => {
        initializeWebSocketClient(chat.chatId, (message: ChatMessageDTO) => {
            console.log("받은 메세지: " + message.message)
            setMessages(prevMessages => [...prevMessages, message]);
        });

    }, [chat]);

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            sendMessage(chat.chatId, inputMessage);
            setInputMessage("");
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputMessage(e.target.value);
    };

    const handleLeave = () => {
        deactivate(chat.chatId);
        localStorage.removeItem("chat");
        navigate("/")
    }
    
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
                <button onClick={handleLeave}>Leave</button>
            </ChatInputContainer>
        </>
    )
}

export default Chat