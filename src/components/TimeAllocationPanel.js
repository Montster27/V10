// /Users/montysharma/Documents/V10/simplified/src/components/TimeAllocationPanel.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAllocation, normalizeAllocations } from '../slices/timeAllocationSlice';
import { calculateResourceChanges } from '../utils/resourceUtils';
import { ACTIVITY_IMPACTS } from '../config/gameConstants';
import Panel from './ui/Panel';
import Slider from './ui/Slider';
import Button from './ui/Button';

function TimeAllocationPanel() {
  const dispatch = useDispatch();
  const timeAllocation = useSelector(state => state.timeAllocation);
  const [total, setTotal] = useState(100);
  
  // Calculate resource impacts based on current allocation
  const resourceImpacts = calculateResourceChanges(timeAllocation);
  
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
  
  // Map activities to their impact labels
  const activityImpactLabels = {
    study: 'K',
    work: '$',
    social: 'Soc',
    rest: 'E',
    exercise: 'S',
  };
  
  // Get the primary impact for an activity
  const getPrimaryImpact = (activity) => {
    const impacts = ACTIVITY_IMPACTS[activity];
    if (!impacts) return null;
    
    // Find the key with the highest absolute value
    let primaryKey = null;
    let maxAbsValue = 0;
    
    Object.entries(impacts).forEach(([key, value]) => {
      const absValue = Math.abs(value);
      if (absValue > maxAbsValue) {
        maxAbsValue = absValue;
        primaryKey = key;
      }
    });
    
    if (!primaryKey) return null;
    
    // Calculate the actual impact based on allocation percentage
    return impacts[primaryKey] * (timeAllocation[activity] / 100);
  };
  
  return (
    <Panel title="Time Allocation">
      <div className={total !== 100 ? 'error-text' : ''} style={{fontSize: '14px', marginBottom: '10px'}}>
        Total: {total}% {total !== 100 && (
          <Button onClick={handleNormalize} size="small">
            Balance
          </Button>
        )}
      </div>
      
      {Object.keys(timeAllocation).map(activity => {
        const impact = getPrimaryImpact(activity);
        const impactLabel = activityImpactLabels[activity];
        
        return (
          <Slider
            key={activity}
            label={activity.charAt(0).toUpperCase() + activity.slice(1)}
            value={timeAllocation[activity]}
            onChange={(value) => handleAllocationChange(activity, value)}
            impact={impact}
            impactLabel={impactLabel}
          />
        );
      })}
    </Panel>
  );
}

export default TimeAllocationPanel;
