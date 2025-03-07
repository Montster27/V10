// /Users/montysharma/Documents/V10/simplified/src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import TimeControls from './components/TimeControls';
import ResourcePanel from './components/ResourcePanel';
import TimeAllocationPanel from './components/TimeAllocationPanel';
import EventPanel from './components/EventPanel';
import SkillsPanel from './components/SkillsPanel';
import './components/skills.css';

function App() {
  const events = useSelector(state => state.events);
  const activeEvents = events.active;
  
  return (
    <div className="container">
      <header>
        <h1>Middle Age Multiverse</h1>
        <TimeControls />
      </header>
      
      <div className="compact-layout">
        <div className="time-allocation-panel">
          <TimeAllocationPanel />
        </div>
        
        <ResourcePanel />
      
        <div className="events-section">
          {activeEvents.length > 0 && (
            <EventPanel event={activeEvents[0]} />
          )}
        </div>
        
        <div className="skill-section">
          <SkillsPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
