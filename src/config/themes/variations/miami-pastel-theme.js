// /Users/montysharma/Documents/V10/simplified/src/config/themes/variations/miami-pastel-theme.js
import { extendTheme } from '@chakra-ui/react';

const miamiPastelTheme = extendTheme({
  colors: {
    brand: {
      50: '#ffeef5',
      100: '#fed0e3',
      200: '#fdb1d0',
      300: '#fc93be',
      400: '#fb74ab',
      500: '#fa5598', // Primary brand color
      600: '#e94e8c',
      700: '#d7487f',
      800: '#c64173',
      900: '#b53b67',
    },
    energy: {
      50: '#dffcff',
      100: '#c0f7ff',
      200: '#a0f2ff',
      300: '#81ecff',
      400: '#61e7ff',
      500: '#42e2ff', // Energy resource
      600: '#3ccbe6',
      700: '#36b4cc',
      800: '#309db3',
      900: '#2a8699',
    },
    stress: {
      50: '#fff5df',
      100: '#fee5b0',
      200: '#fdd67f',
      300: '#fcc64e',
      400: '#fbb61d',
      500: '#faa700', // Stress resource
      600: '#e39800',
      700: '#cc8900',
      800: '#b37900',
      900: '#996a00',
    },
    money: {
      50: '#e6fff2',
      100: '#beffd8',
      200: '#95ffbf',
      300: '#6dffa5',
      400: '#44ff8c',
      500: '#1cff73', // Money resource
      600: '#19e868',
      700: '#16d15c',
      800: '#14b951',
      900: '#11a245',
    },
    knowledge: {
      50: '#eee0ff',
      100: '#d0b1fe',
      200: '#b182fd',
      300: '#9254fc',
      400: '#7326fa',
      500: '#5500f9', // Knowledge resource
      600: '#4d00e0',
      700: '#4500c7',
      800: '#3e00ad',
      900: '#360094',
    },
    social: {
      50: '#fef4e6',
      100: '#fde3bd',
      200: '#fbd394',
      300: '#f9c36a',
      400: '#f8b241',
      500: '#f6a218', // Social resource
      600: '#e09316',
      700: '#c98314',
      800: '#b37312',
      900: '#9c620f',
    },
    pastel: {
      pink: '#ffafcc',
      blue: '#a2d2ff',
      yellow: '#fef9a7',
      mint: '#c1fba4',
      lavender: '#cdb4db',
      bg: '#f7f5fa',
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
    heading: `'DM Sans', sans-serif`,
    body: `'DM Sans', sans-serif`,
    mono: `'DM Mono', monospace`,
  },
  styles: {
    global: {
      body: {
        bg: 'pastel.bg',
        color: 'gray.800',
        backgroundSize: '100% 100%',
        backgroundAttachment: 'fixed',
      },
      'h1, h2, h3, h4': {
        color: 'brand.500',
        fontWeight: '700',
        letterSpacing: '-0.02em',
      },
      'h1': {
        fontSize: '2.5rem',
        color: 'brand.500',
        lineHeight: '1.2',
      }
    },
  },
  components: {
    Panel: {
      baseStyle: {
        bg: 'white',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
        border: '1px solid',
        borderColor: 'pastel.blue',
        p: 5,
      },
    },
    Button: {
      baseStyle: {
        fontWeight: '600',
        borderRadius: 'full',
        letterSpacing: '0.01em',
        transition: 'all 0.3s',
        _focus: {
          boxShadow: 'none',
        },
      },
      variants: {
        solid: (props) => ({
          bg: `${props.colorScheme}.500`,
          color: 'white',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          _hover: {
            bg: `${props.colorScheme}.400`,
            transform: 'translateY(-2px)',
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
          },
          _active: {
            bg: `${props.colorScheme}.600`,
            transform: 'translateY(0)',
          },
        }),
        outline: (props) => ({
          bg: 'transparent',
          color: `${props.colorScheme}.500`,
          border: '2px solid',
          borderColor: `${props.colorScheme}.500`,
          _hover: {
            bg: `${props.colorScheme}.50`,
            transform: 'translateY(-2px)',
          },
        }),
      },
    },
    Card: {
      baseStyle: {
        bg: 'white',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
        border: '1px solid',
        borderColor: 'pastel.pink',
        p: 5,
      },
    },
    Progress: {
      baseStyle: {
        track: {
          bg: 'gray.100',
          borderRadius: 'full',
        },
      },
      variants: {
        resourceBar: (props) => ({
          filledTrack: {
            bg: `${props.colorScheme}.500`,
            borderRadius: 'full',
          },
        }),
      },
    },
    Slider: {
      baseStyle: {
        track: {
          bg: 'gray.100',
          borderRadius: 'full',
          h: '8px',
        },
        thumb: {
          bg: 'white',
          borderWidth: '2px',
          borderColor: (props) => `${props.colorScheme}.500`,
          boxSize: '16px',
          _focus: {
            boxShadow: (props) => `0px 0px 0px 3px ${props.colorScheme}.200`,
          }
        },
        filledTrack: {
          borderRadius: 'full',
        },
      },
    },
    Badge: {
      baseStyle: {
        borderRadius: 'full',
        px: 3,
        py: 1,
        fontWeight: 'medium',
      },
    },
  }
});

export default miamiPastelTheme;