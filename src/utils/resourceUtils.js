// /Users/montysharma/Documents/V10/simplified/src/utils/resourceUtils.js
import { ACTIVITY_IMPACTS, RESOURCE_LIMITS } from '../config/gameConstants';

/**
 * Calculate resource changes based on time allocation
 * @param {Object} timeAllocation - Current time allocation percentages
 * @returns {Object} - Resource changes to apply
 */
/**
 * Calculate sleep hours based on rest allocation percentage
 * Assumes 24-hour day with rest percentage dedicated to sleep
 * @param {number} restPercentage - Rest allocation percentage
 * @returns {number} - Hours of sleep per day
 */
export const calculateSleepHours = (restPercentage) => {
  // Calculate hours of sleep based on rest percentage (24 hours * rest percentage)
  // Ensure restPercentage is a number
  const percentage = Number(restPercentage) || 0;
  return (24 * percentage) / 100;
};

/**
 * Apply sleep deprivation effects based on hours of sleep
 * @param {number} sleepHours - Hours of sleep per day
 * @param {Object} changes - Current resource changes
 * @returns {Object} - Updated resource changes with sleep effects
 */
export const applySleepEffects = (sleepHours, changes) => {
  // Apply penalties or bonuses based on sleep hours
  // Ensure sleepHours is a number
  const hours = Number(sleepHours) || 0;
  
  if (hours < 3) {
    changes.energy -= 10;
    changes.stress += 20;
  } else if (hours < 5) {
    changes.energy -= 4;
    changes.stress += 6;
  } else if (hours < 6) {
    changes.energy -= 2;
    changes.stress += 4;
  } else if (hours < 7) {
    changes.energy -= 1;
    changes.stress += 2;
  } else {
    // Bonus for good sleep (7+ hours)
    changes.energy += 10;
    changes.stress -= 5;
  }
  
  return changes;
};

export const calculateResourceChanges = (timeAllocation) => {
  const changes = {
    energy: 0,
    stress: 0,
    money: 0,
    knowledge: 0,
    social: 0,
  };
  
  // Calculate impacts from each activity
  Object.entries(timeAllocation).forEach(([activity, percentage]) => {
    if (ACTIVITY_IMPACTS[activity]) {
      Object.entries(ACTIVITY_IMPACTS[activity]).forEach(([resource, impact]) => {
        changes[resource] += impact * (percentage / 100);
      });
    }
  });
  
  // Calculate sleep hours and apply sleep deprivation effects
  const sleepHours = calculateSleepHours(timeAllocation.rest || 0);
  applySleepEffects(sleepHours, changes);
  
  return changes;
};

/**
 * Apply resource changes while respecting limits
 * @param {Object} currentResources - Current resource values
 * @param {Object} changes - Changes to apply
 * @returns {Object} - Updated resources
 */
export const applyResourceChanges = (currentResources, changes) => {
  const updatedResources = { ...currentResources };
  
  Object.entries(changes).forEach(([resource, change]) => {
    if (resource in updatedResources) {
      // Handle resources with min/max values
      if (typeof updatedResources[resource] === 'object' && 'current' in updatedResources[resource]) {
        const current = updatedResources[resource].current + change;
        const min = RESOURCE_LIMITS[resource]?.min || 0;
        const max = updatedResources[resource].max;
        updatedResources[resource] = {
          ...updatedResources[resource],
          current: Math.max(min, Math.min(max, current)),
        };
      } else {
        // Handle simple numeric resources
        const updated = updatedResources[resource] + change;
        const min = RESOURCE_LIMITS[resource]?.min || 0;
        const max = RESOURCE_LIMITS[resource]?.max || Infinity;
        updatedResources[resource] = Math.max(min, Math.min(max, updated));
      }
    }
  });
  
  return updatedResources;
};

/**
 * Format a resource value for display
 * @param {number|Object} resource - Resource value or object with current/max
 * @returns {string} - Formatted value
 */
export const formatResourceValue = (resource) => {
  // Handle objects with 'current' property
  if (typeof resource === 'object' && resource !== null && 'current' in resource) {
    return `${Math.round(resource.current)}/${Math.round(resource.max)}`;
  }
  
  // Handle numeric values (ensure it's a number)
  const numValue = Number(resource);
  return Math.round(numValue).toString();
};
