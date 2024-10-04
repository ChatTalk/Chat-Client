import { useEffect, useState } from "react";
import { RootState } from "../../redux/store";
import { useAppSelector } from "../../redux/hooks";
import { ReadUsersContainer, ParticipantContainer } from "../../styles/ChatStyles";
import { EventSourcePolyfill } from "event-source-polyfill";

interface UserReadDTO {
    email: string;
    isRead: boolean;
}

const ChatParticipants :React.FC = () => {
    const [participants, setParticipants] = useState<UserReadDTO[]>([]);

    const chat = useAppSelector((state: RootState) => state.chat);

    // const accessTokenValue = document.cookie.split('Bearer%20')[1];
    // const accessToken = 'Bearer%20' + accessTokenValue;

    useEffect(() => {
        const eventSource = new EventSource(
            `${process.env.REACT_APP_API_BASE_URL}/participants/${chat.chatId}`,
            {
                withCredentials: true
            }
        );

        eventSource.onmessage = (event) => {
            const updateParticipants = JSON.parse(event.data);
            console.log("SSE 데이터: " + updateParticipants);
            setParticipants(updateParticipants)
        }

        eventSource.onerror = (error) => {
            console.error('EventSource failed:', error);
            eventSource.close(); // 에러 발생 시 연결 종료
        };

        return () => {
            eventSource.close(); // 컴포넌트 언마운트 시 연결 종료
        };
    }, [chat]);

    const sortedParticipants = participants.sort((a, b) => (a.isRead === b.isRead ? 0 : a.isRead ? -1 : 1));


    return (
        <ReadUsersContainer>
            {sortedParticipants.map((user, index) => (
                <ParticipantContainer key={index} isRead={user.isRead}>
                    {user.email}
                </ParticipantContainer>
            ))}
        </ReadUsersContainer>
    )
}

export default ChatParticipants;