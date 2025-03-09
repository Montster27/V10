// /Users/montysharma/Documents/V10/simplified/src/components/ui/ResourceBar.js
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Text, Progress } from '@chakra-ui/react';

/**
 * Resource bar component for displaying resources with current/max values using Chakra UI
 */
function ResourceBar({ label, value, max, className, showValues = true }) {
  // Round the values for display
  const displayValue = Math.round(value);
  const displayMax = Math.round(max);
  
  // Determine the color scheme based on the label
  const getColorScheme = (label) => {
    const labelLower = label.toLowerCase();
    if (labelLower.includes('energy')) return 'energy';
    if (labelLower.includes('stress')) return 'stress';
    if (labelLower.includes('money')) return 'money';
    if (labelLower.includes('knowledge')) return 'knowledge';
    if (labelLower.includes('social')) return 'social';
    return 'brand';
  };
  
  const colorScheme = getColorScheme(label);
  
  return (
    <Box mb={3} className={className}>
      <Flex justify="space-between" mb={1}>
        <Text fontWeight="medium">{label}</Text>
        {showValues && (
          <Text fontWeight="medium">
            {displayValue}/{displayMax}
          </Text>
        )}
      </Flex>
      <Progress 
        value={(value / max) * 100} 
        size="sm" 
        colorScheme={colorScheme}
        borderRadius="md"
      />
    </Box>
  );
}

ResourceBar.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  className: PropTypes.string,
  showValues: PropTypes.bool,
};

export default ResourceBar;
