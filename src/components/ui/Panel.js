// /Users/montysharma/Documents/V10/simplified/src/components/ui/Panel.js
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable panel component with consistent styling
 */
function Panel({ title, children, className, style }) {
  return (
    <div className={`panel ${className || ''}`} style={style}>
      {title && <h2 className="panel-header">{title}</h2>}
      {children}
    </div>
  );
}

Panel.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Panel;
