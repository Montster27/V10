// /Users/montysharma/Documents/V10/simplified/src/config/themes/wireframe-theme.js
import { extendTheme } from '@chakra-ui/react';

const wireframeTheme = extendTheme({
  colors: {
    brand: {
      50: '#daf5ff',
      100: '#adddff',
      200: '#7fc6ff',
      300: '#51afff',
      400: '#2498ff',
      500: '#0a7fe6', // Primary brand color
      600: '#0062b3',
      700: '#004680',
      800: '#002a4d',
      900: '#000f1a',
    },
    energy: {
      50: '#e0fff0',
      100: '#b3ffd6',
      200: '#80ffbc',
      300: '#4dffa3',
      400: '#1aff89',
      500: '#00e66f', // Energy resource
      600: '#00b356',
      700: '#00803d',
      800: '#004d24',
      900: '#001a0b',
    },
    stress: {
      50: '#ffe0e0',
      100: '#ffb3b3',
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
      50: '#fffdd8',
      100: '#fff9ad',
      200: '#fff681',
      300: '#fff354',
      400: '#ffef28',
      500: '#e6d60e', // Money resource
      600: '#b3a700',
      700: '#807700',
      800: '#4d4700',
      900: '#1a1800',
    },
    knowledge: {
      50: '#dfefff',
      100: '#b5daff',
      200: '#89c4ff',
      300: '#5cafff',
      400: '#2f99ff',
      500: '#1680e6', // Knowledge resource
      600: '#0064b3',
      700: '#004880',
      800: '#002b4d',
      900: '#000f1a',
    },
    social: {
      50: '#ffe8fd',
      100: '#ffc1f0',
      200: '#ff9be4',
      300: '#ff74d8',
      400: '#ff4dcd',
      500: '#e634b3', // Social resource
      600: '#b3268b',
      700: '#801b63',
      800: '#4d0f3b',
      900: '#1a0514',
    },
    // Holographic backgrounds
    holo: {
      900: '#000d1a', // Deepest background
      800: '#001429',
      700: '#001a38',
      600: '#002147',
      500: '#002856',
      400: '#002e65',
      300: '#003575',
      200: '#003c84',
      100: '#004294',
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
    heading: `'Share Tech Mono', monospace`,
    body: `'Share Tech Mono', monospace`,
    mono: `'Share Tech Mono', monospace`,
  },
  styles: {
    global: {
      body: {
        bg: 'holo.900',
        color: '#00c3ff',
        backgroundImage: `
          linear-gradient(0deg, rgba(0,20,40,1) 0%, rgba(0,40,80,0.7) 100%),
          repeating-linear-gradient(90deg, rgba(0,195,255,0.03) 0px, rgba(0,195,255,0.03) 1px, transparent 1px, transparent 60px),
          repeating-linear-gradient(0deg, rgba(0,195,255,0.03) 0px, rgba(0,195,255,0.03) 1px, transparent 1px, transparent 60px)
        `,
        backgroundSize: '100% 100%, 60px 60px, 60px 60px',
        backgroundAttachment: 'fixed',
        fontFamily: 'mono',
        lineHeight: '1.6',
      },
      'h1, h2, h3, h4': {
        color: '#00f0ff',
        fontFamily: 'heading',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      },
      'h1': {
        fontSize: '2rem',
        pb: 2,
        borderBottom: '1px solid',
        borderColor: 'rgba(0,195,255,0.5)',
        mb: 4,
      }
    },
  },
  components: {
    Panel: {
      baseStyle: {
        bg: 'transparent',
        position: 'relative',
        border: '1px solid',
        borderColor: 'brand.500',
        borderRadius: '0',
        p: 4,
        _after: {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          bg: 'rgba(0, 20, 40, 0.7)',
          backdropFilter: 'blur(5px)',
          zIndex: '-1',
        },
      },
    },
    Button: {
      baseStyle: {
        fontFamily: 'mono',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontWeight: 'normal',
        _hover: {
          transform: 'translateY(-2px)',
          transition: 'all 0.2s',
        },
      },
      variants: {
        solid: (props) => ({
          bg: 'transparent',
          color: `${props.colorScheme}.500`,
          border: '1px solid',
          borderColor: `${props.colorScheme}.500`,
          _hover: {
            bg: `rgba(0, 195, 255, 0.1)`,
            boxShadow: '0 0 10px -2px currentColor',
          },
          _active: {
            bg: `rgba(0, 195, 255, 0.2)`,
          },
        }),
        outline: (props) => ({
          bg: 'transparent',
          color: `${props.colorScheme}.500`,
          border: '1px solid',
          borderColor: `${props.colorScheme}.500`,
          boxShadow: 'none',
          _hover: {
            bg: `rgba(0, 195, 255, 0.1)`,
          },
        }),
      },
    },
    Card: {
      baseStyle: {
        bg: 'transparent',
        position: 'relative',
        border: '1px solid',
        borderColor: 'brand.500',
        p: 4,
        borderRadius: '0',
        _after: {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          bg: 'rgba(0, 20, 40, 0.7)',
          backdropFilter: 'blur(5px)',
          zIndex: '-1',
        },
      },
    },
    Progress: {
      baseStyle: {
        track: {
          bg: 'transparent',
          border: '1px solid',
          borderColor: 'brand.500',
          borderRadius: '0',
        },
      },
      variants: {
        resourceBar: (props) => ({
          filledTrack: {
            bg: `${props.colorScheme}.500`,
            opacity: '0.7',
            boxShadow: '0 0 8px -1px currentColor',
            borderRadius: '0',
          },
        }),
      },
    },
    Slider: {
      baseStyle: {
        track: {
          bg: 'transparent',
          border: '1px solid',
          borderColor: 'brand.500',
          borderRadius: '0',
        },
        thumb: {
          bg: 'brand.500',
          boxShadow: '0 0 8px -1px currentColor',
          _focus: {
            boxShadow: '0 0 12px 0px currentColor',
          }
        },
        filledTrack: {
          bg: 'brand.500',
          opacity: '0.7',
          borderRadius: '0',
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'heading',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      },
    },
    Badge: {
      baseStyle: {
        borderRadius: '0',
        fontFamily: 'mono',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      },
    },
  },
});

export default wireframeTheme;