// /Users/montysharma/Documents/V10/simplified/src/ui_test/ThemeTester.js
import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Container,
  Heading,
  Grid,
  GridItem,
  VStack,
  Text,
  Button,
  Badge,
  Progress,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  Divider,
  useToast
} from '@chakra-ui/react';
import { themeVariations } from '../config/themes/variations';
import ThemeSelector from './ThemeSelector';
import Panel from '../components/ui/Panel';
import Card from '../components/ui/Card';
import ResourceBar from '../components/ui/ResourceBar';

const ThemeTester = () => {
  // State for the current theme
  const [currentTheme, setCurrentTheme] = useState('default');
  const [sliderValue, setSliderValue] = useState(50);
  const toast = useToast();

  // Sample resource data
  const resources = {
    energy: { current: 75, max: 100 },
    stress: { current: 30, max: 100 },
    money: 500,
    knowledge: 350,
    social: 60
  };

  // Sample event
  const sampleEvent = {
    title: "College Party",
    description: "You've been invited to a big party this weekend. How do you want to respond?",
    choices: [
      {
        text: "Go to the party and socialize",
        effects: { energy: -20, stress: -10, social: 30, money: -20 }
      },
      {
        text: "Stay home and study instead",
        effects: { knowledge: 25, social: -10 }
      },
      {
        text: "Go for a while, then leave early",
        effects: { energy: -10, social: 15, knowledge: 5 }
      }
    ]
  };

  // Sample skills
  const skills = [
    { name: "Critical Thinking", category: "Academic", level: 2 },
    { name: "Public Speaking", category: "Social", level: 1 },
    { name: "Physical Fitness", category: "Physical", level: 3 }
  ];

  // Get resource color scheme based on resource name
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

  // Handle theme change
  const handleThemeChange = (themeName) => {
    setCurrentTheme(themeName);
    toast({
      title: `Theme changed to ${themeVariations[themeName].name}`,
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider theme={themeVariations[currentTheme].theme}>
      <Container maxW="1200px" py={6}>
        <VStack spacing={6} align="stretch">
          <Box as="header" mb={4}>
            <Heading as="h1" size="xl" mb={4}>
              Middle Age Multiverse - Theme Tester
            </Heading>
            <ThemeSelector 
              currentTheme={currentTheme}
              onChange={handleThemeChange} 
            />
          </Box>

          <Divider />

          <Grid templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]} gap={4}>
            {/* Time Allocation Panel */}
            <GridItem>
              <Panel title="Time Allocation">
                <VStack spacing={3} align="stretch">
                  <Slider
                    aria-label="Study slider"
                    value={sliderValue}
                    onChange={(val) => setSliderValue(val)}
                    colorScheme="knowledge"
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                  <Text>Study: {sliderValue}%</Text>
                  
                  <Slider
                    aria-label="Work slider"
                    value={30}
                    colorScheme="money"
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                  <Text>Work: 30%</Text>
                  
                  <Slider
                    aria-label="Social slider"
                    value={20}
                    colorScheme="social"
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                  <Text>Social: 20%</Text>
                </VStack>
              </Panel>
            </GridItem>

            {/* Event Panel */}
            <GridItem>
              <Panel title="Current Event">
                <Box>
                  <Heading as="h3" size="sm" mb={2}>{sampleEvent.title}</Heading>
                  <Text fontSize="sm" mb={4}>{sampleEvent.description}</Text>
                  
                  <VStack spacing={3} align="stretch">
                    {sampleEvent.choices.map((choice, index) => (
                      <Button
                        key={index}
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
                                {resource}: {value > 0 ? '+' : ''}{value}
                              </Badge>
                            ))}
                          </Flex>
                        </Box>
                      </Button>
                    ))}
                  </VStack>
                </Box>
              </Panel>
            </GridItem>

            {/* Resources Panel */}
            <GridItem>
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
                    <Text fontWeight="bold" color="money.500">${resources.money}</Text>
                  </Flex>
                  
                  <Flex justify="space-between" mb={2}>
                    <Text>Knowledge:</Text>
                    <Text fontWeight="bold" color="knowledge.500">{resources.knowledge}</Text>
                  </Flex>
                  
                  <Flex justify="space-between" mb={2}>
                    <Text>Social:</Text>
                    <Text fontWeight="bold" color="social.500">{resources.social}</Text>
                  </Flex>
                </Box>
              </Panel>
            </GridItem>
          </Grid>

          {/* Skills Section */}
          <Panel title="Skills">
            <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={4}>
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  title={skill.name}
                  variant="outline"
                >
                  <VStack align="stretch" spacing={2}>
                    <Badge colorScheme={getResourceColorScheme(skill.category)}>
                      {skill.category}
                    </Badge>
                    <Text>Level: {skill.level}</Text>
                    <Progress 
                      value={skill.level * 33.3} 
                      colorScheme={getResourceColorScheme(skill.category)}
                    />
                  </VStack>
                </Card>
              ))}
            </Grid>
          </Panel>

          {/* UI Components Showcase */}
          <Panel title="UI Components">
            <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={4}>
              <Card title="Buttons">
                <VStack align="stretch" spacing={3}>
                  <Button colorScheme="brand">Primary Button</Button>
                  <Button colorScheme="brand" variant="outline">Outline Button</Button>
                  <Button colorScheme="energy">Energy Button</Button>
                  <Button colorScheme="stress">Stress Button</Button>
                </VStack>
              </Card>

              <Card title="Progress Bars">
                <VStack align="stretch" spacing={3}>
                  <Text>Default:</Text>
                  <Progress value={75} />
                  <Text>Energy:</Text>
                  <Progress value={60} colorScheme="energy" />
                  <Text>Stress:</Text>
                  <Progress value={40} colorScheme="stress" />
                </VStack>
              </Card>

              <Card title="Badges">
                <Flex wrap="wrap" gap={2}>
                  <Badge>Default</Badge>
                  <Badge colorScheme="energy">Energy</Badge>
                  <Badge colorScheme="stress">Stress</Badge>
                  <Badge colorScheme="money">Money</Badge>
                  <Badge colorScheme="knowledge">Knowledge</Badge>
                  <Badge colorScheme="social">Social</Badge>
                </Flex>
              </Card>
            </Grid>
          </Panel>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default ThemeTester;