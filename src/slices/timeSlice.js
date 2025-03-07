// /Users/montysharma/Documents/V10/simplified/src/slices/timeSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { GAME_START_DATE } from '../config/gameConstants';
import { advanceDateByDays } from '../utils/timeUtils';

const initialState = {
  day: 1,
  date: new Date(GAME_START_DATE),
  paused: true,
  lastUpdate: Date.now(),
};

export const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    advanceDay: (state) => {
      state.day += 1;
      state.date = advanceDateByDays(state.date, 1);
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
    setGameDay: (state, action) => {
      const { day, date } = action.payload;
      state.day = day;
      state.date = new Date(date);
      state.lastUpdate = Date.now();
    },
    resetTime: () => initialState,
  },
});

export const { advanceDay, togglePause, setPaused, setGameDay, resetTime } = timeSlice.actions;

export default timeSlice.reducer;
