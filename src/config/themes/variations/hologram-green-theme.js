// /Users/montysharma/Documents/V10/simplified/src/config/themes/variations/hologram-green-theme.js
import { extendTheme } from '@chakra-ui/react';

const hologramGreenTheme = extendTheme({
  colors: {
    brand: {
      50: '#e2ffe0',
      100: '#b8ffb3',
      200: '#8dff85',
      300: '#62ff58',
      400: '#37ff2a',
      500: '#0de600', // Primary brand color
      600: '#0bb300',
      700: '#088000',
      800: '#054d00',
      900: '#021a00',
    },
    energy: {
      50: '#e0fff9',
      100: '#b3ffee',
      200: '#85ffe3',
      300: '#58ffd8',
      400: '#2affcd',
      500: '#00e6b8', // Energy resource
      600: '#00b38f',
      700: '#008066',
      800: '#004d3d',
      900: '#001a14',
    },
    stress: {
      50: '#ffe0e7',
      100: '#ffb3c4',
      200: '#ff85a0',
      300: '#ff587d',
      400: '#ff2a59',
      500: '#e60036', // Stress resource
      600: '#b3002a',
      700: '#80001e',
      800: '#4d0012',
      900: '#1a0006',
    },
    money: {
      50: '#fcffe0',
      100: '#f7ffb3',
      200: '#f2ff85',
      300: '#edff58',
      400: '#e8ff2a',
      500: '#d4e600', // Money resource
      600: '#a5b300',
      700: '#758000',
      800: '#464d00',
      900: '#181a00',
    },
    knowledge: {
      50: '#e0ebff',
      100: '#b3ceff',
      200: '#85b0ff',
      300: '#5893ff',
      400: '#2a75ff',
      500: '#0057e6', // Knowledge resource
      600: '#0044b3',
      700: '#003180',
      800: '#001d4d',
      900: '#00091a',
    },
    social: {
      50: '#feffe0',
      100: '#faffb3',
      200: '#f7ff85',
      300: '#f3ff58',
      400: '#f0ff2a',
      500: '#dce600', // Social resource
      600: '#abb300',
      700: '#7a8000',
      800: '#494d00',
      900: '#181a00',
    },
    // Green hologram palette
    holo: {
      900: '#001500', // Deepest background
      800: '#002300',
      700: '#003000',
      600: '#003e00',
      500: '#004c00',
      400: '#005900',
      300: '#006700',
      200: '#007400',
      100: '#008200',
      glow: '#00ff41',
      accent: '#00ff9d',
      grid: '#00b33f',
      text: '#e6ffe6',
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
    heading: `'Rajdhani', sans-serif`,
    body: `'Rajdhani', sans-serif`,
    mono: `'Share Tech Mono', monospace`,
  },
  styles: {
    global: {
      body: {
        bg: 'holo.900',
        color: 'holo.text',
        backgroundImage: `
          linear-gradient(0deg, #001500 0%, #002900 100%),
          repeating-linear-gradient(90deg, rgba(0,179,63,0.05) 0px, rgba(0,179,63,0.05) 1px, transparent 1px, transparent 60px),
          repeating-linear-gradient(0deg, rgba(0,179,63,0.05) 0px, rgba(0,179,63,0.05) 1px, transparent 1px, transparent 60px)
        `,
        backgroundSize: '100% 100%, 60px 60px, 60px 60px',
        backgroundAttachment: 'fixed',
      },
      '::selection': {
        bg: 'rgba(0,255,65,0.3)',
        color: 'white',
      },
      'h1, h2, h3, h4': {
        color: 'holo.text',
        fontFamily: 'heading',
        letterSpacing: '0.05em',
        fontWeight: '600',
        textShadow: '0 0 10px rgba(0,255,65,0.5)',
      },
      'h1': {
        fontSize: '2.5rem',
        textTransform: 'uppercase',
        position: 'relative',
        _after: {
          content: '""',
          position: 'absolute',
          bottom: '-8px',
          left: '0',
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, holo.accent, transparent)',
        }
      },
    },
  },
  components: {
    Panel: {
      baseStyle: {
        bg: 'rgba(0,21,0,0.7)',
        borderRadius: '0',
        border: '1px solid',
        borderColor: 'holo.grid',
        boxShadow: '0 0 15px -5px #00ff41, inset 0 0 5px -2px #00ff41',
        backdropFilter: 'blur(5px)',
        p: 5,
        position: 'relative',
        _before: {
          content: '">"',
          position: 'absolute',
          top: '-24px',
          left: '0',
          color: 'holo.accent',
          fontFamily: 'mono',
          fontSize: 'lg',
        }
      },
    },
    Button: {
      baseStyle: {
        fontFamily: 'mono',
        fontWeight: 'normal',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        transition: 'all 0.2s',
      },
      variants: {
        solid: (props) => ({
          bg: 'rgba(0,35,0,0.8)',
          color: 'holo.accent',
          border: '1px solid',
          borderColor: 'holo.grid',
          borderRadius: '0',
          boxShadow: '0 0 8px -3px #00ff41',
          _hover: {
            bg: 'rgba(0,50,0,0.8)',
            boxShadow: '0 0 12px -3px #00ff41',
            transform: 'translateY(-1px)',
          },
          _active: {
            transform: 'translateY(0)',
          }
        }),
        outline: (props) => ({
          bg: 'transparent',
          color: 'holo.accent',
          border: '1px solid',
          borderColor: 'holo.grid',
          borderRadius: '0',
          _hover: {
            bg: 'rgba(0,35,0,0.8)',
            boxShadow: '0 0 8px -3px #00ff41',
          },
        }),
      },
    },
    Card: {
      baseStyle: {
        bg: 'rgba(0,35,0,0.7)',
        borderRadius: '0',
        border: '1px solid',
        borderColor: 'holo.grid',
        overflow: 'hidden',
        p: 4,
        position: 'relative',
        _after: {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          background: 'repeating-linear-gradient(rgba(0,35,0,0) 0px, rgba(0,35,0,0) 1px, rgba(0,255,65,0.03) 1px, rgba(0,255,65,0.03) 2px)',
          backgroundSize: '100% 2px',
          pointerEvents: 'none',
        }
      },
    },
    Progress: {
      baseStyle: {
        track: {
          bg: 'rgba(0,21,0,0.7)',
          border: '1px solid',
          borderColor: 'rgba(0,179,63,0.3)',
          borderRadius: '0',
        },
      },
      variants: {
        resourceBar: (props) => ({
          filledTrack: {
            bg: 'holo.glow',
            opacity: '0.7',
            borderRadius: '0',
          },
        }),
      },
    },
    Slider: {
      baseStyle: {
        track: {
          bg: 'rgba(0,21,0,0.7)',
          border: '1px solid',
          borderColor: 'rgba(0,179,63,0.3)',
          borderRadius: '0',
        },
        thumb: {
          bg: 'holo.900',
          border: '1px solid',
          borderColor: 'holo.glow',
          boxShadow: '0 0 5px 0px holo.glow',
          borderRadius: '0',
          _focus: {
            boxShadow: '0 0 8px 0px holo.glow',
          }
        },
        filledTrack: {
          bg: 'holo.glow',
          opacity: '0.7',
          borderRadius: '0',
        },
      },
    },
    Badge: {
      baseStyle: {
        bg: 'transparent',
        color: 'holo.glow',
        fontFamily: 'mono',
        textTransform: 'uppercase',
        borderRadius: '0',
        letterSpacing: '0.05em',
        border: '1px solid',
        borderColor: 'rgba(0,179,63,0.5)',
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'body',
        letterSpacing: '0.02em',
      },
    },
  }
});

export default hologramGreenTheme;