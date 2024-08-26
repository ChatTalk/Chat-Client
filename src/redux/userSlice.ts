import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signIn, signOut } from '../api/api'; 

interface UserState {
  email: string | null;
  phone: string | null;
  role: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  email: null,
  phone: null,
  role: null,
  status: 'idle',
  error: null,
};

export const loginUser = createAsyncThunk(
  'user/login',
  async (userData: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await signIn(userData);
      const { user } = response.data;
      localStorage.setItem('user', JSON.stringify(user));
      alert("로그인 성공");
      return user; 
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || '로그인 실패');
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await signOut();
      localStorage.removeItem('user');
      alert("로그아웃 성공");
      return;
    } catch (error: any) {
      return rejectWithValue('로그아웃 실패');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initializeUser(state, action) {
      const user = action.payload;
      state.email = user.email ?? null;
      state.phone = user.phone ?? null;
      state.role = user.role ?? null;
      state.status = 'succeeded';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.email = action.payload.email;
        state.phone = action.payload.phone;
        state.role = action.payload.role;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.email = null;
        state.phone = null;
        state.role = null;
        state.status = 'idle';
      });
  },
});

export const { initializeUser } = userSlice.actions;
export default userSlice.reducer;
