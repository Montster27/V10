// /Users/montysharma/Documents/V10/simplified/src/components/skills/SkillCard.js
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/Button';

function SkillCard({ skill, unlocked, canUnlock, onUnlock }) {
  return (
    <div className={`skill-card ${unlocked ? 'unlocked' : ''}`}>
      <div className="skill-header">
        <h4>{skill.name}</h4>
        <div style={{fontSize: '0.8rem'}}>Cost: {skill.cost}</div>
      </div>
      <p>{skill.description}</p>
      <div>
        {unlocked ? (
          <span className="skill-unlocked">Unlocked</span>
        ) : (
          <Button
            onClick={onUnlock}
            disabled={!canUnlock}
            size="small"
          >
            Unlock
          </Button>
        )}
      </div>
    </div>
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
