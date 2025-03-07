// /Users/montysharma/Documents/V10/simplified/src/slices/timeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  day: 1,
  date: new Date('1983-09-01'),
  paused: true,
  lastUpdate: Date.now(),
};

export const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    advanceDay: (state) => {
      state.day += 1;
      const newDate = new Date(state.date);
      newDate.setDate(newDate.getDate() + 1);
      state.date = newDate;
      state.lastUpdate = Date.now();
    },
    togglePause: (state) => {
      state.paused = !state.paused;
      state.lastUpdate = Date.now();
    },
    setPaused: (state, action) => {
      state.paused = action.payload;
      state.lastUpdate = Date.now();
    },
    resetTime: () => initialState,
  },
});

export const { advanceDay, togglePause, setPaused, resetTime } = timeSlice.actions;

export default timeSlice.reducer;
