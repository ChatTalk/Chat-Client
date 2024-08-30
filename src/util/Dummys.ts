import { ChatMessageDTO } from "../styles/MessageTypes";

export const dummyMessages: ChatMessageDTO[] = [
    {
        chatId: "1",
        type: "ENTER",
        username: "User1",
        message: "User1 님이 입장하셨습니다.",
        createdAt: new Date().toISOString(),
    },
    {
        chatId: "1",
        type: "MESSAGE",
        username: "User2",
        message: "안녕하세요!",
        createdAt: new Date().toISOString(),
    },
    {
        chatId: "1",
        type: "LEAVE",
        username: "User3",
        message: "User3 님이 퇴장하셨습니다.",
        createdAt: new Date().toISOString(),
    },
    {
        chatId: "1",
        type: "LEAVE",
        username: "User3",
        message: "User3 님이 퇴장하셨습니다.",
        createdAt: new Date().toISOString(),
    },
];