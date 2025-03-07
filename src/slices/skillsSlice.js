// /Users/montysharma/Documents/V10/simplified/src/slices/skillsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const skillDefinitions = {
  academic_focus: {
    id: 'academic_focus',
    name: 'Academic Focus',
    description: 'Improves knowledge gain from studying',
    cost: 50,
    category: 'academic',
    tier: 1,
    effects: {
      studyEfficiency: 1.2,
    },
    requires: [],
  },
  speed_reading: {
    id: 'speed_reading',
    name: 'Speed Reading',
    description: 'Read faster and retain more information',
    cost: 100,
    category: 'academic',
    tier: 2,
    effects: {
      studyEfficiency: 1.3,
    },
    requires: ['academic_focus'],
  },
  social_butterfly: {
    id: 'social_butterfly',
    name: 'Social Butterfly',
    description: 'Make friends more easily and build connections',
    cost: 50,
    category: 'social',
    tier: 1,
    effects: {
      socialEfficiency: 1.2,
    },
    requires: [],
  },
  networking: {
    id: 'networking',
    name: 'Networking',
    description: 'Build valuable professional connections',
    cost: 100,
    category: 'social',
    tier: 2,
    effects: {
      workEfficiency: 1.1,
      socialEfficiency: 1.1,
    },
    requires: ['social_butterfly'],
  },
  physical_fitness: {
    id: 'physical_fitness',
    name: 'Physical Fitness',
    description: 'Improve your overall health and energy',
    cost: 50,
    category: 'physical',
    tier: 1,
    effects: {
      energyMax: 10,
      energyRegen: 1.1,
    },
    requires: [],
  },
  endurance: {
    id: 'endurance',
    name: 'Endurance',
    description: 'Increase your stamina for long study sessions',
    cost: 100,
    category: 'physical',
    tier: 2,
    effects: {
      energyMax: 20,
      stressResistance: 1.1,
    },
    requires: ['physical_fitness'],
  },
};

const initialState = {
  points: 0,
  unlocked: [],
  available: Object.values(skillDefinitions)
    .filter(skill => skill.requires.length === 0)
    .map(skill => skill.id),
  definitions: skillDefinitions,
};

export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    addSkillPoints: (state, action) => {
      state.points += action.payload;
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
      const newlyAvailable = Object.values(state.definitions)
        .filter(s => 
          !state.unlocked.includes(s.id) && 
          !state.available.includes(s.id) &&
          s.requires.every(reqId => state.unlocked.includes(reqId))
        )
        .map(s => s.id);
      
      state.available = [...state.available.filter(id => id !== skillId), ...newlyAvailable];
    },
    resetSkills: () => initialState,
  },
});

export const { addSkillPoints, unlockSkill, resetSkills } = skillsSlice.actions;

export default skillsSlice.reducer;
