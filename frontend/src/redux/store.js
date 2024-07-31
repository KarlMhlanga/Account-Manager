import { configureStore } from '@reduxjs/toolkit';
import telecomReducer from './reducer';

export const store = configureStore({
  reducer: {
    telecom: telecomReducer,
  },
});
