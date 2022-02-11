import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  groceries: [],
  loading: false,
  error: false,
};

const grocerySlice = createSlice({
  name: 'grocery',
  initialState,
  reducers: {},
});

export default grocerySlice.reducer;
