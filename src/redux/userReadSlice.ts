import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserReadDTO } from '../styles/MessageTypes';

interface UserReadState {
  userReadList: UserReadDTO[];
}

const initialState: UserReadState = {
  userReadList: [],
};

const userReadSlice = createSlice({
  name: 'userRead',
  initialState,
  reducers: {
    updateUserReadList(state, action: PayloadAction<UserReadDTO[]>) {
      state.userReadList = action.payload;
    },
  },
});

export const { updateUserReadList } = userReadSlice.actions;
export default userReadSlice.reducer;
