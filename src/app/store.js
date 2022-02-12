import { configureStore } from '@reduxjs/toolkit';
import groceryReducer from '../features/grocerySlice';
import userReducer from '../features/userSlice';
import alertReducer from '../features/alertSlice';

const store = configureStore({
  reducer: {
    grocery: groceryReducer,
    user: userReducer,
    alert: alertReducer,
  },
});

export default store;
