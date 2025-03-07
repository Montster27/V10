// /Users/montysharma/Documents/V10/simplified/src/components/EventPanel.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { resolveEvent } from '../slices/eventsSlice';
import { updateResources } from '../slices/resourcesSlice';
import { setPaused } from '../slices/timeSlice';

function EventPanel({ event }) {
  const dispatch = useDispatch();
  
  const handleChoiceSelect = (choiceId) => {
    const choice = event.choices.find(c => c.id === choiceId);
    
    if (choice) {
      // Apply the effects of the choice
      dispatch(updateResources(choice.effects));
      
      // Resolve the event
      dispatch(resolveEvent({ eventId: event.id, choiceId }));
      
      // Resume game if paused
      dispatch(setPaused(false));
    }
  };
  
  return (
    <div className="panel">
      <h2 className="panel-header">Event</h2>
      <div className="event-content">
        <h3 className="event-title">{event.title}</h3>
        <p className="event-description">{event.description}</p>
        
        <div className="event-choices">
          {event.choices.map(choice => (
            <button
              key={choice.id}
              onClick={() => handleChoiceSelect(choice.id)}
              className="event-choice"
            >
              {choice.text}
              <div className="choice-effects">
                {choice.effects.energy !== undefined && (
                  <span>Energy: {choice.effects.energy > 0 ? '+' : ''}{Math.round(choice.effects.energy)}</span>
                )}
                {choice.effects.stress !== undefined && (
                  <span>Stress: {choice.effects.stress > 0 ? '+' : ''}{Math.round(choice.effects.stress)}</span>
                )}
                {choice.effects.money !== undefined && (
                  <span>Money: ${choice.effects.money > 0 ? '+' : ''}{Math.round(choice.effects.money)}</span>
                )}
                {choice.effects.knowledge !== undefined && (
                  <span>Know: {choice.effects.knowledge > 0 ? '+' : ''}{Math.round(choice.effects.knowledge)}</span>
                )}
                {choice.effects.social !== undefined && (
                  <span>Social: {choice.effects.social > 0 ? '+' : ''}{Math.round(choice.effects.social)}</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventPanel;
