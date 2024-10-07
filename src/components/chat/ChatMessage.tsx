import React from "react";
import { ChatMessageDTO } from "../../styles/MessageTypes";
import { MessageCardContainer, SystemMessage, Timestamp } from "../../styles/MessageStyles";

interface ChatMessageCardProps {
    message: ChatMessageDTO;
}

const ChatMessage: React.FC<ChatMessageCardProps> = ({ message }) => {
    const localUser = JSON.parse(localStorage.getItem('user') || '{}');
    const isOwnMessage = localUser.email
    const isMessageType = message.type === "MESSAGE";

    // 입장/퇴장 메시지 처리
    if (message.type === "ENTER") {
        return <SystemMessage>{`${message.username}님이 입장하셨습니다.`}</SystemMessage>;
    }

    if (message.type === "LEAVE") {
        return <SystemMessage>{`${message.username}님이 퇴장하셨습니다.`}</SystemMessage>;
    }

    return (
        <MessageCardContainer isOwnMessage={isOwnMessage} isMessageType={isMessageType}>  
            {isMessageType && (
                <>
                    <h4>{message.username}</h4>
                    <p>{message.message}</p>
                    <Timestamp>{new Date(message.createdAt).toLocaleTimeString()}</Timestamp>
                </>
            )}
        </MessageCardContainer>
    );
};

export default ChatMessage;