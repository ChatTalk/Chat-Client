import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import chatReducer from './chatSlice';
import userReadReducer from './userReadSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    userRead: userReadReducer
  },
});
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;