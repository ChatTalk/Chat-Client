import React from "react";
import { ChatMessageDTO } from "../../styles/MessageTypes";
import { MessageCardContainer, Timestamp } from "../../styles/MessageStyles";

interface ChatMessageCardProps {
    message: ChatMessageDTO;
}

const ChatMessage: React.FC<ChatMessageCardProps> = ({ message }) => {

    return (
        <MessageCardContainer>
            <p>{message.message}</p>
            <Timestamp>{new Date(message.createdAt).toLocaleTimeString()}</Timestamp>
        </MessageCardContainer>
    );
};

export default ChatMessage;