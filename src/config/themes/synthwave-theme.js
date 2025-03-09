// /Users/montysharma/Documents/V10/simplified/src/config/themes/synthwave-theme.js
import { extendTheme } from '@chakra-ui/react';

const synthwaveTheme = extendTheme({
  colors: {
    brand: {
      50: '#f9e3ff',
      100: '#e4b5ff',
      200: '#d088ff',
      300: '#bc5bff',
      400: '#a92eff',
      500: '#9000ff', // Primary brand color
      600: '#7300cc',
      700: '#55009a',
      800: '#380066',
      900: '#1c0034',
    },
    energy: {
      50: '#dbfffc',
      100: '#aefff9',
      200: '#7ffff5',
      300: '#50fff1',
      400: '#23ffed',
      500: '#00e6d4', // Energy resource
      600: '#00b3a5',
      700: '#008077',
      800: '#004e49',
      900: '#001c1a',
    },
    stress: {
      50: '#ffe2fd',
      100: '#ffb2f5',
      200: '#ff80ed',
      300: '#ff4fe6',
      400: '#ff1fdf',
      500: '#e505c5', // Stress resource
      600: '#b2029b',
      700: '#800171',
      800: '#4e0047',
      900: '#1f001d',
    },
    money: {
      50: '#d4ffea',
      100: '#a7ffd2',
      200: '#76ffb9',
      300: '#45ffa1',
      400: '#14ff88',
      500: '#00e66e', // Money resource
      600: '#00b356',
      700: '#00813e',
      800: '#004f26',
      900: '#001e0e',
    },
    knowledge: {
      50: '#dbe6ff',
      100: '#afc5ff',
      200: '#82a2ff',
      300: '#557fff',
      400: '#285cff',
      500: '#0f43e6', // Knowledge resource
      600: '#0434b3',
      700: '#002581',
      800: '#00164f',
      900: '#00071f',
    },
    social: {
      50: '#ffdefb',
      100: '#ffb3ef',
      200: '#ff86e4',
      300: '#ff59d9',
      400: '#ff2ccf',
      500: '#e612b5', // Social resource
      600: '#b30b8e',
      700: '#810667',
      800: '#4e0340',
      900: '#1e001a',
    },
    // Dark backgrounds with blue/purple hues
    dark: {
      900: '#0c0117', // Deepest background
      800: '#120226',
      700: '#190336',
      600: '#230549',
      500: '#2c065c',
      400: '#35086f',
      300: '#3e0982',
      200: '#470b95',
      100: '#500ca8',
    },
    // Neon accents
    neon: {
      pink: '#ff00ff',
      blue: '#00f0ff',
      purple: '#b300ff',
      green: '#00ff66',
      yellow: '#fcee0c',
      grid: '#550099',
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
        bg: 'dark.900',
        color: 'white',
        backgroundImage: `
          linear-gradient(0deg, rgba(12,1,23,1) 0%, rgba(35,5,73,0.9) 100%),
          repeating-linear-gradient(90deg, rgba(85,0,153,0.07) 0px, rgba(85,0,153,0.07) 1px, transparent 1px, transparent 80px),
          repeating-linear-gradient(180deg, rgba(85,0,153,0.07) 0px, rgba(85,0,153,0.07) 1px, transparent 1px, transparent 80px)
        `,
        backgroundAttachment: 'fixed',
      },
      'h1, h2, h3, h4': {
        color: 'white',
        textShadow: '0 0 8px #ff00ff, 0 0 15px rgba(255,0,255,0.5)',
        letterSpacing: '1px',
      },
      'h1': {
        fontSize: '3rem',
        background: 'linear-gradient(to right, #00f0ff, #00ccff, #0099ff, #0066ff, #0033ff, #0000ff, #9900ff, #cc00ff, #ff00cc, #ff0099)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: 'none',
      },
    },
  },
  components: {
    Panel: {
      baseStyle: {
        bg: 'rgba(12,1,23,0.8)',
        borderRadius: '0.25rem',
        border: '1px solid',
        borderColor: 'neon.grid',
        boxShadow: '0 0 15px -5px #9000ff, inset 0 0 8px -3px #ff00ff',
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
          borderRadius: '0.25rem',
          borderBottom: '3px solid',
          borderColor: `${props.colorScheme}.700`,
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
        }),
      },
    },
    Card: {
      baseStyle: {
        bg: 'rgba(26,2,46,0.7)',
        borderRadius: '0.25rem',
        border: '1px solid',
        borderColor: 'neon.grid',
        boxShadow: '0 0 10px -3px #9000ff',
        overflow: 'hidden',
        p: 4,
      },
    },
    Progress: {
      baseStyle: {
        track: {
          bg: 'dark.800',
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
          bg: 'dark.700',
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
    },
    Heading: {
      baseStyle: {
        letterSpacing: '1px',
      },
    },
    Badge: {
      baseStyle: {
        textTransform: 'uppercase',
        fontFamily: 'mono',
      },
    },
  },
});

export default synthwaveTheme;