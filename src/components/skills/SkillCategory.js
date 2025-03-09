// /Users/montysharma/Documents/V10/simplified/src/components/skills/SkillCategory.js
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import SkillCard from './SkillCard';

function SkillCategory({ title, skills, unlocked, points, onUnlock }) {
  return (
    <Box mb={6}>
      <Heading as="h3" size="sm" mb={3} pb={1} borderBottomWidth="1px" borderColor="gray.200">
        {title}
      </Heading>
      <SimpleGrid columns={[1, null, 2]} spacing={3}>
        {skills.map(skill => (
          <SkillCard
            key={skill.id}
            skill={skill}
            unlocked={unlocked.includes(skill.id)}
            canUnlock={points >= skill.cost}
            onUnlock={() => onUnlock(skill.id)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

SkillCategory.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  unlocked: PropTypes.array.isRequired,
  points: PropTypes.number.isRequired,
  onUnlock: PropTypes.func.isRequired,
};

export default SkillCategory;
