import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: '',
    id: '',
  },
  userLoggedIn: false,
  login: true,
  alertUser: false,
  alertUserMsg: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleLogin: (state) => {
      state.login = !state.login;
    },

    setUser: (state, action) => {
      const { name, id } = action.payload;
      state.user = {
        name,
        id,
      };
      state.userLoggedIn = true;
    },

    resetUser: (state) => {
      state.user = {
        name: '',
        id: '',
      };
      state.userLoggedIn = false;
    },
  },
});

export const { toggleLogin, setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
