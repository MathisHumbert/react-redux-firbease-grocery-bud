import { configureStore } from '@reduxjs/toolkit';
import groceryReducer from '../features/grocerySlice';
import userReducer from '../features/userSlice';

const store = configureStore({
  reducer: {
    grocery: groceryReducer,
    user: userReducer,
  },
});

export default store;
