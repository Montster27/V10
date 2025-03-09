// /Users/montysharma/Documents/V10/simplified/src/config/themes/variations/hologram-blue-theme.js
import { extendTheme } from '@chakra-ui/react';

const hologramBlueTheme = extendTheme({
  colors: {
    brand: {
      50: '#e0f7ff',
      100: '#b8e8ff',
      200: '#8ad8ff',
      300: '#5cc9ff',
      400: '#2eb9ff',
      500: '#00a0e6', // Primary brand color
      600: '#007db3',
      700: '#005a80',
      800: '#00364d',
      900: '#00131a',
    },
    energy: {
      50: '#e0fff1',
      100: '#b8ffdc',
      200: '#8affc7',
      300: '#5cffb2',
      400: '#2eff9d',
      500: '#00e684', // Energy resource
      600: '#00b368',
      700: '#00804b',
      800: '#004d2d',
      900: '#001a0f',
    },
    stress: {
      50: '#ffe7e0',
      100: '#ffc5b8',
      200: '#ffa28f',
      300: '#ff7f66',
      400: '#ff5c3d',
      500: '#e63e1f', // Stress resource
      600: '#b33017',
      700: '#802210',
      800: '#4d1409',
      900: '#1a0603',
    },
    money: {
      50: '#f0ffe0',
      100: '#d8ffb8',
      200: '#c0ff8f',
      300: '#a7ff66',
      400: '#8fff3d',
      500: '#76e61f', // Money resource
      600: '#5cb317',
      700: '#428010',
      800: '#284d09',
      900: '#0f1a03',
    },
    knowledge: {
      50: '#e6e0ff',
      100: '#c4b8ff',
      200: '#a18fff',
      300: '#7e66ff',
      400: '#5b3dff',
      500: '#3d1fe6', // Knowledge resource
      600: '#3017b3',
      700: '#221080',
      800: '#14094d',
      900: '#07031a',
    },
    social: {
      50: '#ffe0f0',
      100: '#ffb8db',
      200: '#ff8fc5',
      300: '#ff66b0',
      400: '#ff3d9a',
      500: '#e61f81', // Social resource
      600: '#b31764',
      700: '#801048',
      800: '#4d092b',
      900: '#1a030f',
    },
    // Hologram palette
    holo: {
      900: '#001529', // Deepest background
      800: '#002340',
      700: '#003057',
      600: '#003e6e',
      500: '#004b85',
      400: '#00599c',
      300: '#0066b3',
      200: '#0074ca',
      100: '#0081e1',
      glow: '#00d1ff',
      accent: '#18ffff',
      grid: '#0088cc',
      text: '#e6f7ff',
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
          linear-gradient(0deg, #001529 0%, #002952 100%),
          repeating-linear-gradient(90deg, rgba(0,137,204,0.05) 0px, rgba(0,137,204,0.05) 1px, transparent 1px, transparent 60px),
          repeating-linear-gradient(0deg, rgba(0,137,204,0.05) 0px, rgba(0,137,204,0.05) 1px, transparent 1px, transparent 60px)
        `,
        backgroundSize: '100% 100%, 60px 60px, 60px 60px',
        backgroundAttachment: 'fixed',
      },
      '::selection': {
        bg: 'rgba(0,209,255,0.3)',
        color: 'white',
      },
      'h1, h2, h3, h4': {
        color: 'holo.text',
        fontFamily: 'heading',
        letterSpacing: '0.05em',
        fontWeight: '600',
        textShadow: '0 0 10px rgba(0,209,255,0.5)',
      },
      'h1': {
        fontSize: '2.5rem',
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-10px',
          left: '0',
          width: '100px',
          height: '3px',
          background: 'holo.accent',
          boxShadow: '0 0 10px holo.glow',
        }
      },
    },
  },
  components: {
    Panel: {
      baseStyle: {
        bg: 'rgba(0,21,41,0.7)',
        borderRadius: '4px',
        border: '1px solid',
        borderColor: 'holo.grid',
        boxShadow: '0 0 15px -5px #00d1ff, inset 0 0 5px -2px #00d1ff',
        backdropFilter: 'blur(5px)',
        p: 5,
        position: 'relative',
        _before: {
          content: '""',
          position: 'absolute',
          top: '-1px',
          left: '-1px',
          width: '10px',
          height: '10px',
          border: '1px solid',
          borderColor: 'holo.accent',
          borderRight: 'none',
          borderBottom: 'none',
        },
        _after: {
          content: '""',
          position: 'absolute',
          bottom: '-1px',
          right: '-1px',
          width: '10px',
          height: '10px',
          border: '1px solid',
          borderColor: 'holo.accent',
          borderLeft: 'none',
          borderTop: 'none',
        }
      },
    },
    Button: {
      baseStyle: {
        fontFamily: 'heading',
        letterSpacing: '0.1em',
        fontWeight: '500',
        textTransform: 'uppercase',
        transition: 'all 0.2s',
        position: 'relative',
        overflow: 'hidden',
        _hover: {
          _before: {
            transform: 'translateX(300%)',
          }
        },
        _before: {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '-100%',
          width: '30%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(24,255,255,0.3), transparent)',
          transition: 'transform 0.8s',
          zIndex: 1,
        }
      },
      variants: {
        solid: (props) => ({
          bg: 'transparent',
          color: 'holo.text',
          border: '1px solid',
          borderColor: 'holo.accent',
          boxShadow: '0 0 10px -3px #00d1ff',
          _hover: {
            bg: 'rgba(0,209,255,0.1)',
            boxShadow: '0 0 15px -3px #00d1ff',
          },
          _active: {
            bg: 'rgba(0,209,255,0.2)',
          }
        }),
        outline: (props) => ({
          bg: 'transparent',
          color: 'holo.text',
          border: '1px solid',
          borderColor: 'holo.accent',
          _hover: {
            bg: 'rgba(0,209,255,0.1)',
          },
        }),
      },
    },
    Card: {
      baseStyle: {
        bg: 'rgba(0,35,64,0.7)',
        backdropFilter: 'blur(5px)',
        borderRadius: '4px',
        border: '1px solid',
        borderColor: 'holo.grid',
        overflow: 'hidden',
        p: 4,
        position: 'relative',
        _before: {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, holo.accent, transparent)',
        }
      },
    },
    Progress: {
      baseStyle: {
        track: {
          bg: 'rgba(0,35,64,0.5)',
          border: '1px solid',
          borderColor: 'holo.grid',
          overflow: 'hidden',
        },
      },
      variants: {
        resourceBar: (props) => ({
          filledTrack: {
            bg: `${props.colorScheme}.500`,
            boxShadow: '0 0 8px -2px #00d1ff',
            position: 'relative',
            _after: {
              content: '""',
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              background: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.1) 5px, rgba(255,255,255,0.1) 10px)',
            }
          },
        }),
      },
    },
    Slider: {
      baseStyle: {
        track: {
          bg: 'rgba(0,35,64,0.5)',
          border: '1px solid',
          borderColor: 'holo.grid',
        },
        thumb: {
          bg: 'transparent',
          border: '2px solid',
          borderColor: 'holo.accent',
          boxShadow: '0 0 10px -2px #00d1ff',
          _focus: {
            boxShadow: '0 0 15px -2px #00d1ff',
          }
        },
        filledTrack: {
          bg: 'holo.accent',
          opacity: '0.7',
        },
      },
    },
    Badge: {
      baseStyle: {
        bg: 'transparent',
        color: 'holo.text',
        border: '1px solid',
        borderColor: 'holo.accent',
        borderRadius: '2px',
        fontFamily: 'mono',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        textShadow: '0 0 5px rgba(0,209,255,0.5)',
      },
    },
  }
});

export default hologramBlueTheme;