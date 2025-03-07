// /Users/montysharma/Documents/V10/simplified/src/components/skills/SkillCategory.js
import React from 'react';
import PropTypes from 'prop-types';
import SkillCard from './SkillCard';

function SkillCategory({ title, skills, unlocked, points, onUnlock }) {
  return (
    <div className="skill-category">
      <h3>{title}</h3>
      <div className="skills-compact">
        {skills.map(skill => (
          <SkillCard
            key={skill.id}
            skill={skill}
            unlocked={unlocked.includes(skill.id)}
            canUnlock={points >= skill.cost}
            onUnlock={() => onUnlock(skill.id)}
          />
        ))}
      </div>
    </div>
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
