// /Users/montysharma/Documents/V10/simplified/src/components/TimeAllocationPanel.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, Flex, Badge, Box, HStack, Wrap, WrapItem } from '@chakra-ui/react';
import { updateAllocation, normalizeAllocations } from '../slices/timeAllocationSlice';
import { calculateSleepHours } from '../utils/resourceUtils';
import { ACTIVITY_IMPACTS } from '../config/gameConstants';
import Panel from './ui/Panel';
import Slider from './ui/Slider';
import Button from './ui/Button';

function TimeAllocationPanel() {
  const dispatch = useDispatch();
  const timeAllocation = useSelector(state => state.timeAllocation);
  const [total, setTotal] = useState(100);
  
  // Calculate weekly hours for each activity (24 hours * 7 days * percentage / 100)
  const calculateHoursPerWeek = (percentage) => {
    return (24 * 7 * percentage / 100).toFixed(1);
  };
  
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
  
  // Get all impacts for an activity
  const getAllImpacts = (activity) => {
    const impacts = ACTIVITY_IMPACTS[activity];
    if (!impacts) return [];
    
    return Object.entries(impacts).map(([resource, value]) => {
      return {
        resource,
        value: value * (timeAllocation[activity] / 100),
        label: getResourceLabel(resource),
        colorScheme: getResourceColorScheme(resource)
      };
    });
  };
  
  // Get a short label for a resource
  const getResourceLabel = (resource) => {
    switch(resource) {
      case 'energy': return 'E';
      case 'stress': return 'S';
      case 'money': return '$';
      case 'knowledge': return 'K';
      case 'social': return 'Soc';
      default: return resource.charAt(0).toUpperCase();
    }
  };
  
  // Get a color scheme for a resource
  const getResourceColorScheme = (resource) => {
    switch(resource) {
      case 'energy': return 'energy';
      case 'stress': return 'stress';
      case 'money': return 'money';
      case 'knowledge': return 'knowledge';
      case 'social': return 'social';
      default: return 'gray';
    }
  };
  
  // Get the main impact (primary resource affected) for an activity
  const getPrimaryImpact = (activity) => {
    const impacts = getAllImpacts(activity);
    if (impacts.length === 0) return null;
    
    // Find impact with the highest absolute value
    return impacts.reduce((max, current) => {
      return Math.abs(current.value) > Math.abs(max.value) ? current : max;
    });
  };
  
  const getActivityColorScheme = (activity) => {
    const primaryImpact = getPrimaryImpact(activity);
    return primaryImpact ? primaryImpact.colorScheme : 'gray';
  };
  
  // Display sleep info if rest is selected
  const getSleepInfo = (activity, percentage) => {
    if (activity !== 'rest') return null;
    
    const sleepHours = calculateSleepHours(percentage);
    let sleepStatus, color;
    
    if (sleepHours < 3) {
      sleepStatus = 'Severe sleep deprivation!';
      color = 'red.500';
    } else if (sleepHours < 5) {
      sleepStatus = 'Very low sleep';
      color = 'orange.500';
    } else if (sleepHours < 6) {
      sleepStatus = 'Poor sleep';
      color = 'yellow.500';
    } else if (sleepHours < 7) {
      sleepStatus = 'Insufficient sleep';
      color = 'yellow.300';
    } else {
      sleepStatus = 'Good sleep';
      color = 'green.500';
    }
    
    return { sleepHours, sleepStatus, color };
  };
  
  return (
    <Panel title="Time Allocation">
      <Flex justify="space-between" mb={3} align="center">
        <Text fontSize="sm">
          Total: 
          <Badge 
            colorScheme={total !== 100 ? 'red' : 'green'} 
            ml={1}
          >
            {total}%
          </Badge>
        </Text>
        
        {total !== 100 && (
          <Button
            onClick={handleNormalize}
            size="xs"
            colorScheme="brand"
          >
            Balance
          </Button>
        )}
      </Flex>
      
      {Object.keys(timeAllocation).map(activity => {
        const primaryImpact = getPrimaryImpact(activity);
        const allImpacts = getAllImpacts(activity);
        const hoursPerWeek = calculateHoursPerWeek(timeAllocation[activity]);
        const sleepInfo = getSleepInfo(activity, timeAllocation[activity]);
        
        return (
          <Box key={activity} mb={5}>
            <Slider
              label={activity.charAt(0).toUpperCase() + activity.slice(1)}
              value={timeAllocation[activity]}
              onChange={(value) => handleAllocationChange(activity, value)}
              colorScheme={primaryImpact ? primaryImpact.colorScheme : 'gray'}
              hoursPerWeek={hoursPerWeek}
            />
            
            {/* Resource impacts display */}
            <Wrap spacing={1} mt={1} mb={1}>
              {allImpacts.map(impact => (
                <WrapItem key={impact.resource}>
                  <Badge
                    colorScheme={impact.colorScheme}
                    variant={impact.value >= 0 ? 'subtle' : 'solid'}
                    fontSize="xs"
                  >
                    {impact.label}: {impact.value > 0 ? '+' : ''}{impact.value.toFixed(1)}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
            
            {/* Sleep info for rest activity */}
            {sleepInfo && (
              <Text fontSize="xs" color={sleepInfo.color} ml={1}>
                {sleepInfo.sleepStatus} ({sleepInfo.sleepHours.toFixed(1)} hrs/day)
                {sleepInfo.sleepHours >= 7 ? 
                  ': Energy +10, Stress -5 daily' : 
                  sleepInfo.sleepHours < 3 ? 
                    ': Energy -10, Stress +20 daily' : 
                    ''}
              </Text>
            )}
          </Box>
        );
      })}
    </Panel>
  );
}

export default TimeAllocationPanel;
