// /Users/montysharma/Documents/V10/simplified/src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Container, Heading, Grid, GridItem, Text } from '@chakra-ui/react';
import TimeControls from './components/TimeControls';
import ResourcePanel from './components/ResourcePanel';
import TimeAllocationPanel from './components/TimeAllocationPanel';
import EventPanel from './components/EventPanel';
import SkillsPanel from './components/SkillsPanel';
import Panel from './components/ui/Panel';
import Fonts from './components/ui/Fonts';
import './components/skills.css';

function App() {
  const events = useSelector(state => state.events);
  const activeEvents = events.active;
  
  return (
    <>
      <Fonts />
      <Container maxW="1200px" py={5}>
        <Box as="header" mb={6} display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="xl" color="retro.navy">Middle Age Multiverse</Heading>
          <TimeControls />
        </Box>
        
        <Grid templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]} gap={4} mb={6}>
          {/* Column 1: Time Allocation */}
          <GridItem>
            <TimeAllocationPanel />
          </GridItem>
          
          {/* Column 2: Events */}
          <GridItem>
            {activeEvents.length > 0 ? (
              <EventPanel event={activeEvents[0]} />
            ) : (
              <Panel title="Events">
                <Text fontSize="sm" color="gray.600">
                  No active events. Events will appear here as they occur during gameplay.
                </Text>
              </Panel>
            )}
          </GridItem>
          
          {/* Column 3: Resources */}
          <GridItem>
            <ResourcePanel />
          </GridItem>
        </Grid>
        
        {/* Skills section below the three columns */}
        <Box mt={4}>
          <SkillsPanel />
        </Box>
      </Container>
    </>
  );
}

export default App;
