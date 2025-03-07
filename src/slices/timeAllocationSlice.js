// /Users/montysharma/Documents/V10/simplified/src/slices/timeAllocationSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_TIME_ALLOCATION } from '../config/gameConstants';

const initialState = { ...DEFAULT_TIME_ALLOCATION };

export const timeAllocationSlice = createSlice({
  name: 'timeAllocation',
  initialState,
  reducers: {
    updateAllocation: (state, action) => {
      const { activity, value } = action.payload;
      if (activity in state) {
        state[activity] = Math.max(0, Math.min(100, value));
      }
    },
    updateMultipleAllocations: (state, action) => {
      const allocations = action.payload;
      Object.entries(allocations).forEach(([activity, value]) => {
        if (activity in state) {
          state[activity] = Math.max(0, Math.min(100, value));
        }
      });
    },
    normalizeAllocations: (state) => {
      const total = Object.values(state).reduce((sum, val) => sum + val, 0);
      
      if (total === 0) {
        // If all values are 0, reset to default
        return { ...DEFAULT_TIME_ALLOCATION };
      }
      
      if (total !== 100) {
        // Scale all values to sum to 100
        const scale = 100 / total;
        for (const key in state) {
          state[key] = Math.round(state[key] * scale);
        }
        
        // Adjust for rounding errors
        const newTotal = Object.values(state).reduce((sum, val) => sum + val, 0);
        if (newTotal !== 100) {
          const diff = 100 - newTotal;
          // Find the largest allocation to adjust
          let largest = Object.keys(state).reduce((a, b) => state[a] > state[b] ? a : b);
          state[largest] += diff;
        }
      }
    },
    resetAllocations: () => initialState,
  },
});

export const { 
  updateAllocation, 
  updateMultipleAllocations,
  normalizeAllocations, 
  resetAllocations 
} = timeAllocationSlice.actions;

export default timeAllocationSlice.reducer;
