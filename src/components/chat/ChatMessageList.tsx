import React from "react";
import { ChatMessageDTO } from "../../styles/MessageTypes";
import { MessagesContainer } from "../../styles/MessageStyles";
import ChatMessage from "./ChatMessage";

interface ChatMessagesProps {
    messages: ChatMessageDTO[];
}

const ChatMessageList: React.FC<ChatMessagesProps> = ({ messages }) => {
    return (
        <MessagesContainer>
            {messages.map((message, index) => (
                <ChatMessage key={index} message={message} />
            ))}
        </MessagesContainer>
    );
};

export default ChatMessageList;