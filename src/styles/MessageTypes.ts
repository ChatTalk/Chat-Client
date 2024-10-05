export type ChatMessageType = 'ENTER' | 'LEAVE' | 'MESSAGE';

// ChatMessageDTO: Redis를 통해 WebSocket으로 전파되는 메시지
export interface ChatMessageDTO {
    chatId: string;
    type: ChatMessageType;
    username: string;
    message: string;
    createdAt: string;
}

// SendMessageDTO: 사용자가 메시지를 보낼 때
export interface SendMessageDTO {
    chatId: string;
    message: string;
}

// EnterMessageDTO: 사용자가 채팅방에 입장할 때
export interface EnterMessageDTO {
    chatId: string;
}

// LeaveMessageDTO: 사용자가 채팅방에서 퇴장할 때
export interface LeaveMessageDTO {
    chatId: string;
}

// 구독자 관리 현황
export interface UserReadDTO {
    email: string;
    isRead: boolean;
}
