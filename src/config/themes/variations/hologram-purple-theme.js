// /Users/montysharma/Documents/V10/simplified/src/config/themes/variations/hologram-purple-theme.js
import { extendTheme } from '@chakra-ui/react';

const hologramPurpleTheme = extendTheme({
  colors: {
    brand: {
      50: '#f3e0ff',
      100: '#dbb3ff',
      200: '#c285ff',
      300: '#aa58ff',
      400: '#912aff',
      500: '#7800e6', // Primary brand color
      600: '#5d00b3',
      700: '#430080',
      800: '#28004d',
      900: '#0e001a',
    },
    energy: {
      50: '#ffe9fb',
      100: '#ffc2f2',
      200: '#ff9be8',
      300: '#ff73df',
      400: '#ff4cd5',
      500: '#e633bc', // Energy resource
      600: '#b32892',
      700: '#801d68',
      800: '#4d113f',
      900: '#1a0615',
    },
    stress: {
      50: '#ffdfff',
      100: '#ffb0ff',
      200: '#ff80ff',
      300: '#ff51ff',
      400: '#ff21ff',
      500: '#e600e6', // Stress resource
      600: '#b300b3',
      700: '#800080',
      800: '#4d004d',
      900: '#1a001a',
    },
    money: {
      50: '#e3e0ff',
      100: '#b8b3ff',
      200: '#8c85ff',
      300: '#6058ff',
      400: '#342aff',
      500: '#1a00e6', // Money resource
      600: '#1400b3',
      700: '#0e0080',
      800: '#09004d',
      900: '#03001a',
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
      50: '#ffe0ff',
      100: '#ffb3ff',
      200: '#ff85ff',
      300: '#ff58ff',
      400: '#ff2aff',
      500: '#e600e6', // Social resource
      600: '#b300b3',
      700: '#800080',
      800: '#4d004d',
      900: '#1a001a',
    },
    // Purple hologram palette
    holo: {
      900: '#0c001a', // Deepest background
      800: '#13002e',
      700: '#1b0042',
      600: '#220055',
      500: '#2a0069',
      400: '#32007d',
      300: '#390091',
      200: '#4100a4',
      100: '#4900b8',
      glow: '#c728fb',
      accent: '#ff71ff',
      grid: '#6500b3',
      text: '#f0d9ff',
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
    heading: `'Exo 2', sans-serif`,
    body: `'Exo 2', sans-serif`,
    mono: `'Share Tech Mono', monospace`,
  },
  styles: {
    global: {
      body: {
        bg: 'holo.900',
        color: 'holo.text',
        backgroundImage: `
          linear-gradient(135deg, rgba(12,0,26,1) 0%, rgba(24,0,58,0.9) 100%),
          radial-gradient(circle at 50% 50%, rgba(76,0,179,0.1) 0%, rgba(12,0,26,0) 70%)
        `,
        backgroundAttachment: 'fixed',
      },
      '::selection': {
        bg: 'rgba(199,40,251,0.3)',
        color: 'white',
      },
      'h1, h2, h3, h4': {
        color: 'holo.text',
        fontFamily: 'heading',
        letterSpacing: '0.05em',
        fontWeight: '600',
        textShadow: '0 0 10px rgba(199,40,251,0.5)',
      },
      'h1': {
        fontSize: '2.5rem',
        position: 'relative',
        display: 'inline-block',
        _before: {
          content: '""',
          position: 'absolute',
          top: '-10px',
          left: '-15px',
          width: '25px',
          height: '25px',
          borderTop: '2px solid',
          borderLeft: '2px solid',
          borderColor: 'holo.accent',
          opacity: 0.7,
        },
        _after: {
          content: '""',
          position: 'absolute',
          bottom: '-10px',
          right: '-15px',
          width: '25px',
          height: '25px',
          borderBottom: '2px solid',
          borderRight: '2px solid',
          borderColor: 'holo.accent',
          opacity: 0.7,
        }
      },
    },
  },
  components: {
    Panel: {
      baseStyle: {
        bg: 'rgba(12,0,26,0.8)',
        borderRadius: '4px',
        border: '1px solid',
        borderColor: 'holo.grid',
        boxShadow: '0 0 20px -5px #c728fb, inset 0 0 10px -4px #c728fb',
        backdropFilter: 'blur(5px)',
        p: 5,
        position: 'relative',
        overflow: 'hidden',
        _before: {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, holo.accent, transparent)',
          opacity: 0.7,
        }
      },
    },
    Button: {
      baseStyle: {
        fontFamily: 'heading',
        fontWeight: '500',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        transition: 'all 0.3s',
        position: 'relative',
        overflow: 'hidden',
      },
      variants: {
        solid: (props) => ({
          bg: 'rgba(76,0,179,0.3)',
          color: 'holo.text',
          backdropFilter: 'blur(5px)',
          borderRadius: '4px',
          border: '1px solid',
          borderColor: 'rgba(199,40,251,0.5)',
          textShadow: '0 0 5px rgba(199,40,251,0.5)',
          _hover: {
            bg: 'rgba(76,0,179,0.5)',
            boxShadow: '0 0 15px -3px #c728fb',
          },
          _active: {
            bg: 'rgba(76,0,179,0.7)',
          }
        }),
        outline: (props) => ({
          bg: 'transparent',
          color: 'holo.text',
          borderRadius: '4px',
          border: '1px solid',
          borderColor: 'rgba(199,40,251,0.5)',
          textShadow: '0 0 5px rgba(199,40,251,0.5)',
          _hover: {
            bg: 'rgba(76,0,179,0.3)',
            boxShadow: '0 0 10px -3px #c728fb',
          },
        }),
      },
    },
    Card: {
      baseStyle: {
        bg: 'rgba(19,0,46,0.8)',
        borderRadius: '4px',
        border: '1px solid',
        borderColor: 'holo.grid',
        boxShadow: '0 0 10px -3px #c728fb',
        overflow: 'hidden',
        p: 4,
        position: 'relative',
        _after: {
          content: '""',
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          height: '3px',
          background: 'linear-gradient(90deg, holo.glow, transparent)',
        }
      },
    },
    Progress: {
      baseStyle: {
        track: {
          bg: 'rgba(19,0,46,0.8)',
          borderRadius: '4px',
          overflow: 'hidden',
        },
      },
      variants: {
        resourceBar: (props) => ({
          filledTrack: {
            bg: `${props.colorScheme}.500`,
            backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 100%)',
            boxShadow: '0 0 10px -2px currentColor',
          },
        }),
      },
    },
    Slider: {
      baseStyle: {
        track: {
          bg: 'rgba(19,0,46,0.8)',
          borderRadius: '4px',
        },
        thumb: {
          bg: 'holo.900',
          border: '2px solid',
          borderColor: 'holo.accent',
          boxShadow: '0 0 10px -2px #c728fb',
          _focus: {
            boxShadow: '0 0 15px -2px #c728fb',
          }
        },
        filledTrack: {
          bg: 'holo.glow',
          boxShadow: '0 0 10px -5px #c728fb',
        },
      },
    },
    Badge: {
      baseStyle: {
        bg: 'rgba(76,0,179,0.3)',
        color: 'holo.text',
        borderRadius: '4px',
        textTransform: 'uppercase',
        fontFamily: 'mono',
        letterSpacing: '0.05em',
        border: '1px solid',
        borderColor: 'rgba(199,40,251,0.5)',
        textShadow: '0 0 5px rgba(199,40,251,0.5)',
      },
    },
  }
});

export default hologramPurpleTheme;