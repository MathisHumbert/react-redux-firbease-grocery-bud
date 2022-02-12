import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  alert: false,
  alertType: '',
  alertMsg: '',
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {},
});

export const {} = alertSlice.actions;

export default alertSlice.reducer;
