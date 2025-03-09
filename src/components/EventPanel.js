// /Users/montysharma/Documents/V10/simplified/src/components/EventPanel.js
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Box, Heading, Text, VStack, Badge, Flex } from '@chakra-ui/react';
import { resolveEvent } from '../slices/eventsSlice';
import { updateResources } from '../slices/resourcesSlice';
import { setPaused } from '../slices/timeSlice';
import Panel from './ui/Panel';
import Button from './ui/Button';

function EventPanel({ event }) {
  const dispatch = useDispatch();
  
  const handleChoiceSelect = (choiceId) => {
    const choice = event.choices.find(c => c.id === choiceId);
    
    if (choice) {
      // Apply the effects of the choice
      dispatch(updateResources(choice.effects));
      
      // Resolve the event
      dispatch(resolveEvent({ eventId: event.id, choiceId }));
      
      // Resume game if paused
      dispatch(setPaused(false));
    }
  };
  
  // Helper function to determine badge color based on resource
  const getResourceColorScheme = (resource) => {
    switch (resource.toLowerCase()) {
      case 'energy': return 'energy';
      case 'stress': return 'stress';
      case 'money': return 'money';
      case 'knowledge': return 'knowledge';
      case 'social': return 'social';
      default: return 'gray';
    }
  };
  
  return (
    <Panel title="Current Event">
      <Box>
        <Heading as="h3" size="sm" mb={2}>{event.title}</Heading>
        <Text fontSize="sm" mb={4}>{event.description}</Text>
        
        <VStack spacing={2} align="stretch">
          {event.choices.map(choice => (
            <Button
              key={choice.id}
              onClick={() => handleChoiceSelect(choice.id)}
              variant="outline"
              justifyContent="flex-start"
              height="auto"
              py={3}
              textAlign="left"
              isFullWidth
            >
              <Box>
                <Text mb={2}>{choice.text}</Text>
                <Flex wrap="wrap" gap={2}>
                  {Object.entries(choice.effects).map(([resource, value]) => (
                    <Badge
                      key={resource}
                      colorScheme={getResourceColorScheme(resource)}
                      variant={value >= 0 ? 'subtle' : 'solid'}
                    >
                      {resource}: {value > 0 ? '+' : ''}{Math.round(value)}
                    </Badge>
                  ))}
                </Flex>
              </Box>
            </Button>
          ))}
        </VStack>
      </Box>
    </Panel>
  );
}

EventPanel.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    choices: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      effects: PropTypes.object.isRequired,
    })).isRequired,
  }).isRequired,
};

export default EventPanel;
