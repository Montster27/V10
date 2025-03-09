// /Users/montysharma/Documents/V10/simplified/src/utils/storageUtils.js
import { STORAGE_KEY } from '../config/gameConstants';

/**
 * Save game state to localStorage
 * @param {Object} state - Current Redux state
 * @returns {boolean} - Success status
 */
export const saveGameState = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (error) {
    console.error('Error saving game:', error);
    return false;
  }
};

/**
 * Load game state from localStorage
 * @returns {Object|null} - Saved game state or null if none exists
 */
export const loadGameState = () => {
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      // Convert date strings back to Date objects
      if (parsedState?.time?.date) {
        parsedState.time.date = new Date(parsedState.time.date);
      }
      return parsedState;
    }
    return null;
  } catch (error) {
    console.error('Error loading game:', error);
    return null;
  }
};

/**
 * Check if a saved game exists
 * @returns {boolean}
 */
export const hasSavedGame = () => {
  return localStorage.getItem(STORAGE_KEY) !== null;
};

/**
 * Delete saved game
 * @returns {boolean} - Success status
 */
export const deleteSavedGame = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error deleting saved game:', error);
    return false;
  }
};
