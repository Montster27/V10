// /Users/montysharma/Documents/V10/simplified/src/config/themes/variations/synthwave-cyberpunk-theme.js
import { extendTheme } from '@chakra-ui/react';

const synthwaveCyberpunkTheme = extendTheme({
  colors: {
    brand: {
      50: '#e5f0ff',
      100: '#b8d4ff',
      200: '#8ab8ff',
      300: '#5c9cff',
      400: '#2e81ff',
      500: '#0066ff', // Primary brand color
      600: '#0051cc',
      700: '#003b99',
      800: '#002466',
      900: '#000e33',
    },
    energy: {
      50: '#cffff1',
      100: '#9fffdf',
      200: '#70ffcc',
      300: '#40ffba',
      400: '#11ffa7',
      500: '#00e68d', // Energy resource
      600: '#00b36e',
      700: '#00804f',
      800: '#004d30',
      900: '#001b11',
    },
    stress: {
      50: '#ffe5e5',
      100: '#ffb8b8',
      200: '#ff8a8a',
      300: '#ff5c5c',
      400: '#ff2e2e',
      500: '#ff0000', // Stress resource
      600: '#cc0000',
      700: '#990000',
      800: '#660000',
      900: '#330000',
    },
    money: {
      50: '#e5fff2',
      100: '#b8ffe1',
      200: '#8affd0',
      300: '#5cffbf',
      400: '#2eff4f',
      500: '#00e63d', // Money resource
      600: '#00b32f',
      700: '#008022',
      800: '#004d14',
      900: '#001b07',
    },
    knowledge: {
      50: '#f2e5ff',
      100: '#d6baff',
      200: '#b98fff',
      300: '#9c64ff',
      400: '#7f39ff',
      500: '#661fff', // Knowledge resource
      600: '#5219cc',
      700: '#3d1299',
      800: '#280b66',
      900: '#140433',
    },
    social: {
      50: '#ffe5f8',
      100: '#ffb8ec',
      200: '#ff8ae0',
      300: '#ff5cd3',
      400: '#ff2ec7',
      500: '#ff00bb', // Social resource
      600: '#cc0096',
      700: '#990070',
      800: '#66004b',
      900: '#330025',
    },
    // Cyberpunk palette
    cyber: {
      900: '#0e0b16', // Deepest background
      800: '#1e1933',
      700: '#2e284f',
      600: '#3e366c',
      500: '#4e4588',
      400: '#5e53a5',
      300: '#6e62c1',
      200: '#7e70de',
      100: '#8e7efa',
      yellow: '#ffd319',
      pink: '#f222ff',
      cyan: '#00e8ff',
      green: '#21ff00'
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
        bg: 'cyber.900',
        color: 'white',
        backgroundImage: `
          linear-gradient(90deg, rgba(14,11,22,0.9) 0%, rgba(30,25,51,0.9) 100%),
          repeating-linear-gradient(45deg, rgba(0,232,255,0.1) 0px, rgba(0,232,255,0.1) 1px, transparent 1px, transparent 10px),
          repeating-linear-gradient(135deg, rgba(242,34,255,0.1) 0px, rgba(242,34,255,0.1) 1px, transparent 1px, transparent 10px)
        `,
        backgroundAttachment: 'fixed',
      },
      'h1, h2, h3, h4': {
        color: 'white',
        textTransform: 'uppercase',
        position: 'relative',
        display: 'inline-block',
        fontWeight: 'bold',
      },
      'h1': {
        fontSize: '2.5rem',
        letterSpacing: '4px',
        _before: {
          content: 'attr(data-text)',
          position: 'absolute',
          left: '2px',
          textShadow: 'none',
          background: 'linear-gradient(110deg, #00e8ff, #f222ff)',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          zIndex: '-1'
        },
        _after: {
          content: 'attr(data-text)',
          position: 'absolute',
          left: '-2px',
          textShadow: 'none',
          background: 'linear-gradient(290deg, #ffd319, #f222ff)',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          zIndex: '-1'
        }
      },
    },
  },
  components: {
    Panel: {
      baseStyle: {
        bg: 'rgba(14,11,22,0.8)',
        borderRadius: '0',
        border: '1px solid',
        borderColor: 'cyber.cyan',
        boxShadow: '0 0 10px -2px #00e8ff, inset 0 0 10px -5px #00e8ff',
        p: 4,
        position: 'relative',
        _before: {
          content: '" "',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          background: 'repeating-linear-gradient(90deg, rgba(0,232,255,0.05) 0px, rgba(0,232,255,0.05) 1px, transparent 1px, transparent 12px)',
          pointerEvents: 'none',
        }
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 'normal',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: 'sm',
        position: 'relative',
        overflow: 'hidden',
        _before: {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          transition: 'all 0.5s',
        },
        _hover: {
          _before: {
            left: '100%',
          }
        }
      },
      variants: {
        solid: (props) => ({
          bg: `${props.colorScheme}.500`,
          color: 'white',
          clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
          borderRadius: '0',
          border: '1px solid',
          borderColor: 'cyber.green',
          _hover: {
            bg: `${props.colorScheme}.400`,
            boxShadow: '0 0 15px -2px currentColor',
          },
        }),
        outline: (props) => ({
          bg: 'transparent',
          color: `${props.colorScheme}.400`,
          border: '1px solid',
          borderColor: `${props.colorScheme}.500`,
          clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)',
          _hover: {
            bg: `${props.colorScheme}.900`,
            boxShadow: '0 0 10px -3px currentColor',
          },
        }),
      },
    },
    Card: {
      baseStyle: {
        bg: 'rgba(14,11,22,0.8)',
        borderRadius: '0',
        border: '1px solid',
        borderColor: 'cyber.pink',
        overflow: 'visible',
        p: 4,
        position: 'relative',
        _before: {
          content: '""',
          position: 'absolute',
          top: '-2px',
          left: '-2px',
          width: '10px',
          height: '10px',
          borderTop: '2px solid',
          borderLeft: '2px solid',
          borderColor: 'cyber.yellow'
        },
        _after: {
          content: '""',
          position: 'absolute',
          bottom: '-2px',
          right: '-2px',
          width: '10px',
          height: '10px',
          borderBottom: '2px solid',
          borderRight: '2px solid',
          borderColor: 'cyber.yellow'
        }
      },
    },
    Progress: {
      baseStyle: {
        track: {
          bg: 'cyber.800',
          height: '6px',
          borderRadius: '0',
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
          bg: 'cyber.800',
          height: '4px',
          borderRadius: '0',
        },
        thumb: {
          border: '2px solid',
          borderColor: 'cyber.cyan',
          boxShadow: '0 0 10px -2px #00e8ff',
          _focus: {
            boxShadow: '0 0 15px -2px #00e8ff',
          }
        },
        filledTrack: {
          borderRadius: '0',
        },
      },
    }
  }
});

export default synthwaveCyberpunkTheme;