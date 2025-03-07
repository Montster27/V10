// /Users/montysharma/Documents/V10/simplified/src/components/ui/Button.js
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable button component
 */
function Button({
  children,
  onClick,
  primary = false,
  disabled = false,
  size = 'medium',
  style = {},
  className = '',
}) {
  const sizeClass = {
    small: { padding: '2px 8px', fontSize: '0.8rem' },
    medium: { padding: '6px 12px', fontSize: '0.9rem' },
    large: { padding: '8px 16px', fontSize: '1rem' },
  }[size];
  
  const baseClassName = primary ? 'primary' : '';
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClassName} ${className}`}
      style={{ ...sizeClass, ...style }}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Button;
