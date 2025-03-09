// /Users/montysharma/Documents/V10/simplified/src/config/themes/digital-grid-theme.js
import { extendTheme } from '@chakra-ui/react';

const digitalGridTheme = extendTheme({
  colors: {
    brand: {
      50: '#e0ffe0',
      100: '#b2ffb2',
      200: '#80ff80',
      300: '#4dff4d',
      400: '#1aff1a',
      500: '#00e600', // Primary brand color
      600: '#00b300',
      700: '#008000',
      800: '#004d00',
      900: '#001a00',
    },
    energy: {
      50: '#dbfff7',
      100: '#acffe7',
      200: '#7cffd7',
      300: '#4cffc7',
      400: '#1dffb7',
      500: '#00e69d', // Energy resource
      600: '#00b37b',
      700: '#008058',
      800: '#004d36',
      900: '#001a12',
    },
    stress: {
      50: '#ffe0e0',
      100: '#ffb2b2',
      200: '#ff8080',
      300: '#ff4d4d',
      400: '#ff1a1a',
      500: '#e60000', // Stress resource
      600: '#b30000',
      700: '#800000',
      800: '#4d0000',
      900: '#1a0000',
    },
    money: {
      50: '#ffffd9',
      100: '#ffffb0',
      200: '#ffff87',
      300: '#ffff5e',
      400: '#ffff35',
      500: '#e6e600', // Money resource
      600: '#b3b300',
      700: '#808000',
      800: '#4d4d00',
      900: '#1a1a00',
    },
    knowledge: {
      50: '#dbf6ff',
      100: '#ace6ff',
      200: '#7dd6ff',
      300: '#4dc5ff',
      400: '#1eb5ff',
      500: '#009ce6', // Knowledge resource
      600: '#007ab3',
      700: '#005880',
      800: '#00354d',
      900: '#00121a',
    },
    social: {
      50: '#ffe0f7',
      100: '#ffb2e7',
      200: '#ff80d7',
      300: '#ff4dc7',
      400: '#ff1ab7',
      500: '#e6009d', // Social resource
      600: '#b3007b',
      700: '#800058',
      800: '#4d0036',
      900: '#1a0012',
    },
    // Terminal-inspired dark backgrounds
    terminal: {
      900: '#001000', // Deepest background
      800: '#001800',
      700: '#002000',
      600: '#002800',
      500: '#003000',
      400: '#003800',
      300: '#004000',
      200: '#004800',
      100: '#005000',
    },
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
  },
  fonts: {
    heading: `'VT323', monospace`,
    body: `'Share Tech Mono', monospace`,
    mono: `'Share Tech Mono', monospace`,
  },
  styles: {
    global: {
      body: {
        bg: 'terminal.900',
        color: 'brand.500',
        backgroundImage: `
          repeating-linear-gradient(0deg, rgba(0,50,0,0.15) 0px, rgba(0,50,0,0.15) 1px, transparent 1px, transparent 20px),
          repeating-linear-gradient(90deg, rgba(0,50,0,0.15) 0px, rgba(0,50,0,0.15) 1px, transparent 1px, transparent 20px)
        `,
        backgroundSize: '20px 20px',
        fontFamily: 'mono',
      },
      'h1, h2, h3, h4': {
        color: 'brand.500',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontWeight: 'normal',
        fontFamily: 'heading',
      },
      'h1': {
        fontSize: '2.5rem',
        borderBottom: '2px solid',
        borderColor: 'brand.500',
        paddingBottom: '0.5rem',
        marginBottom: '1rem',
      },
    },
  },
  components: {
    Panel: {
      baseStyle: {
        bg: 'rgba(0,16,0,0.8)',
        borderRadius: '0',
        border: '1px solid',
        borderColor: 'brand.500',
        p: 4,
        position: 'relative',
        _before: {
          content: '"[SYSTEM]"',
          position: 'absolute',
          top: '-10px',
          left: '10px',
          color: 'brand.500',
          bg: 'terminal.900',
          px: '2',
          fontSize: 'sm',
          fontFamily: 'mono',
        },
      },
    },
    Button: {
      baseStyle: {
        fontFamily: 'mono',
        letterSpacing: '1px',
        fontWeight: 'normal',
      },
      variants: {
        solid: (props) => ({
          bg: 'terminal.800',
          color: `${props.colorScheme}.500`,
          border: '1px solid',
          borderColor: `${props.colorScheme}.500`,
          _hover: {
            bg: 'terminal.700',
            boxShadow: '0 0 10px -2px currentColor',
          },
          _active: {
            bg: 'terminal.600',
          },
        }),
        outline: (props) => ({
          bg: 'transparent',
          color: `${props.colorScheme}.500`,
          border: '1px solid',
          borderColor: `${props.colorScheme}.500`,
          _hover: {
            bg: 'rgba(0,230,0,0.1)',
          },
        }),
      },
    },
    Card: {
      baseStyle: {
        bg: 'terminal.800',
        borderRadius: '0',
        border: '1px solid',
        borderColor: 'brand.500',
        color: 'brand.500',
        p: 4,
        position: 'relative',
        _before: {
          content: '"> "',
          position: 'absolute',
          top: '0.5rem',
          left: '0.5rem',
          fontFamily: 'mono',
        },
        pl: '1.5rem',
      },
    },
    Progress: {
      baseStyle: {
        track: {
          bg: 'terminal.800',
          borderRadius: '0',
          border: '1px solid',
          borderColor: 'brand.500',
        },
      },
      variants: {
        resourceBar: (props) => ({
          filledTrack: {
            bg: `${props.colorScheme}.500`,
            borderRadius: '0',
          },
        }),
      },
    },
    Slider: {
      baseStyle: {
        track: {
          bg: 'terminal.800',
          borderRadius: '0',
          border: '1px solid',
          borderColor: 'brand.500',
        },
        thumb: {
          border: '1px solid',
          borderColor: 'brand.500',
          bg: 'terminal.700',
        },
        filledTrack: {
          borderRadius: '0',
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'heading',
        textTransform: 'uppercase',
        letterSpacing: '1px',
      },
    },
    Badge: {
      baseStyle: {
        fontFamily: 'mono',
        borderRadius: '0',
      },
    },
  },
});

export default digitalGridTheme;