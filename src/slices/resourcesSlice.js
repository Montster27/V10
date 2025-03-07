// /Users/montysharma/Documents/V10/simplified/src/slices/resourcesSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { RESOURCE_LIMITS } from '../config/gameConstants';
import { calculateResourceChanges, applyResourceChanges } from '../utils/resourceUtils';

const initialState = {
  energy: { current: RESOURCE_LIMITS.energy.initial, max: RESOURCE_LIMITS.energy.max },
  stress: { current: RESOURCE_LIMITS.stress.initial, max: RESOURCE_LIMITS.stress.max },
  money: RESOURCE_LIMITS.money.initial,
  knowledge: RESOURCE_LIMITS.knowledge.initial,
  social: RESOURCE_LIMITS.social.initial,
};

export const resourcesSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {
    updateResources: (state, action) => {
      const changes = action.payload;
      const updatedResources = applyResourceChanges(state, changes);
      
      // Apply the updates to state
      Object.entries(updatedResources).forEach(([key, value]) => {
        state[key] = value;
      });
    },
    applyDailyUpdate: (state, action) => {
      const { timeAllocation } = action.payload;
      const changes = calculateResourceChanges(timeAllocation);
      const updatedResources = applyResourceChanges(state, changes);
      
      // Apply the updates to state
      Object.entries(updatedResources).forEach(([key, value]) => {
        state[key] = value;
      });
    },
    setResourceValue: (state, action) => {
      const { resource, value } = action.payload;
      
      if (resource in state) {
        if (typeof state[resource] === 'object' && 'current' in state[resource]) {
          const min = RESOURCE_LIMITS[resource]?.min || 0;
          const max = state[resource].max;
          state[resource].current = Math.max(min, Math.min(max, value));
        } else {
          const min = RESOURCE_LIMITS[resource]?.min || 0;
          const max = RESOURCE_LIMITS[resource]?.max || Infinity;
          state[resource] = Math.max(min, Math.min(max, value));
        }
      }
    },
    resetResources: () => initialState,
  },
});

export const { updateResources, applyDailyUpdate, setResourceValue, resetResources } = resourcesSlice.actions;

export default resourcesSlice.reducer;
