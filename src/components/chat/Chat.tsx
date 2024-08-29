import React from "react";
import { ChatInputContainer, ChatMessagesContainer } from "../../styles/ChatStyles"

const Chat: React.FC = () => {
    return (
        <>
            <ChatMessagesContainer>
            {/* 여기에 메시지 리스트를 표시 */}
            </ChatMessagesContainer>
            <ChatInputContainer>
                <input type="text" placeholder="Type your message..." />
                <button>Send</button>
            </ChatInputContainer>
        </>
    )
}

export default Chat