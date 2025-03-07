// /Users/montysharma/Documents/V10/simplified/src/slices/resourcesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  energy: { current: 100, max: 100 },
  stress: { current: 0, max: 100 },
  money: 500,
  knowledge: 0,
  social: 50,
};

export const resourcesSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {
    updateResources: (state, action) => {
      const { energy, stress, money, knowledge, social } = action.payload;
      
      if (energy !== undefined) {
        state.energy.current = Math.max(0, Math.min(state.energy.max, state.energy.current + energy));
      }
      
      if (stress !== undefined) {
        state.stress.current = Math.max(0, Math.min(state.stress.max, state.stress.current + stress));
      }
      
      if (money !== undefined) {
        state.money = Math.max(0, state.money + money);
      }
      
      if (knowledge !== undefined) {
        state.knowledge = Math.max(0, state.knowledge + knowledge);
      }
      
      if (social !== undefined) {
        state.social = Math.max(0, state.social + social);
      }
    },
    applyDailyUpdate: (state, action) => {
      const { timeAllocation } = action.payload;
      
      // Example resource updates based on time allocation
      const energyChange = 
        -timeAllocation.study * 0.2 +
        -timeAllocation.work * 0.3 +
        -timeAllocation.social * 0.1 +
        timeAllocation.rest * 0.5 +
        -timeAllocation.exercise * 0.2;
      
      const stressChange = 
        timeAllocation.study * 0.2 +
        timeAllocation.work * 0.3 +
        -timeAllocation.social * 0.1 +
        -timeAllocation.rest * 0.3 +
        -timeAllocation.exercise * 0.2;
      
      const moneyChange = timeAllocation.work * 5;
      const knowledgeChange = timeAllocation.study * 10;
      const socialChange = timeAllocation.social * 5 - (timeAllocation.study * 0.1);
      
      state.energy.current = Math.max(0, Math.min(state.energy.max, state.energy.current + energyChange));
      state.stress.current = Math.max(0, Math.min(state.stress.max, state.stress.current + stressChange));
      state.money = Math.max(0, state.money + moneyChange);
      state.knowledge = Math.max(0, state.knowledge + knowledgeChange);
      state.social = Math.max(0, state.social + socialChange);
    },
    resetResources: () => initialState,
  },
});

export const { updateResources, applyDailyUpdate, resetResources } = resourcesSlice.actions;

export default resourcesSlice.reducer;
