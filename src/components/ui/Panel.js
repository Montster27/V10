// /Users/montysharma/Documents/V10/simplified/src/components/ui/Panel.js
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading } from '@chakra-ui/react';

/**
 * Reusable panel component with consistent styling using Chakra UI
 */
function Panel({ title, children, className, style, ...rest }) {
  return (
    <Box
      className={className}
      bg="white"
      boxShadow="md"
      borderRadius="md"
      p={4}
      mb={4}
      {...rest}
      style={style}
    >
      {title && (
        <Heading as="h2" size="md" mb={4} pb={2} borderBottom="1px solid" borderColor="gray.200">
          {title}
        </Heading>
      )}
      {children}
    </Box>
  );
}

Panel.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Panel;
