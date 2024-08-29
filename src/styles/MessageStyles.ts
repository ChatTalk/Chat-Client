import { styled } from "styled-components";

export const MessagesContainer = styled.div`
    max-height: 500px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export const MessageCardContainer = styled.div`
    padding: 10px;
    margin: 5px 0;
    border-radius: 8px;
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
`;

export const Timestamp = styled.span`
    font-size: 12px;
    color: #888;
    align-self: flex-end;
`;
