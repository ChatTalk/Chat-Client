import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { ChatMessageDTO } from '../styles/MessageTypes';

interface UserReadDTO {
    email: string;
    isRead: boolean;
}

let stompClient: any = null;
let particpantStompClient:any = null;

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


export const initializeParticipantClient = (
    chatId: string,
    onMessage: (message: UserReadDTO[]) => void
) => {
    const sockJs = new SockJS(endpoint + `/stomp/participant`);
    particpantStompClient = Stomp.over(sockJs);

    // 쿠키에서 토큰 추출
    // const accessToken = document.cookie.split('Bearer%20')[1];

    particpantStompClient.connect(
        // { Authorization: `Bearer ${accessToken}` },
        {}, // 빈 헤더라도 넘겨줘야 함
        () => {
            particpantStompClient.subscribe(`/sub/participant/${chatId}`, (participants: any) => {
                const message = JSON.parse(participants.body);
                onMessage(message);
            });
        }
    );

    return particpantStompClient;
};

export const justLeave = (chatId: string) => {
    if (stompClient) {
        stompClient.disconnect();
        localStorage.removeItem("chat")
    }

    if (particpantStompClient) {
        particpantStompClient.disconnect();
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

    if (particpantStompClient) {
        particpantStompClient.disconnect();
    }
};