import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

interface UserReadDTO {
    email: string;
    isRead: boolean;
}

let stompClient: any = null;

let endpoint: string | undefined = process.env.REACT_APP_API_BASE_URL
endpoint = endpoint?.slice(0, -4)

export const initializeWebSocketClient = (
    chatId: string,
    onMessage: (message: UserReadDTO[]) => void
) => {
    const sockJs = new SockJS(endpoint + `/stomp/participant`);
    stompClient = Stomp.over(sockJs);

    // 쿠키에서 토큰 추출
    // const accessToken = document.cookie.split('Bearer%20')[1];

    stompClient.connect(
        // { Authorization: `Bearer ${accessToken}` },
        {}, // 빈 헤더라도 넘겨줘야 함
        () => {
            stompClient.subscribe(`/sub/participant/${chatId}`, (participants: any) => {
                const message = JSON.parse(participants.body);
                onMessage(message);
            });
        }
    );

    return stompClient;
};