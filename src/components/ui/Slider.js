// /Users/montysharma/Documents/V10/simplified/src/components/ui/Slider.js
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Enhanced slider component with label and optional impact display
 */
function Slider({ 
  label, 
  value, 
  onChange,
  min = 0,
  max = 100,
  impact = null,
  impactLabel = "",
  step = 1,
  disabled = false 
}) {
  const handleChange = (e) => {
    onChange(parseInt(e.target.value, 10));
  };
  
  return (
    <div className="slider-container">
      <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
        <span>{label}: {value}%</span>
        {impact !== null && (
          <span style={{ color: '#666', fontSize: '12px' }}>
            {impactLabel}: {impact > 0 ? '+' : ''}{Math.round(impact)}
          </span>
        )}
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="slider"
        disabled={disabled}
      />
    </div>
  );
}

Slider.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  impact: PropTypes.number,
  impactLabel: PropTypes.string,
  step: PropTypes.number,
  disabled: PropTypes.bool,
};

export default Slider;
