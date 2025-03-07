// /Users/montysharma/Documents/V10/simplified/src/components/ResourcePanel.js
import React from 'react';
import { useSelector } from 'react-redux';
import Panel from './ui/Panel';
import ResourceBar from './ui/ResourceBar';

function ResourcePanel() {
  const resources = useSelector(state => state.resources);
  
  return (
    <Panel title="Resources">
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
    </Panel>
  );
}

export default ResourcePanel;
