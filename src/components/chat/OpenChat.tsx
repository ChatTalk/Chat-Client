import React from 'react';
import { ChatCreateButtonContainer, OpenChatListContainer } from '../../styles/ChatListStyles';

const OpenChat: React.FC = () => {
    return <>
        <OpenChatListContainer />
        <ChatCreateButtonContainer />
    </>
}

export default OpenChat;