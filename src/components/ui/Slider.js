// /Users/montysharma/Documents/V10/simplified/src/components/ui/Slider.js
import React from 'react';
import PropTypes from 'prop-types';
import {
  Slider as ChakraSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  Text,
  Box
} from '@chakra-ui/react';

/**
 * Maps activity/resource labels to their corresponding color schemes
 */
const COLOR_SCHEME_MAP = {
  energy: 'energy',
  rest: 'energy',
  stress: 'stress',
  exercise: 'stress',
  money: 'money',
  work: 'money',
  knowledge: 'knowledge',
  study: 'knowledge',
  social: 'social'
};

/**
 * Enhanced slider component with label using Chakra UI
 */
function Slider({ 
  label, 
  value, 
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  colorScheme = "brand",
  hoursPerWeek = null
}) {
  // Determine color scheme based on label
  const getColorScheme = () => {
    const labelLower = label.toLowerCase();
    return COLOR_SCHEME_MAP[labelLower] || colorScheme;
  };
  
  // Format value from slider to integer
  const handleChange = (newValue) => {
    onChange(parseInt(newValue, 10));
  };
  
  return (
    <Box mb={3}>
      <Flex justify="space-between" mb={1}>
        <Text fontSize="sm" fontWeight="medium">
          {label}: {value}%
        </Text>
      </Flex>
      
      {/* Hours per week display */}
      {hoursPerWeek !== null && (
        <Text fontSize="xs" color="gray.400" ml={1} mb={1}>
          {hoursPerWeek} hrs/week
        </Text>
      )}
      <ChakraSlider
        aria-label={`${label} allocation slider`}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        isDisabled={disabled}
        colorScheme={getColorScheme()}
        height={6}
      >
        <SliderTrack h={2} bg="gray.200">
          <SliderFilledTrack h={2} />
        </SliderTrack>
        <SliderThumb 
          boxSize={6} 
          bg="white" 
          borderWidth={1} 
          borderColor="gray.300"
          boxShadow="md" 
          _hover={{ boxShadow: "lg" }}
        />
      </ChakraSlider>
    </Box>
  );
}

Slider.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  disabled: PropTypes.bool,
  colorScheme: PropTypes.string,
  hoursPerWeek: PropTypes.string,
};

export default Slider;
