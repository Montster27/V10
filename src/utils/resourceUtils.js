// /Users/montysharma/Documents/V10/simplified/src/utils/resourceUtils.js
import { ACTIVITY_IMPACTS, RESOURCE_LIMITS } from '../config/gameConstants';

/**
 * Calculate resource changes based on time allocation
 * @param {Object} timeAllocation - Current time allocation percentages
 * @returns {Object} - Resource changes to apply
 */
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
  if (typeof resource === 'object' && 'current' in resource) {
    return `${Math.round(resource.current)}/${Math.round(resource.max)}`;
  }
  return Math.round(resource).toString();
};
