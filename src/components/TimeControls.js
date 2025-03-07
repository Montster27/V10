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
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <div className="panel">
      <div className="time-controls">
        <div>
          <div><strong>Day {time.day}</strong></div>
          <div>{formattedDate}</div>
          <div>Skill Points: {Math.round(skills.points)}</div>
        </div>
        
        <button 
          className="primary"
          onClick={handleTogglePause}
        >
          {time.paused ? 'Play' : 'Pause'}
        </button>
        
        <button onClick={handleSaveGame}>
          Save Game
        </button>
      </div>
    </div>
  );
}

export default TimeControls;
