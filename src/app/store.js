import { configureStore } from '@reduxjs/toolkit';
import groceryReducer from '../features/grocerySlice';

const store = configureStore({
  reducer: {
    grocery: groceryReducer,
  },
});

export default store;
