// /Users/montysharma/Documents/V10/simplified/src/components/ResourcePanel.js
import React from 'react';
import { useSelector } from 'react-redux';

function ResourceBar({ label, value, max, className }) {
  // Round the values for display
  const displayValue = Math.round(value);
  const displayMax = Math.round(max);
  
  const percentage = (value / max) * 100;
  
  return (
    <div>
      <div className="resource-label">
        <span>{label}</span>
        <span>{displayValue}/{displayMax}</span>
      </div>
      <div className={`resource-bar ${className}`}>
        <div 
          className="resource-bar-fill" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function ResourcePanel() {
  const resources = useSelector(state => state.resources);
  
  return (
    <div className="panel">
      <h2 className="panel-header">Resources</h2>
      
      <ResourceBar 
        label="Energy" 
        value={resources.energy.current} 
        max={resources.energy.max}
        className="resource-bar-energy"
      />
      
      <ResourceBar 
        label="Stress" 
        value={resources.stress.current} 
        max={resources.stress.max}
        className="resource-bar-stress"
      />
      
      <div className="resource">
        <div className="resource-label">
          <span>Money</span>
          <span>${Math.round(resources.money)}</span>
        </div>
      </div>
      
      <div className="resource">
        <div className="resource-label">
          <span>Knowledge</span>
          <span>{Math.round(resources.knowledge)}</span>
        </div>
      </div>
      
      <div className="resource">
        <div className="resource-label">
          <span>Social</span>
          <span>{Math.round(resources.social)}</span>
        </div>
      </div>
    </div>
  );
}

export default ResourcePanel;
