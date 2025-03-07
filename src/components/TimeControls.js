// /Users/montysharma/Documents/V10/simplified/src/components/TimeControls.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { togglePause } from '../slices/timeSlice';
import { startGameLoop, stopGameLoop, saveGame } from '../services/gameLoop';

function TimeControls() {
  const dispatch = useDispatch();
  const time = useSelector(state => state.time);
  const skills = useSelector(state => state.skills);
  
  useEffect(() => {
    startGameLoop();
    return () => stopGameLoop();
  }, []);
  
  const handleTogglePause = () => {
    dispatch(togglePause());
  };
  
  const handleSaveGame = () => {
    saveGame();
    alert('Game saved!');
  };
  
  const formattedDate = new Date(time.date).toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  
  return (
    <div className="panel" style={{padding: '8px 12px', marginBottom: '15px'}}>
      <div className="time-controls">
        <div style={{flex: 1}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <span><strong>Day {time.day}</strong></span>
            <span style={{fontSize: '0.9rem'}}>{formattedDate}</span>
          </div>
          <div style={{marginTop: '4px'}}>Skill Points: {Math.round(skills.points)}</div>
        </div>
        
        <div style={{display: 'flex', gap: '8px'}}>
          <button 
            className="primary"
            onClick={handleTogglePause}
            style={{padding: '4px 12px'}}
          >
            {time.paused ? 'Play' : 'Pause'}
          </button>
          
          <button 
            onClick={handleSaveGame}
            style={{padding: '4px 12px'}}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimeControls;
