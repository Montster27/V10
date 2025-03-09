// /Users/montysharma/Documents/V10/simplified/src/components/skills/SkillCard.js
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Text, Flex, Badge } from '@chakra-ui/react';
import Button from '../ui/Button';

function SkillCard({ skill, unlocked, canUnlock, onUnlock }) {
  // Determine the color scheme based on the skill category
  const getCategoryColorScheme = (category) => {
    switch (category?.toLowerCase()) {
      case 'academic': return 'knowledge';
      case 'social': return 'social';
      case 'physical': return 'energy';
      default: return 'brand';
    }
  };
  
  const colorScheme = getCategoryColorScheme(skill.category);
  
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      p={3}
      mb={3}
      bg={unlocked ? `${colorScheme}.50` : 'white'}
      borderColor={unlocked ? `${colorScheme}.300` : 'gray.200'}
      boxShadow="sm"
      transition="all 0.2s"
      _hover={{ boxShadow: 'md' }}
    >
      <Flex justifyContent="space-between" mb={2}>
        <Heading as="h4" size="xs">{skill.name}</Heading>
        <Badge colorScheme={canUnlock ? colorScheme : 'gray'}>
          {skill.cost} pts
        </Badge>
      </Flex>
      <Text fontSize="sm" mb={3}>{skill.description}</Text>
      <Box>
        {unlocked ? (
          <Badge colorScheme={colorScheme} variant="solid" px={2} py={1}>
            Unlocked
          </Badge>
        ) : (
          <Button
            onClick={onUnlock}
            disabled={!canUnlock}
            size="xs"
            colorScheme={colorScheme}
            isDisabled={!canUnlock}
          >
            Unlock
          </Button>
        )}
      </Box>
    </Box>
  );
}

SkillCard.propTypes = {
  skill: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    effects: PropTypes.object.isRequired,
  }).isRequired,
  unlocked: PropTypes.bool.isRequired,
  canUnlock: PropTypes.bool.isRequired,
  onUnlock: PropTypes.func.isRequired,
};

export default SkillCard;
