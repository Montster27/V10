// /Users/montysharma/Documents/V10/simplified/src/components/TimeControls.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Flex, Box, Text, useToast } from '@chakra-ui/react';
import { togglePause } from '../slices/timeSlice';
import { initializeGameLoop, saveGame } from '../services/gameLoop';
import { formatDate } from '../utils/timeUtils';
import Panel from './ui/Panel';
import Button from './ui/Button';

function TimeControls() {
  const dispatch = useDispatch();
  const time = useSelector(state => state.time);
  const skills = useSelector(state => state.skills);
  const toast = useToast();
  
  useEffect(() => {
    // Initialize game loop when the component mounts
    const cleanup = initializeGameLoop();
    
    // Clean up when component unmounts
    return cleanup;
  }, []);
  
  const handleTogglePause = () => {
    dispatch(togglePause());
  };
  
  const handleSaveGame = () => {
    const success = saveGame();
    if (success) {
      toast({
        title: 'Game saved',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top'
      });
    } else {
      toast({
        title: 'Save failed',
        description: 'Error saving game. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top'
      });
    }
  };
  
  const formattedDate = formatDate(time.date);
  
  return (
    <Panel py={2} px={4} mb={4}>
      <Flex align="center" justify="space-between">
        <Box>
          <Flex justify="space-between" width="100%">
            <Text fontWeight="bold">Day {time.day}</Text>
            <Text fontSize="sm" color="gray.600" ml={4}>{formattedDate}</Text>
          </Flex>
          <Text mt={1} fontSize="sm">
            Skill Points: <Text as="span" fontWeight="medium">{Math.round(skills.points)}</Text>
          </Text>
        </Box>
        
        <Flex gap={2}>
          <Button 
            onClick={handleTogglePause}
            colorScheme="brand"
            size="sm"
          >
            {time.paused ? 'Play' : 'Pause'}
          </Button>
          
          <Button 
            onClick={handleSaveGame}
            variant="outline"
            size="sm"
          >
            Save
          </Button>
        </Flex>
      </Flex>
    </Panel>
  );
}

export default TimeControls;
