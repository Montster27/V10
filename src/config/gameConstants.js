// /Users/montysharma/Documents/V10/simplified/src/config/gameConstants.js
/**
 * Game-wide constants for Middle Age Multiverse
 */

// Time settings
export const DAY_DURATION_MS = 3000; // 3 seconds = 1 game day
export const GAME_START_DATE = '1983-09-01'; // Starting date

// Resource settings
export const RESOURCE_LIMITS = {
  energy: { min: 0, max: 100, initial: 100 },
  stress: { min: 0, max: 100, initial: 0 },
  money: { min: 0, max: Infinity, initial: 100 },
  knowledge: { min: 0, max: Infinity, initial: 0 },
  social: { min: 0, max: Infinity, initial: 50 },
};

// Time allocation impacts
export const ACTIVITY_IMPACTS = {
  study: {
    energy: -0.2,
    stress: 0.2,
    knowledge: 10,
    social: -0.5,
  },
  work: {
    energy: -0.3,
    stress: 0.5,
    money: 5,
    knowledge: 0.5,
  },
  social: {
    energy: -0.1,
    stress: -0.5,
    money: -2,
    knowledge: 0.5,
    social: 5,
  },
  rest: {
    energy: 0.5,
    stress: -0.3,
  },
  exercise: {
    energy: -0.2,
    stress: -0.5,
    social: 1,
  },
};

// Skill system
export const SKILL_POINTS_PER_DAY = 24;
export const SKILL_CATEGORIES = ['academic', 'social', 'physical'];

// Default time allocation
export const DEFAULT_TIME_ALLOCATION = {
  study: 20,
  work: 20,
  social: 20,
  rest: 30,
  exercise: 10,
};

// Local storage keys
export const STORAGE_KEY = 'middle_age_multiverse_save';
