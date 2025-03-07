// /Users/montysharma/Documents/V10/simplified/src/components/SkillsPanel.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unlockSkill } from '../slices/skillsSlice';

function SkillsPanel() {
  const dispatch = useDispatch();
  const { points, unlocked, available, definitions } = useSelector(state => state.skills);
  
  const handleUnlockSkill = (skillId) => {
    dispatch(unlockSkill(skillId));
  };
  
  // Group skills by category
  const groupedSkills = {
    academic: [],
    social: [],
    physical: [],
  };
  
  // Fill the groups with available skills
  available.forEach(skillId => {
    const skill = definitions[skillId];
    if (skill && skill.category in groupedSkills) {
      groupedSkills[skill.category].push(skill);
    }
  });
  
  // Add unlocked skills to display
  unlocked.forEach(skillId => {
    const skill = definitions[skillId];
    if (skill && skill.category in groupedSkills) {
      if (!groupedSkills[skill.category].some(s => s.id === skillId)) {
        groupedSkills[skill.category].push({...skill, unlocked: true});
      }
    }
  });
  
  return (
    <div className="panel">
      <h2 className="panel-header">Skills <span style={{float: 'right', fontSize: '0.9rem'}}>Points: {Math.round(points)}</span></h2>
      
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Academic</h3>
          <div className="skills-compact">
            {groupedSkills.academic.map(skill => (
              <div key={skill.id} className={`skill-card ${skill.unlocked ? 'unlocked' : ''}`}>
                <div className="skill-header">
                  <h4>{skill.name}</h4>
                  <div style={{fontSize: '0.8rem'}}>Cost: {skill.cost}</div>
                </div>
                <p>{skill.description}</p>
                <div>
                  {skill.unlocked ? (
                    <span className="skill-unlocked">Unlocked</span>
                  ) : (
                    <button
                      onClick={() => handleUnlockSkill(skill.id)}
                      disabled={points < skill.cost}
                      style={{fontSize: '0.8rem', padding: '2px 8px'}}
                    >
                      Unlock
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <h3>Social</h3>
          <div className="skills-compact">
            {groupedSkills.social.map(skill => (
              <div key={skill.id} className={`skill-card ${skill.unlocked ? 'unlocked' : ''}`}>
                <div className="skill-header">
                  <h4>{skill.name}</h4>
                  <div style={{fontSize: '0.8rem'}}>Cost: {skill.cost}</div>
                </div>
                <p>{skill.description}</p>
                <div>
                  {skill.unlocked ? (
                    <span className="skill-unlocked">Unlocked</span>
                  ) : (
                    <button
                      onClick={() => handleUnlockSkill(skill.id)}
                      disabled={points < skill.cost}
                      style={{fontSize: '0.8rem', padding: '2px 8px'}}
                    >
                      Unlock
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <h3>Physical</h3>
          <div className="skills-compact">
            {groupedSkills.physical.map(skill => (
              <div key={skill.id} className={`skill-card ${skill.unlocked ? 'unlocked' : ''}`}>
                <div className="skill-header">
                  <h4>{skill.name}</h4>
                  <div style={{fontSize: '0.8rem'}}>Cost: {skill.cost}</div>
                </div>
                <p>{skill.description}</p>
                <div>
                  {skill.unlocked ? (
                    <span className="skill-unlocked">Unlocked</span>
                  ) : (
                    <button
                      onClick={() => handleUnlockSkill(skill.id)}
                      disabled={points < skill.cost}
                      style={{fontSize: '0.8rem', padding: '2px 8px'}}
                    >
                      Unlock
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsPanel;
