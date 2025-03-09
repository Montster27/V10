// /Users/montysharma/Documents/V10/simplified/src/config/themes/miami-vice-theme.js
import { extendTheme } from '@chakra-ui/react';

const miamiViceTheme = extendTheme({
  colors: {
    brand: {
      50: '#ffe5f0',
      100: '#ffb8d9',
      200: '#ff8ac2',
      300: '#ff5cab',
      400: '#ff2e94',
      500: '#ff007b', // Primary brand color
      600: '#cc0062',
      700: '#990049',
      800: '#660031',
      900: '#330018',
    },
    energy: {
      50: '#e1faff',
      100: '#b8f1ff',
      200: '#8ee9ff',
      300: '#64e0ff',
      400: '#3ad8ff',
      500: '#00bfe6', // Energy resource
      600: '#0099b8',
      700: '#00738a',
      800: '#004d5c',
      900: '#00262e',
    },
    stress: {
      50: '#fff0e0',
      100: '#ffd9b3',
      200: '#ffc285',
      300: '#ffab57',
      400: '#ff942a',
      500: '#e67b00', // Stress resource
      600: '#b36000',
      700: '#804600',
      800: '#4c2a00',
      900: '#261400',
    },
    money: {
      50: '#e1fff4',
      100: '#b8ffe5',
      200: '#8effd5',
      300: '#64ffc6',
      400: '#3affb6',
      500: '#00e69c', // Money resource
      600: '#00b87b',
      700: '#008a5c',
      800: '#005c3d',
      900: '#002e1f',
    },
    knowledge: {
      50: '#f2e6ff',
      100: '#d9b8ff',
      200: '#c18aff',
      300: '#a85cff',
      400: '#8f2eff',
      500: '#7600e6', // Knowledge resource
      600: '#5e00b8',
      700: '#47008a',
      800: '#2f005c',
      900: '#18002e',
    },
    social: {
      50: '#fff9e0',
      100: '#fff0b3',
      200: '#ffe885',
      300: '#ffe057',
      400: '#ffd829',
      500: '#e6bf00', // Social resource
      600: '#b89500',
      700: '#8a6b00',
      800: '#5c4700',
      900: '#2e2400',
    },
    pastel: {
      pink: '#ff71ce',
      blue: '#01cdfe',
      green: '#05ffa1',
      yellow: '#fffb96',
      purple: '#b967ff',
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
    heading: `'Helvetica Neue', 'Helvetica', 'Arial', sans-serif`,
    body: `'Helvetica Neue', 'Helvetica', 'Arial', sans-serif`,
    mono: `'Roboto Mono', monospace`,
  },
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white',
        backgroundImage: `linear-gradient(135deg, #000000 0%, #05254e 100%)`,
        backgroundAttachment: 'fixed',
      },
      'h1, h2, h3, h4': {
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: '-0.04em',
      },
      'h1': {
        fontSize: '3.5rem',
        color: 'white',
        textTransform: 'uppercase',
        backgroundImage: 'linear-gradient(90deg, #ff71ce, #01cdfe, #05ffa1)',
        backgroundSize: '100%',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '1rem',
      }
    },
  },
  components: {
    Panel: {
      baseStyle: {
        bg: 'rgba(0,0,0,0.7)',
        borderRadius: 'lg',
        border: '2px solid',
        borderColor: 'pastel.pink',
        p: 4,
        boxShadow: '0px 6px 0px #01cdfe',
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        letterSpacing: '-0.04em',
        transition: 'all 0.2s',
        _hover: {
          transform: 'translateY(-2px)',
        },
        _active: {
          transform: 'translateY(0px)',
        },
      },
      variants: {
        solid: (props) => ({
          bg: `${props.colorScheme}.500`,
          color: 'white',
          borderRadius: 'full',
          py: '6px',
          px: '20px',
          _hover: {
            bg: `${props.colorScheme}.400`,
            boxShadow: 'lg',
          },
        }),
        outline: (props) => ({
          bg: 'transparent',
          color: `${props.colorScheme}.500`,
          border: '2px solid',
          borderColor: `${props.colorScheme}.500`,
          borderRadius: 'full',
          _hover: {
            bg: `rgba(255,255,255,0.1)`,
          },
        }),
      },
    },
    Card: {
      baseStyle: {
        bg: 'rgba(0,0,0,0.7)',
        borderRadius: 'lg',
        border: '2px solid',
        borderColor: 'pastel.blue',
        p: 4,
        boxShadow: '0px 6px 0px #05ffa1',
      },
    },
    Progress: {
      baseStyle: {
        track: {
          bg: 'rgba(255,255,255,0.1)',
          borderRadius: 'full',
        },
      },
      variants: {
        resourceBar: (props) => ({
          filledTrack: {
            bg: `${props.colorScheme}.500`,
            borderRadius: 'full',
          },
          track: {
            borderRadius: 'full',
            border: '1px solid',
            borderColor: 'rgba(255,255,255,0.3)',
          }
        }),
      },
    },
    Slider: {
      baseStyle: {
        track: {
          bg: 'rgba(255,255,255,0.1)',
          borderRadius: 'full',
          height: '10px',
        },
        thumb: {
          bg: 'white',
          boxShadow: '0 0 0 3px rgba(255,255,255,0.3)',
          borderWidth: '2px',
        },
        filledTrack: {
          borderRadius: 'full',
        },
      },
    },
    Heading: {
      baseStyle: {
        letterSpacing: '-0.04em',
        fontWeight: 'bold',
      },
    },
    Badge: {
      baseStyle: {
        borderRadius: 'full',
        px: 3,
        py: 1,
        fontWeight: 'bold',
      },
    },
  },
});

export default miamiViceTheme;