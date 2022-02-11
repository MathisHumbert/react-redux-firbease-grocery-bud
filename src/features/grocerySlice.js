import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

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

    addGrocery: (state, action) => {
      state.groceries.push({
        id: uniqid(),
        name: action.payload,
      });
      state.inputValue = '';
    },

    deleteGrocery: (state, action) => {
      state.groceries = state.groceries.filter(
        (item) => item.id !== action.payload
      );
    },

    setEdit: (state, action) => {
      state.edit = true;
      state.editId = action.payload.id;
      state.inputValue = action.payload.name;
    },

    editGrocery: (state, action) => {
      state.groceries.map((item) => {
        if (item.id === action.payload) {
          item.name = state.inputValue;
        }
      });

      state.inputValue = '';
      state.edit = false;
      state.editId = '';
    },

    clearGrocery: (state) => {
      state.groceries = [];
    },
  },
});

export const {
  setInputValue,
  addGrocery,
  deleteGrocery,
  setEdit,
  editGrocery,
  clearGrocery,
} = grocerySlice.actions;

export default grocerySlice.reducer;
