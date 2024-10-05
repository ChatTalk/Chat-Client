import { useEffect, useState } from "react";
import { RootState } from "../../redux/store";
import { useAppSelector } from "../../redux/hooks";
import { ReadUsersContainer, ParticipantContainer } from "../../styles/ChatStyles";
// import { EventSourcePolyfill } from "event-source-polyfill";

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

    const { readParticipants, unreadParticipants } = participants.reduce((acc, participant) => {
        if (participant.isRead) {
            acc.readParticipants.push(participant);
        } else {
            acc.unreadParticipants.push(participant);
        }
        return acc;
    }, { readParticipants: [] as UserReadDTO[], unreadParticipants: [] as UserReadDTO[] });

    return (
        <ReadUsersContainer>
            <p>Participants</p>
            {readParticipants.map((user, index) => (
                <ParticipantContainer key={index} isRead={user.isRead}>
                    {user.email}
                </ParticipantContainer>
            ))}

            <p>Non Participants</p>
            {unreadParticipants.map((user, index) => (
                <ParticipantContainer key={index} isRead={user.isRead}>
                    {user.email}
                </ParticipantContainer>
            ))}
        </ReadUsersContainer>
    );
}

export default ChatParticipants;