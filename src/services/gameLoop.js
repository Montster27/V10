// /Users/montysharma/Documents/V10/simplified/src/services/gameLoop.js
import { store } from '../store';
import { advanceDay } from '../slices/timeSlice';
import { applyDailyUpdate } from '../slices/resourcesSlice';
import { checkForEvents } from '../slices/eventsSlice';
import { addSkillPoints } from '../slices/skillsSlice';

// 3 seconds = 1 game day
const DAY_DURATION_MS = 3000;
let gameLoopInterval = null;

export function startGameLoop() {
  if (gameLoopInterval) {
    clearInterval(gameLoopInterval);
  }
  
  gameLoopInterval = setInterval(() => {
    const state = store.getState();
    
    if (state.time.paused) {
      return;
    }
    
    // Process a day
    processDayTick();
    
  }, DAY_DURATION_MS);
}

export function stopGameLoop() {
  if (gameLoopInterval) {
    clearInterval(gameLoopInterval);
    gameLoopInterval = null;
  }
}

function processDayTick() {
  const state = store.getState();
  
  // 1. Update game time
  store.dispatch(advanceDay());
  
  // 2. Update resources based on time allocation
  store.dispatch(applyDailyUpdate({
    timeAllocation: state.timeAllocation
  }));
  
  // 3. Add skill points (24 per day)
  store.dispatch(addSkillPoints(24));
  
  // 4. Check for events
  store.dispatch(checkForEvents({
    day: state.time.day + 1, // +1 because we already advanced the day
  }));
  
  // If an event is triggered, pause the game
  const newState = store.getState();
  if (newState.events.active.length > 0) {
    // We'll handle this in the event component
  }
}

// Helper to save the game state
export function saveGame() {
  const state = store.getState();
  localStorage.setItem('game_save', JSON.stringify(state));
}

// Helper to load the game state
export function loadGame() {
  const savedState = localStorage.getItem('game_save');
  if (savedState) {
    return JSON.parse(savedState);
  }
  return null;
}
