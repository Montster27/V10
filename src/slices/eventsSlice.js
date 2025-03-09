// /Users/montysharma/Documents/V10/simplified/src/slices/eventsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { events } from '../data/events';

const initialState = {
  active: [],
  completed: [],
  available: [...events], // Start with all events in the available pool
  ongoingEffects: [], // Track ongoing effects from event choices
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    triggerEvent: (state, action) => {
      const eventId = action.payload;
      const eventIndex = state.available.findIndex(e => e.id === eventId);
      
      if (eventIndex !== -1) {
        const event = state.available[eventIndex];
        state.active.push(event);
        state.available.splice(eventIndex, 1);
      }
    },
    resolveEvent: (state, action) => {
      const { eventId, choiceId } = action.payload;
      const eventIndex = state.active.findIndex(e => e.id === eventId);
      
      if (eventIndex !== -1) {
        const event = state.active[eventIndex];
        const choice = event.choices.find(c => c.id === choiceId);
        
        // Store resolved event with choice
        const resolvedEvent = {
          ...event,
          resolved: true,
          choiceId,
          resolvedAt: new Date().toISOString(),
        };
        
        state.completed.push(resolvedEvent);
        state.active.splice(eventIndex, 1);
        
        // Handle ongoing effects if present
        if (choice && choice.ongoing) {
          state.ongoingEffects.push({
            eventId,
            choiceId,
            ...choice.ongoing,
          });
        }
      }
    },
    checkForEvents: (state, action) => {
      const { day } = action.payload;
      
      // Don't trigger new events if there are active ones
      if (state.active.length > 0) return;
      
      // Check for events that should trigger
      const triggeredEvents = state.available.filter(event => 
        event.trigger.type === 'time' && event.trigger.day === day
      );
      
      if (triggeredEvents.length > 0) {
        const event = triggeredEvents[0]; // Just trigger one event at a time
        const eventIndex = state.available.findIndex(e => e.id === event.id);
        
        state.active.push(event);
        state.available.splice(eventIndex, 1);
      }
    },
    removeOngoingEffect: (state, action) => {
      const { eventId, choiceId } = action.payload;
      state.ongoingEffects = state.ongoingEffects.filter(
        effect => !(effect.eventId === eventId && effect.choiceId === choiceId)
      );
    },
    resetEvents: () => initialState,
  },
});

export const { 
  triggerEvent, 
  resolveEvent, 
  checkForEvents, 
  removeOngoingEffect,
  resetEvents 
} = eventsSlice.actions;

export default eventsSlice.reducer;
