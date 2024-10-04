import { styled } from "styled-components";

export const MessagesContainer = styled.div`
    max-height: 500px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

// export const MessageCardContainer = styled.div`
//     padding: 10px;
//     margin: 5px 0;
//     border-radius: 8px;
//     background-color: #f1f1f1;
//     display: flex;
//     flex-direction: column;
// `;


export const MessageCardContainer = styled.div<{ isOwnMessage: boolean, isMessageType: boolean }>`
    padding: 10px;
    margin: 5px 0;
    border-radius: 8px;
    background-color: ${({ isOwnMessage, isMessageType }) => 
        isMessageType 
            ? isOwnMessage 
                ? "#DCF8C6"  // 본인 메시지의 배경색 (연한 초록색)
                : "#ffffff"  // 상대방 메시지의 배경색 (흰색)
            : "#f1f1f1" // 입장/퇴장 메시지의 배경색 (회색)
    };
    align-self: ${({ isOwnMessage, isMessageType }) => 
        isMessageType && isOwnMessage 
            ? "flex-end"  // 본인 메시지는 오른쪽 정렬
            : "flex-start" // 상대방 메시지는 왼쪽 정렬
    };
    max-width: 60%;
    display: flex;
    flex-direction: column;
    border: ${({ isOwnMessage, isMessageType }) => 
        isMessageType 
            ? isOwnMessage 
                ? "1px solid #99D18F"  // 본인 메시지의 테두리색
                : "1px solid #ddd" // 상대방 메시지의 테두리색
            : "none"
    };
`;

export const Timestamp = styled.span`
    font-size: 0.75rem;
    color: #999;
    margin-top: 5px;
    align-self: flex-end;
`;

export const SystemMessage = styled.div`
    font-size: 0.85rem;
    color: #555;
    text-align: center;
    margin: 10px 0;
`;

// export const Timestamp = styled.span`
//     font-size: 12px;
//     color: #888;
//     align-self: flex-end;
// `;
