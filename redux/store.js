import { configureStore } from '@reduxjs/toolkit';
import teamSlice from './features/teamSlice';

export const store = configureStore({
  reducer: {
    teams: teamSlice,
  },
});