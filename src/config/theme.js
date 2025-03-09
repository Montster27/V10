// /Users/montysharma/Documents/V10/simplified/src/config/theme.js
import { extendTheme } from '@chakra-ui/react';

// Colors are inspired by 1980s college aesthetics with a modern touch
const colors = {
  brand: {
    50: '#e5f0ff',
    100: '#b8d4ff',
    200: '#8ab8ff',
    300: '#5c9cff',
    400: '#2e81ff',
    500: '#1467e6', // primary brand color
    600: '#0d51b8',
    700: '#073c8a',
    800: '#03265c',
    900: '#01102e',
  },
  energy: {
    50: '#f5fae5',
    100: '#e6f2c0',
    200: '#d6ea99',
    300: '#c5e272',
    400: '#b5da4a',
    500: '#9cc131', // energy resource
    600: '#7d9a27',
    700: '#5c721d',
    800: '#3b4b13',
    900: '#1b2408',
  },
  stress: {
    50: '#ffe5e5',
    100: '#ffb8b8',
    200: '#ff8a8a',
    300: '#ff5c5c',
    400: '#ff2e2e',
    500: '#e61414', // stress resource
    600: '#b80e0e',
    700: '#8a0909',
    800: '#5c0505',
    900: '#2e0101',
  },
  money: {
    50: '#e5ffe6',
    100: '#b3f5b9',
    200: '#80ed8c',
    300: '#4de45e',
    400: '#1adc31',
    500: '#15b329', // money resource
    600: '#108c20',
    700: '#0c6518',
    800: '#073e0f',
    900: '#031e07',
  },
  knowledge: {
    50: '#e5e9ff',
    100: '#c2cbff',
    200: '#9eadff',
    300: '#7a8fff',
    400: '#5771ff',
    500: '#4258e6', // knowledge resource
    600: '#3244b8',
    700: '#23318a',
    800: '#161e5c',
    900: '#080c2e',
  },
  social: {
    50: '#ffe5f8',
    100: '#ffb8e9',
    200: '#ff8adb',
    300: '#ff5ccc',
    400: '#ff2ebd',
    500: '#e614a4', // social resource
    600: '#b80e83',
    700: '#8a0962',
    800: '#5c0541',
    900: '#2e0120',
  },
  // Neutral colors for UI elements
  gray: {
    50: '#f7f9fc',
    100: '#edf2f7',
    200: '#e2e8f0',
    300: '#cbd5e0',
    400: '#a0aec0',
    500: '#718096',
    600: '#4a5568',
    700: '#2d3748',
    800: '#1a202c',
    900: '#171923',
  },
};

// Font settings with fallbacks
const fonts = {
  heading: `'Roboto Slab', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  body: `'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  mono: `'IBM Plex Mono', SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
};

// Component style overrides
const components = {
  Button: {
    baseStyle: {
      fontWeight: 'bold',
      borderRadius: 'md',
    },
    variants: {
      solid: (props) => ({
        bg: `${props.colorScheme}.500`,
        color: 'white',
        _hover: {
          bg: `${props.colorScheme}.600`,
        },
      }),
      outline: (props) => ({
        border: '2px solid',
        borderColor: `${props.colorScheme}.500`,
        color: `${props.colorScheme}.500`,
      }),
      ghost: (props) => ({
        color: `${props.colorScheme}.500`,
        _hover: {
          bg: `${props.colorScheme}.50`,
        },
      }),
    },
    defaultProps: {
      variant: 'solid',
      colorScheme: 'brand',
    },
  },
  Card: {
    baseStyle: {
      p: '4',
      borderRadius: 'lg',
      boxShadow: 'md',
      bg: 'white',
      overflow: 'hidden',
    },
    variants: {
      elevated: {
        boxShadow: 'lg',
      },
      outline: {
        border: '1px solid',
        borderColor: 'gray.200',
      },
    },
    defaultProps: {
      variant: 'elevated',
    },
  },
  Progress: {
    baseStyle: {
      track: {
        bg: 'gray.100',
      },
    },
    variants: {
      resourceBar: (props) => ({
        filledTrack: {
          bg: `${props.colorScheme}.500`,
        },
      }),
    },
    defaultProps: {
      size: 'md',
      colorScheme: 'brand',
    },
  },
};

// Global style overrides
const styles = {
  global: {
    body: {
      bg: 'gray.50',
      color: 'gray.800',
    },
  },
};

const theme = extendTheme({
  colors,
  fonts,
  components,
  styles,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

export default theme;
