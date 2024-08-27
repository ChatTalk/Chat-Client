import React, { useEffect, useState } from 'react';
import { ChatCreateButtonContainer, OpenChatListContainer } from '../../styles/ChatListStyles';
import { createOpenChat, getAllOpenChats } from '../../api/ChatApi';

interface ChatInfo {
    title: string;
    openUsername: string;
    maxPersonnel: number;
  }
  
  const OpenChat: React.FC = () => {
      const [chats, setChats] = useState<ChatInfo[]>([]);
  
      useEffect(() => {
          const fetchChats = async () => {
              try {
                  const response = await getAllOpenChats();
                  setChats(response.data);
              } catch (error) {
                  console.error('Error fetching chats:', error);
              }
          };
  
          fetchChats();
      }, []);
  
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
                  {chats.map((chat, index) => (
                      <div key={index}>
                          <h4>{chat.title}</h4>
                          <p>Host: {chat.openUsername}</p>
                          <p>Max Personnel: {chat.maxPersonnel}</p>
                      </div>
                  ))}
              </OpenChatListContainer>
              <ChatCreateButtonContainer>
                  <button onClick={handleCreateChat}>Create Chat Room</button>
              </ChatCreateButtonContainer>
          </>
      );
  };
  
  export default OpenChat;