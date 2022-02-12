import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  alert: false,
  alertType: '',
  alertMsg: '',
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    startAlert: (state, action) => {
      state.alert = true;
      state.alertType = action.payload.type;
      state.alertMsg = action.payload.msg;
    },

    stopAlert: (state) => {
      state = initialState;
    },
  },
});

export const { startAlert, stopAlert } = alertSlice.actions;

export default alertSlice.reducer;
