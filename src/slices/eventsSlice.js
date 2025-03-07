// /Users/montysharma/Documents/V10/simplified/src/slices/eventsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: [],
  completed: [],
  available: [
    {
      id: 'freshman_party',
      title: 'Freshman Welcome Party',
      description: 'You\'re invited to the freshman welcome party. This is a great opportunity to make new friends and connections that might help you throughout your college years.',
      choices: [
        {
          id: 'attend',
          text: 'Attend and socialize',
          effects: {
            energy: -10,
            stress: 5,
            social: 15,
          },
        },
        {
          id: 'skip',
          text: 'Skip and study instead',
          effects: {
            knowledge: 10,
            social: -5,
          },
        },
      ],
      trigger: {
        type: 'time',
        day: 3,
      },
    },
    {
      id: 'study_group',
      title: 'Study Group Invitation',
      description: 'Some classmates are forming a study group for the upcoming midterms. They\'ve invited you to join them.',
      choices: [
        {
          id: 'join',
          text: 'Join the study group',
          effects: {
            energy: -5,
            knowledge: 15,
            social: 5,
          },
        },
        {
          id: 'decline',
          text: 'Study alone',
          effects: {
            energy: -3,
            knowledge: 8,
          },
        },
      ],
      trigger: {
        type: 'time',
        day: 7,
      },
    },
    {
      id: 'mysterious_flyer',
      title: 'Mysterious Flyer',
      description: 'You find a mysterious flyer about a secret campus society meeting. The flyer mentions "shaping the future" and has cryptic symbols on it.',
      choices: [
        {
          id: 'investigate',
          text: 'Investigate the meeting',
          effects: {
            energy: -10,
            stress: 10,
            social: -5,
          },
          unlocks: 'conspiracy_thread_1',
        },
        {
          id: 'ignore',
          text: 'Ignore it as nonsense',
          effects: {
            stress: -5,
          },
        },
      ],
      trigger: {
        type: 'time',
        day: 14,
      },
    },
  ],
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
        const resolvedEvent = {
          ...event,
          resolved: true,
          choiceId,
          resolvedAt: new Date().toISOString(),
        };
        
        state.completed.push(resolvedEvent);
        state.active.splice(eventIndex, 1);
      }
    },
    checkForEvents: (state, action) => {
      const { day } = action.payload;
      
      // Don't trigger new events if there are active ones
      if (state.active.length > 0) return;
      
      const triggeredEvents = state.available.filter(
        event => event.trigger.type === 'time' && event.trigger.day === day
      );
      
      if (triggeredEvents.length > 0) {
        const event = triggeredEvents[0];
        const eventIndex = state.available.findIndex(e => e.id === event.id);
        
        state.active.push(event);
        state.available.splice(eventIndex, 1);
      }
    },
    resetEvents: () => initialState,
  },
});

export const { triggerEvent, resolveEvent, checkForEvents, resetEvents } = eventsSlice.actions;

export default eventsSlice.reducer;
