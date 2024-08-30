import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { ChatMessageDTO } from '../styles/MessageTypes';

let stompClient: any = null;

let endpoint: string | undefined = process.env.REACT_APP_API_BASE_URL
endpoint = endpoint?.slice(0, -4)

export const initializeWebSocketClient = (
    chatId: string,
    onMessage: (message: ChatMessageDTO) => void
) => {
    const sockJs = new SockJS(endpoint + '/stomp/chat');
    stompClient = Stomp.over(sockJs);

    // 쿠키에서 토큰 추출
    const accessToken = document.cookie.split('Bearer%20')[1];
    
    stompClient.connect(
        { Authorization: `Bearer ${accessToken}` },
        () => {
            stompClient.subscribe(`/sub/chat/${chatId}`, (chat: any) => {
                const message = JSON.parse(chat.body);
                onMessage(message);
            });

            stompClient.send(
                '/send/chat/enter',
                {},
                JSON.stringify({
                    chatId: chatId
                })
            );
        }
    );

    return stompClient;
};

export const sendMessage = (
    chatId: string,
    message: string
) => {
    if (stompClient) {
        stompClient.send(
            '/send/chat/message',
            {},
            JSON.stringify({
                chatId: chatId,
                message: message
            })
        );
    }
};

export const deactivate = (chatId: string) => {
    if (stompClient) {
        stompClient.send(
            '/send/chat/leave',
            {},
            JSON.stringify({
                chatId: chatId
            })
        );

        stompClient.disconnect();
        localStorage.removeItem("chat")
    }
};