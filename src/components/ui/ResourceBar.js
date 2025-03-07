// /Users/montysharma/Documents/V10/simplified/src/components/ui/ResourceBar.js
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Resource bar component for displaying resources with current/max values
 */
function ResourceBar({ label, value, max, className, showValues = true }) {
  // Round the values for display
  const displayValue = Math.round(value);
  const displayMax = Math.round(max);
  
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  return (
    <div style={{ marginBottom: '8px' }}>
      <div className="resource-label">
        <span>{label}</span>
        {showValues && <span>{displayValue}/{displayMax}</span>}
      </div>
      <div className={`resource-bar ${className || ''}`}>
        <div 
          className="resource-bar-fill" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
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
