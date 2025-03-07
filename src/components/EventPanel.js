// /Users/montysharma/Documents/V10/simplified/src/components/EventPanel.js
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { resolveEvent } from '../slices/eventsSlice';
import { updateResources } from '../slices/resourcesSlice';
import { setPaused } from '../slices/timeSlice';
import Panel from './ui/Panel';
import Button from './ui/Button';

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
    <Panel title="Current Event">
      <div className="event-content">
        <h3 className="event-title" style={{fontSize: '1.1rem', marginTop: '0'}}>{event.title}</h3>
        <p className="event-description" style={{fontSize: '0.9rem', margin: '8px 0'}}>{event.description}</p>
        
        <div className="event-choices">
          {event.choices.map(choice => (
            <Button
              key={choice.id}
              onClick={() => handleChoiceSelect(choice.id)}
              className="event-choice"
              style={{
                marginTop: '8px', 
                fontSize: '0.9rem',
                display: 'block',
                width: '100%',
                textAlign: 'left',
              }}
            >
              {choice.text}
              <div className="choice-effects">
                {Object.entries(choice.effects).map(([resource, value]) => (
                  <span key={resource}>
                    {resource.charAt(0).toUpperCase()}: {value > 0 ? '+' : ''}{Math.round(value)}
                  </span>
                ))}
              </div>
            </Button>
          ))}
        </div>
      </div>
    </Panel>
  );
}

EventPanel.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    choices: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      effects: PropTypes.object.isRequired,
    })).isRequired,
  }).isRequired,
};

export default EventPanel;
