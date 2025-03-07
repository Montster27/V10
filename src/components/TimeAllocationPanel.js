// /Users/montysharma/Documents/V10/simplified/src/components/TimeAllocationPanel.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAllocation, normalizeAllocations } from '../slices/timeAllocationSlice';

function TimeAllocationPanel() {
  const dispatch = useDispatch();
  const timeAllocation = useSelector(state => state.timeAllocation);
  const [total, setTotal] = useState(100);
  
  useEffect(() => {
    const newTotal = Object.values(timeAllocation).reduce((sum, val) => sum + val, 0);
    setTotal(newTotal);
  }, [timeAllocation]);
  
  const handleAllocationChange = (activity, value) => {
    dispatch(updateAllocation({ activity, value }));
  };
  
  const handleNormalize = () => {
    dispatch(normalizeAllocations());
  };
  
  // Calculate impacts
  const energyImpact = ((timeAllocation.rest * 0.5) - (timeAllocation.study * 0.2) - (timeAllocation.work * 0.3) - (timeAllocation.social * 0.1) - (timeAllocation.exercise * 0.2));
  const stressImpact = ((timeAllocation.study * 0.2) + (timeAllocation.work * 0.3) - (timeAllocation.social * 0.1) - (timeAllocation.rest * 0.3) - (timeAllocation.exercise * 0.2));
  const moneyImpact = (timeAllocation.work * 5);
  const knowledgeImpact = (timeAllocation.study * 10);
  const socialImpact = ((timeAllocation.social * 5) - (timeAllocation.study * 0.1));
  
  return (
    <div className="panel">
      <h2 className="panel-header">Time Allocation</h2>
      
      <div className={total !== 100 ? 'error-text' : ''} style={{fontSize: '14px'}}>
        Total: {total}% {total !== 100 && <button onClick={handleNormalize} style={{padding: '2px 6px', fontSize: '12px'}}>Balance</button>}
      </div>
      
      <div className="slider-container">
        <label style={{display: 'flex', justifyContent: 'space-between', fontSize: '14px'}}>
          <span>Study: {timeAllocation.study}%</span>
          <span style={{color: '#666', fontSize: '12px'}}>Knowledge +{Math.round(knowledgeImpact)}</span>
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={timeAllocation.study}
          onChange={(e) => handleAllocationChange('study', parseInt(e.target.value))}
          className="slider"
        />
      </div>
      
      <div className="slider-container">
        <label style={{display: 'flex', justifyContent: 'space-between', fontSize: '14px'}}>
          <span>Work: {timeAllocation.work}%</span>
          <span style={{color: '#666', fontSize: '12px'}}>Money +${Math.round(moneyImpact)}</span>
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={timeAllocation.work}
          onChange={(e) => handleAllocationChange('work', parseInt(e.target.value))}
          className="slider"
        />
      </div>
      
      <div className="slider-container">
        <label style={{display: 'flex', justifyContent: 'space-between', fontSize: '14px'}}>
          <span>Social: {timeAllocation.social}%</span>
          <span style={{color: '#666', fontSize: '12px'}}>Social +{Math.round(socialImpact)}</span>
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={timeAllocation.social}
          onChange={(e) => handleAllocationChange('social', parseInt(e.target.value))}
          className="slider"
        />
      </div>
      
      <div className="slider-container">
        <label style={{display: 'flex', justifyContent: 'space-between', fontSize: '14px'}}>
          <span>Rest: {timeAllocation.rest}%</span>
          <span style={{color: '#666', fontSize: '12px'}}>Energy +{Math.round(energyImpact)}</span>
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={timeAllocation.rest}
          onChange={(e) => handleAllocationChange('rest', parseInt(e.target.value))}
          className="slider"
        />
      </div>
      
      <div className="slider-container">
        <label style={{display: 'flex', justifyContent: 'space-between', fontSize: '14px'}}>
          <span>Exercise: {timeAllocation.exercise}%</span>
          <span style={{color: '#666', fontSize: '12px'}}>Stress {Math.round(stressImpact)}</span>
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={timeAllocation.exercise}
          onChange={(e) => handleAllocationChange('exercise', parseInt(e.target.value))}
          className="slider"
        />
      </div>
    </div>
  );
}

export default TimeAllocationPanel;
