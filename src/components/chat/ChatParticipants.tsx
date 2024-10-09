import { useEffect, useState } from "react";
import { RootState } from "../../redux/store";
import { useAppSelector } from "../../redux/hooks";
import { ReadUsersContainer, ParticipantContainer } from "../../styles/ChatStyles";
import { initializeParticipantClient } from "../../util/WebSocketClient";
// import { EventSourcePolyfill } from "event-source-polyfill";

interface UserReadDTO {
    email: string;
    isRead: boolean;
}

const ChatParticipants :React.FC = () => {
    const [participants, setParticipants] = useState<UserReadDTO[]>([]);
    const chat = useAppSelector((state: RootState) => state.chat);

    useEffect(() => {
        initializeParticipantClient(chat.chatId, (message: UserReadDTO[]) => {
            setParticipants(message);
        });

    }, [chat]);

    console.log("받아온 데이터: " + participants);
    console.log("배열이긴 해?: "+ Array.isArray(participants));
    const participantList = Array.isArray(participants) ? participants : [];

    const { readParticipants, unreadParticipants } = participantList.reduce((acc, participant) => {
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