// /Users/montysharma/Documents/V10/simplified/src/config/themes/variations/synthwave-sunset-theme.js
import { extendTheme } from '@chakra-ui/react';

const synthwaveSunsetTheme = extendTheme({
  colors: {
    brand: {
      50: '#ffe5f0',
      100: '#ffb8d6',
      200: '#ff8abc',
      300: '#ff5ca1',
      400: '#ff2e87',
      500: '#e6146d', // Primary brand color
      600: '#b30e55',
      700: '#80093c',
      800: '#4d0524',
      900: '#1f000e',
    },
    energy: {
      50: '#fff3dc',
      100: '#ffe1aa',
      200: '#ffcf78',
      300: '#ffbd45',
      400: '#ffaa13',
      500: '#e69200', // Energy resource
      600: '#b37100',
      700: '#805100',
      800: '#4d3000',
      900: '#1a1000',
    },
    stress: {
      50: '#ffe2e2',
      100: '#ffb0b0',
      200: '#ff8585',
      300: '#ff5959',
      400: '#ff2e2e',
      500: '#e60000', // Stress resource
      600: '#b30000',
      700: '#800000',
      800: '#4d0000',
      900: '#1a0000',
    },
    money: {
      50: '#e5faea',
      100: '#c5f1d0',
      200: '#a1e9b5',
      300: '#7de09a',
      400: '#58d87f',
      500: '#3ebf65', // Money resource
      600: '#2f944e',
      700: '#216a38',
      800: '#144021',
      900: '#061700',
    },
    knowledge: {
      50: '#e5eaff',
      100: '#b8c8ff',
      200: '#8aa6ff',
      300: '#5c84ff',
      400: '#2e62ff',
      500: '#1549e6', // Knowledge resource
      600: '#0d38b3',
      700: '#072880',
      800: '#03184d',
      900: '#00071a',
    },
    social: {
      50: '#f6e5ff',
      100: '#e5b8ff',
      200: '#d48aff',
      300: '#c25cff',
      400: '#b12eff',
      500: '#9714e6', // Social resource
      600: '#770eb3',
      700: '#550980',
      800: '#33054d',
      900: '#14011f',
    },
    // Sunset backgrounds with purple/orange hues
    sunset: {
      900: '#0e001e', // Deepest background
      800: '#1c0033',
      700: '#2b0049',
      600: '#3a005f',
      500: '#490075',
      400: '#57008b',
      300: '#6600a1',
      200: '#7500b7',
      100: '#8300cc',
    },
    // Accent colors
    accent: {
      purple: '#9900ff',
      pink: '#ff00cc',
      orange: '#ff6d00',
      yellow: '#ffbd00',
      blue: '#0088ff',
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
    heading: `'Orbitron', sans-serif`,
    body: `'IBM Plex Mono', monospace`,
    mono: `'IBM Plex Mono', monospace`,
  },
  styles: {
    global: {
      body: {
        bg: 'sunset.900',
        color: 'white',
        backgroundImage: `
          linear-gradient(180deg, rgba(14,0,30,1) 0%, rgba(40,0,75,0.9) 100%),
          linear-gradient(270deg, rgba(255,25,0,0.15) 0%, rgba(255,109,0,0.05) 20%, rgba(0,0,0,0) 50%)
        `,
        backgroundAttachment: 'fixed',
      },
      'h1, h2, h3, h4': {
        color: 'white',
        textShadow: '0 0 8px #ff00cc, 0 0 15px rgba(255,0,204,0.5)',
        letterSpacing: '1px',
      },
      'h1': {
        fontSize: '3rem',
        background: 'linear-gradient(to right, #ffbd00, #ff6d00, #ff00cc, #9900ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: 'none',
      },
    },
  },
  components: {
    Panel: {
      baseStyle: {
        bg: 'rgba(14,0,30,0.8)',
        borderRadius: '1rem',
        border: '1px solid',
        borderColor: 'accent.orange',
        boxShadow: '0 0 15px -5px #ff6d00, inset 0 0 8px -3px #ffbd00',
        p: 4,
        backdropFilter: 'blur(8px)',
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 'normal',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        _hover: {
          transform: 'translateY(-2px)',
          transition: 'all 0.2s',
        },
      },
      variants: {
        solid: (props) => ({
          bg: `${props.colorScheme}.500`,
          color: 'white',
          textShadow: '0 0 5px currentColor',
          boxShadow: '0 0 10px -3px currentColor',
          _hover: {
            bg: `${props.colorScheme}.400`,
            boxShadow: '0 0 15px -2px currentColor',
          },
          borderRadius: '2rem',
        }),
        outline: (props) => ({
          bg: 'transparent',
          color: `${props.colorScheme}.400`,
          border: '1px solid',
          borderColor: `${props.colorScheme}.500`,
          textShadow: '0 0 5px currentColor',
          _hover: {
            bg: `${props.colorScheme}.900`,
            boxShadow: '0 0 10px -3px currentColor',
          },
          borderRadius: '2rem',
        }),
      },
    },
    Card: {
      baseStyle: {
        bg: 'rgba(20,0,40,0.7)',
        borderRadius: '1rem',
        border: '1px solid',
        borderColor: 'accent.pink',
        boxShadow: '0 0 10px -3px #ff00cc',
        overflow: 'hidden',
        p: 4,
      },
    },
    Progress: {
      baseStyle: {
        track: {
          bg: 'sunset.800',
          border: '1px solid',
          borderColor: 'rgba(255,255,255,0.1)',
        },
      },
      variants: {
        resourceBar: (props) => ({
          filledTrack: {
            bg: `${props.colorScheme}.500`,
            boxShadow: '0 0 8px -2px currentColor',
          },
        }),
      },
    },
    Slider: {
      baseStyle: {
        track: {
          bg: 'sunset.700',
          borderRadius: 'full',
          border: '1px solid',
          borderColor: 'rgba(255,255,255,0.1)',
        },
        thumb: {
          border: '2px solid',
          borderColor: (props) => `${props.colorScheme}.500`,
          boxShadow: (props) => `0 0 8px -2px ${props.colorScheme}.500`,
        },
        filledTrack: {
          borderRadius: 'full',
        },
      },
    }
  }
});

export default synthwaveSunsetTheme;