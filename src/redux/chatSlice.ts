import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
    chatId: string;
    title: string;
    openUsername: string;
    maxPersonnel: number;
}

const savedChat = localStorage.getItem("chat");
const initialState: ChatState = savedChat ? JSON.parse(savedChat) : {
    chatId: '',
    title: '',
    openUsername: '',
    maxPersonnel: 0,
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setChat(state, action: PayloadAction<ChatState>) {
            state.chatId = action.payload.chatId;
            state.title = action.payload.title;
            state.openUsername = action.payload.openUsername;
            state.maxPersonnel = action.payload.maxPersonnel;

            localStorage.setItem("chat", JSON.stringify(state));
        },
        clearChat(state) {
            state.chatId = '';
            state.title = '';
            state.openUsername = '';
            state.maxPersonnel = 0;

            localStorage.removeItem("chat");
        },
    },
});

export const { setChat, clearChat } = chatSlice.actions;
export default chatSlice.reducer;
