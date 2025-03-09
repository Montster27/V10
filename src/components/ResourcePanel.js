// /Users/montysharma/Documents/V10/simplified/src/components/ResourcePanel.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, Text, Box, Divider } from '@chakra-ui/react';
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
      />
      
      <ResourceBar 
        label="Stress" 
        value={resources.stress.current} 
        max={resources.stress.max}
      />
      
      <Divider my={3} />
      
      <Box mt={3}>
        <Flex justify="space-between" mb={2}>
          <Text>Money:</Text>
          <Text fontWeight="bold" color="money.500">${Math.round(resources.money)}</Text>
        </Flex>
        
        <Flex justify="space-between" mb={2}>
          <Text>Knowledge:</Text>
          <Text fontWeight="bold" color="knowledge.500">{Math.round(resources.knowledge)}</Text>
        </Flex>
        
        <Flex justify="space-between" mb={2}>
          <Text>Social:</Text>
          <Text fontWeight="bold" color="social.500">{Math.round(resources.social)}</Text>
        </Flex>
      </Box>
    </Panel>
  );
}

export default ResourcePanel;
