// /Users/montysharma/Documents/V10/simplified/src/components/ResourcePanel.js
import React from 'react';
import { useSelector } from 'react-redux';

function ResourceBar({ label, value, max, className }) {
  // Round the values for display
  const displayValue = Math.round(value);
  const displayMax = Math.round(max);
  
  const percentage = (value / max) * 100;
  
  return (
    <div style={{marginBottom: '8px'}}>
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
      
      <div className="resource-details" style={{fontSize: '14px', marginTop: '12px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
          <span>Money:</span>
          <span style={{fontWeight: 'bold'}}>${Math.round(resources.money)}</span>
        </div>
        
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
          <span>Knowledge:</span>
          <span style={{fontWeight: 'bold'}}>{Math.round(resources.knowledge)}</span>
        </div>
        
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
          <span>Social:</span>
          <span style={{fontWeight: 'bold'}}>{Math.round(resources.social)}</span>
        </div>
      </div>
    </div>
  );
}

export default ResourcePanel;
