import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  userLoggedIn: false,
  login: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleLogin: (state) => {
      state.login = !state.login;
    },
  },
});

export const { toggleLogin } = userSlice.actions;

export default userSlice.reducer;
