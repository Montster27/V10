// /Users/montysharma/Documents/V10/simplified/src/data/skills.js
/**
 * Skills data for Middle Age Multiverse
 * Defines all skills, their costs, effects, and requirements
 */

export const skillDefinitions = {
  // Academic Skills
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
  critical_thinking: {
    id: 'critical_thinking',
    name: 'Critical Thinking',
    description: 'Analyze information more effectively',
    cost: 150,
    category: 'academic',
    tier: 2,
    effects: {
      knowledgeMax: 100,
      stressResistance: 1.1,
    },
    requires: ['academic_focus'],
  },
  
  // Social Skills
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
  leadership: {
    id: 'leadership',
    name: 'Leadership',
    description: 'Inspire and guide others effectively',
    cost: 150,
    category: 'social',
    tier: 2,
    effects: {
      socialMax: 50,
      moneyEfficiency: 1.1,
    },
    requires: ['social_butterfly'],
  },
  
  // Physical Skills
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
  stress_management: {
    id: 'stress_management',
    name: 'Stress Management',
    description: 'Better handle stress and pressure',
    cost: 100,
    category: 'physical',
    tier: 2,
    effects: {
      stressResistance: 1.2,
      stressRegen: 1.1,
    },
    requires: ['physical_fitness'],
  },
};

/**
 * Returns skill requirements to determine if skill can be unlocked
 * 
 * @param {string} skillId - The skill ID to check
 * @param {Array} unlockedSkills - List of already unlocked skills
 * @returns {boolean} - Whether the skill can be unlocked
 */
export const canUnlockSkill = (skillId, unlockedSkills) => {
  const skill = skillDefinitions[skillId];
  if (!skill) return false;
  
  // Check if all requirements are met
  return skill.requires.every(reqId => unlockedSkills.includes(reqId));
};

/**
 * Get the initial available skills (those with no requirements)
 * 
 * @returns {Array} - List of available skill IDs 
 */
export const getInitialAvailableSkills = () => {
  return Object.values(skillDefinitions)
    .filter(skill => skill.requires.length === 0)
    .map(skill => skill.id);
};

/**
 * Get newly available skills after unlocking a skill
 * 
 * @param {Array} currentlyUnlocked - List of unlocked skills
 * @param {Array} currentlyAvailable - List of available skills
 * @returns {Array} - List of newly available skill IDs
 */
export const getNewlyAvailableSkills = (currentlyUnlocked, currentlyAvailable) => {
  return Object.values(skillDefinitions)
    .filter(s => 
      !currentlyUnlocked.includes(s.id) && 
      !currentlyAvailable.includes(s.id) &&
      s.requires.every(reqId => currentlyUnlocked.includes(reqId))
    )
    .map(s => s.id);
};
