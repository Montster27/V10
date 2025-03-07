// /Users/montysharma/Documents/V10/simplified/src/components/TimeControls.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { togglePause } from '../slices/timeSlice';
import { initializeGameLoop, saveGame } from '../services/gameLoop';
import { formatDate } from '../utils/timeUtils';
import Panel from './ui/Panel';
import Button from './ui/Button';

function TimeControls() {
  const dispatch = useDispatch();
  const time = useSelector(state => state.time);
  const skills = useSelector(state => state.skills);
  
  useEffect(() => {
    // Initialize game loop when the component mounts
    const cleanup = initializeGameLoop();
    
    // Clean up when component unmounts
    return cleanup;
  }, []);
  
  const handleTogglePause = () => {
    dispatch(togglePause());
  };
  
  const handleSaveGame = () => {
    const success = saveGame();
    if (success) {
      alert('Game saved!');
    } else {
      alert('Error saving game. Please try again.');
    }
  };
  
  const formattedDate = formatDate(time.date);
  
  return (
    <Panel style={{padding: '8px 12px', marginBottom: '15px'}}>
      <div className="time-controls">
        <div style={{flex: 1}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <span><strong>Day {time.day}</strong></span>
            <span style={{fontSize: '0.9rem'}}>{formattedDate}</span>
          </div>
          <div style={{marginTop: '4px'}}>
            Skill Points: {Math.round(skills.points)}
          </div>
        </div>
        
        <div style={{display: 'flex', gap: '8px'}}>
          <Button 
            onClick={handleTogglePause}
            primary={true}
            size="small"
          >
            {time.paused ? 'Play' : 'Pause'}
          </Button>
          
          <Button 
            onClick={handleSaveGame}
            size="small"
          >
            Save
          </Button>
        </div>
      </div>
    </Panel>
  );
}

export default TimeControls;
