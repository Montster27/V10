// /Users/montysharma/Documents/V10/simplified/src/store.js
import { configureStore } from '@reduxjs/toolkit';
import resourcesReducer from './slices/resourcesSlice';
import timeReducer from './slices/timeSlice';
import eventsReducer from './slices/eventsSlice';
import skillsReducer from './slices/skillsSlice';
import timeAllocationReducer from './slices/timeAllocationSlice';

export const store = configureStore({
  reducer: {
    resources: resourcesReducer,
    time: timeReducer,
    events: eventsReducer,
    skills: skillsReducer,
    timeAllocation: timeAllocationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
