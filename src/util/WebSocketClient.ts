import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const SOCKET_ENDPOINT = '/stomp/chat'; // 웹소켓 엔드포인트
const CHAT_DESTINATION = '/sub/chat'; // 웹소켓 구독 주소

let client: Client | null = null;

export const initializeWebSocketClient = (onMessageReceived: (message: any) => void) => {
    client = new Client({
        brokerURL: SOCKET_ENDPOINT,
        connectHeaders: {},
        debug: (str) => console.log(str),
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        onConnect: () => {
            console.log('웹소켓 연결됨');
            client?.subscribe(CHAT_DESTINATION, (message) => {
                if (message.body) {
                    onMessageReceived(JSON.parse(message.body));
                }
            });
        },
        onStompError: (frame) => {
            console.error('브로커로부터 에러 보고:', frame.headers['message']);
            console.error('추가 에러 관련 내용:', frame.body);
        },
        webSocketFactory: () => new SockJS(SOCKET_ENDPOINT),
    });
    
    client.activate();
};

export const sendMessage = (destination: string, body: any) => {
    if (client && client.connected) {
        client.publish({ destination, body: JSON.stringify(body) });
    } else {
        console.warn('웹소켓 클라이언트 연결이 안 되어 있음');
    }
};
