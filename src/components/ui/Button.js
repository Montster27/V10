// /Users/montysharma/Documents/V10/simplified/src/components/ui/Button.js
import React from 'react';
import PropTypes from 'prop-types';
import { Button as ChakraButton } from '@chakra-ui/react';

/**
 * Custom button component using Chakra UI
 * with game-specific styling
 */
function Button({ 
  children, 
  variant = 'solid', 
  colorScheme = 'brand',
  size = 'md',
  isFullWidth = false,
  ...props 
}) {
  return (
    <ChakraButton
      variant={variant}
      colorScheme={colorScheme}
      size={size}
      isFullWidth={isFullWidth}
      borderRadius="md"
      fontWeight="medium"
      {...props}
    >
      {children}
    </ChakraButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['solid', 'outline', 'ghost', 'link']),
  colorScheme: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  isFullWidth: PropTypes.bool,
};

export default Button;
