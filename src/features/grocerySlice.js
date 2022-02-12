import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  groceries: [],
  loading: false,
  error: false,
  edit: false,
  editId: '',
  inputValue: '',
};

const grocerySlice = createSlice({
  name: 'grocery',
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },

    resetInputValue: (state) => {
      state.inputValue = '';
    },

    addGrocery: (state, action) => {
      state.groceries = action.payload;
    },

    setEdit: (state, action) => {
      state.edit = true;
      state.editId = action.payload.id;
      state.inputValue = action.payload.name;
    },

    resetEdit: (state) => {
      state.inputValue = '';
      state.edit = false;
      state.editId = '';
    },
  },
});

export const {
  setInputValue,
  resetInputValue,
  addGrocery,
  setEdit,
  resetEdit,
} = grocerySlice.actions;

export default grocerySlice.reducer;
