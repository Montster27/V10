// /Users/montysharma/Documents/V10/simplified/src/services/gameLoop.js
import { store } from '../store';
import { advanceDay } from '../slices/timeSlice';
import { applyDailyUpdate } from '../slices/resourcesSlice';
import { checkForEvents } from '../slices/eventsSlice';
import { addSkillPoints } from '../slices/skillsSlice';
import { saveGameState } from '../utils/storageUtils';
import { DAY_DURATION_MS, SKILL_POINTS_PER_DAY } from '../config/gameConstants';

let gameLoopInterval = null;
let autoSaveCounter = 0;

/**
 * Initialize the game loop
 * @returns {Function} - Cleanup function
 */
export function initializeGameLoop() {
  console.log('Initializing game loop');
  
  if (gameLoopInterval) {
    clearInterval(gameLoopInterval);
  }
  
  startGameLoop();
  
  // Return cleanup function
  return () => {
    stopGameLoop();
  };
}

/**
 * Start the game loop
 */
export function startGameLoop() {
  if (gameLoopInterval) {
    clearInterval(gameLoopInterval);
  }
  
  gameLoopInterval = setInterval(() => {
    const state = store.getState();
    
    if (state.time.paused) {
      return;
    }
    
    try {
      // Process a day
      processDayTick();
      
      // Auto-save every 5 days
      autoSaveCounter++;
      if (autoSaveCounter >= 5) {
        autoSaveCounter = 0;
        autoSaveGame();
      }
    } catch (error) {
      console.error('Error in game loop:', error);
      // Don't stop the loop on errors, but log them
    }
    
  }, DAY_DURATION_MS);
  
  console.log('Game loop started');
}

/**
 * Stop the game loop
 */
export function stopGameLoop() {
  if (gameLoopInterval) {
    clearInterval(gameLoopInterval);
    gameLoopInterval = null;
    console.log('Game loop stopped');
  }
}

/**
 * Process a single day in the game
 */
function processDayTick() {
  const state = store.getState();
  
  // 1. Update game time
  store.dispatch(advanceDay());
  
  // 2. Update resources based on time allocation
  store.dispatch(applyDailyUpdate({
    timeAllocation: state.timeAllocation
  }));
  
  // 3. Add skill points
  store.dispatch(addSkillPoints(SKILL_POINTS_PER_DAY));
  
  // 4. Check for events
  store.dispatch(checkForEvents({
    day: state.time.day + 1, // +1 because we already advanced the day
    resources: state.resources,
    skills: state.skills,
  }));
}

/**
 * Save the game state
 * @returns {boolean} - Success status
 */
export function saveGame() {
  const state = store.getState();
  return saveGameState(state);
}

/**
 * Auto-save the game
 */
function autoSaveGame() {
  const success = saveGame();
  if (success) {
    console.log('Game auto-saved');
  }
}

/**
 * Check if the game loop is running
 * @returns {boolean}
 */
export function isGameLoopRunning() {
  return gameLoopInterval !== null;
}
