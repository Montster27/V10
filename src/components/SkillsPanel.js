// /Users/montysharma/Documents/V10/simplified/src/components/SkillsPanel.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unlockSkill } from '../slices/skillsSlice';
import { SKILL_CATEGORIES } from '../config/gameConstants';
import Panel from './ui/Panel';
import SkillCategory from './skills/SkillCategory';

function SkillsPanel() {
  const dispatch = useDispatch();
  const { points, unlocked, available, definitions } = useSelector(state => state.skills);
  
  const handleUnlockSkill = (skillId) => {
    dispatch(unlockSkill(skillId));
  };
  
  // Group skills by category
  const groupedSkills = {};
  
  // Initialize categories
  SKILL_CATEGORIES.forEach(category => {
    groupedSkills[category] = [];
  });
  
  // Add all visible skills (available + unlocked)
  const visibleSkillIds = [...new Set([...available, ...unlocked])];
  
  visibleSkillIds.forEach(skillId => {
    const skill = definitions[skillId];
    if (skill && skill.category in groupedSkills) {
      groupedSkills[skill.category].push(skill);
    }
  });
  
  // Format category titles
  const categoryTitles = {
    academic: 'Academic',
    social: 'Social',
    physical: 'Physical'
  };
  
  return (
    <Panel title={`Skills ${points > 0 ? `(${Math.round(points)} points)` : ''}`}>
      <div className="skills-grid">
        {SKILL_CATEGORIES.map(category => (
          <SkillCategory 
            key={category}
            title={categoryTitles[category] || category}
            skills={groupedSkills[category]}
            unlocked={unlocked}
            points={points}
            onUnlock={handleUnlockSkill}
          />
        ))}
      </div>
    </Panel>
  );
}

export default SkillsPanel;
