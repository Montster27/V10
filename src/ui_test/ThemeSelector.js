// /Users/montysharma/Documents/V10/simplified/src/ui_test/ThemeSelector.js
import React from 'react';
import {
  Box,
  Text,
  Flex,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react';
import { themeVariations } from '../config/themes/variations';

// Group themes by category
const groupedThemes = Object.entries(themeVariations).reduce((acc, [key, theme]) => {
  const category = theme.category || 'Base Themes';
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push({ key, ...theme });
  return acc;
}, {});

// Order categories
const categoryOrder = ['Base Themes', 'Synthwave', 'Miami Vice', 'Hologram'];

const ThemeSelector = ({ currentTheme, onChange }) => {
  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Select Theme:
      </Text>
      
      <Menu>
        <MenuButton as={Button} width="100%" mb={4}>
          {themeVariations[currentTheme]?.name || 'Default'} ▼
        </MenuButton>
        <MenuList maxH="300px" overflowY="auto">
          {categoryOrder.map(category => (
            <Box key={category}>
              {groupedThemes[category] && (
                <>
                  <Text px={3} pt={2} fontSize="sm" fontWeight="bold" color="gray.500">
                    {category}
                  </Text>
                  <Divider my={1} />
                  {groupedThemes[category].map(theme => (
                    <MenuItem 
                      key={theme.key} 
                      onClick={() => onChange(theme.key)}
                      backgroundColor={currentTheme === theme.key ? 'gray.100' : 'transparent'}
                    >
                      {theme.name}
                    </MenuItem>
                  ))}
                  <Box height={3} />
                </>
              )}
            </Box>
          ))}
        </MenuList>
      </Menu>
      
      <Flex direction="column" bg="gray.50" p={3} borderRadius="md" fontSize="sm">
        <Text fontWeight="bold">Current Theme:</Text>
        <Text>{themeVariations[currentTheme]?.name}</Text>
        <Text fontWeight="bold" mt={2}>Category:</Text>
        <Text>{themeVariations[currentTheme]?.category || 'Base Theme'}</Text>
      </Flex>
    </Box>
  );
};

export default ThemeSelector;