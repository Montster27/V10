// /Users/montysharma/Documents/V10/simplified/src/components/ui/Card.js
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Flex } from '@chakra-ui/react';

/**
 * A flexible Card component built with Chakra UI
 * for presenting content in the game
 */
function Card({ 
  title, 
  children, 
  variant = 'default', 
  headerAction,
  colorScheme = 'brand', 
  ...rest 
}) {
  // Define styles based on variant
  const getVariantStyles = () => {
    switch (variant) {
      case 'outline':
        return {
          bg: 'white',
          border: '1px solid',
          borderColor: 'gray.200',
          boxShadow: 'none',
        };
      case 'elevated':
        return {
          bg: 'white',
          boxShadow: 'lg',
        };
      case 'filled':
        return {
          bg: `${colorScheme}.500`,
          color: 'white',
          boxShadow: 'md',
        };
      case 'subtle':
        return {
          bg: `${colorScheme}.50`,
          boxShadow: 'sm',
        };
      default:
        return {
          bg: 'white',
          boxShadow: 'md',
        };
    }
  };

  const variantStyles = getVariantStyles();
  
  return (
    <Box
      borderRadius="md"
      overflow="hidden"
      p={4}
      {...variantStyles}
      {...rest}
    >
      {title && (
        <Flex 
          justify="space-between" 
          align="center" 
          mb={3} 
          pb={2} 
          borderBottomWidth={variant !== 'filled' ? '1px' : 0}
          borderColor="gray.200"
        >
          <Heading 
            as="h3" 
            size="sm" 
            fontWeight="semibold"
          >
            {title}
          </Heading>
          {headerAction && (
            <Box>{headerAction}</Box>
          )}
        </Flex>
      )}
      {children}
    </Box>
  );
}

Card.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'outline', 'elevated', 'filled', 'subtle']),
  headerAction: PropTypes.node,
  colorScheme: PropTypes.string,
};

export default Card;
