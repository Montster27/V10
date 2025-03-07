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
      
      <div className="three-column-layout">
        {/* Column 1: Time Allocation */}
        <div className="column">
          <TimeAllocationPanel />
        </div>
        
        {/* Column 2: Events */}
        <div className="column">
          {activeEvents.length > 0 ? (
            <EventPanel event={activeEvents[0]} />
          ) : (
            <div className="panel">
              <h2 className="panel-header">Events</h2>
              <p style={{fontSize: '14px', color: '#666'}}>No active events. Events will appear here as they occur during gameplay.</p>
            </div>
          )}
        </div>
        
        {/* Column 3: Resources */}
        <div className="column">
          <ResourcePanel />
        </div>
      </div>
      
      {/* Skills section below the three columns */}
      <div className="skill-section">
        <SkillsPanel />
      </div>
    </div>
  );
}

export default App;
