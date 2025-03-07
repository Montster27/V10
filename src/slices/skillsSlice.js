// /Users/montysharma/Documents/V10/simplified/src/slices/skillsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { 
  skillDefinitions, 
  getInitialAvailableSkills,
  getNewlyAvailableSkills
} from '../data/skills';
import { SKILL_POINTS_PER_DAY } from '../config/gameConstants';

const initialState = {
  points: 0,
  unlocked: [],
  available: getInitialAvailableSkills(),
  definitions: skillDefinitions,
};

export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    addSkillPoints: (state, action) => {
      const points = action.payload || SKILL_POINTS_PER_DAY;
      state.points += points;
    },
    unlockSkill: (state, action) => {
      const skillId = action.payload;
      const skill = state.definitions[skillId];
      
      if (!skill || state.unlocked.includes(skillId) || state.points < skill.cost) {
        return;
      }
      
      // Check if all requirements are met
      const allRequirementsMet = skill.requires.every(
        reqId => state.unlocked.includes(reqId)
      );
      
      if (!allRequirementsMet) {
        return;
      }
      
      // Unlock the skill
      state.unlocked.push(skillId);
      state.points -= skill.cost;
      
      // Update available skills
      const newlyAvailable = getNewlyAvailableSkills(state.unlocked, state.available);
      
      state.available = [
        ...state.available.filter(id => id !== skillId), 
        ...newlyAvailable
      ];
    },
    setSkillPoints: (state, action) => {
      state.points = Math.max(0, action.payload);
    },
    resetSkills: () => initialState,
  },
});

export const { 
  addSkillPoints, 
  unlockSkill,
  setSkillPoints,
  resetSkills 
} = skillsSlice.actions;

// Selectors
export const selectSkillById = (state, skillId) => state.skills.definitions[skillId];
export const selectUnlockedSkills = state => state.skills.unlocked;
export const selectAvailableSkills = state => state.skills.available;
export const selectSkillPoints = state => state.skills.points;

export default skillsSlice.reducer;
