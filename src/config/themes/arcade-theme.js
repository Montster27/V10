// /Users/montysharma/Documents/V10/simplified/src/config/themes/arcade-theme.js
import { extendTheme } from '@chakra-ui/react';

const arcadeTheme = extendTheme({
  colors: {
    brand: {
      50: '#ffdce0',
      100: '#ffb0b8',
      200: '#ff848f',
      300: '#ff5866',
      400: '#ff2c3d',
      500: '#fc0019', // Primary brand color
      600: '#c50014',
      700: '#8d000e',
      800: '#560009',
      900: '#200003',
    },
    energy: {
      50: '#feffd5',
      100: '#feffaa',
      200: '#fdff7e',
      300: '#fdff53',
      400: '#fcff27',
      500: '#e4e60d', // Energy resource
      600: '#b0b300',
      700: '#7d8000',
      800: '#4b4d00',
      900: '#181a00',
    },
    stress: {
      50: '#ffdce0',
      100: '#ffb0b8',
      200: '#ff848f',
      300: '#ff5866',
      400: '#ff2c3d',
      500: '#fc0019', // Stress resource
      600: '#c50014',
      700: '#8d000e',
      800: '#560009',
      900: '#200003',
    },
    money: {
      50: '#d5ffe1',
      100: '#aaffc3',
      200: '#7eff98',
      300: '#53ff6c',
      400: '#27ff40',
      500: '#0de626', // Money resource
      600: '#00b30e',
      700: '#008000',
      800: '#004d00',
      900: '#001a00',
    },
    knowledge: {
      50: '#d6d9ff',
      100: '#adb3ff',
      200: '#848dff',
      300: '#5b67ff',
      400: '#3241ff',
      500: '#1927e6', // Knowledge resource
      600: '#0b1fb3',
      700: '#001680',
      800: '#000c4d',
      900: '#00031a',
    },
    social: {
      50: '#ffe1fd',
      100: '#ffb3f9',
      200: '#ff84f5',
      300: '#ff57f1',
      400: '#ff29ed',
      500: '#e610d3', // Social resource
      600: '#b300a5',
      700: '#800076',
      800: '#4d0047',
      900: '#1a0018',
    },
    black: {
      900: '#000000',
      800: '#080808',
      700: '#101010',
      600: '#181818',
      500: '#202020',
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
    heading: `'Press Start 2P', monospace`,
    body: `'Press Start 2P', monospace`,
    mono: `'Press Start 2P', monospace`,
  },
  styles: {
    global: {
      body: {
        bg: 'black.900',
        color: 'white',
        backgroundImage: `
          repeating-linear-gradient(0deg, rgba(10,10,10,1) 0px, rgba(10,10,10,1) 2px, rgba(0,0,0,1) 2px, rgba(0,0,0,1) 4px)
        `,
        fontFamily: 'body',
        lineHeight: '1.8',
        fontSize: 'sm',
      },
      'h1, h2, h3, h4': {
        color: 'white',
        textTransform: 'uppercase',
        fontFamily: 'heading',
        letterSpacing: '2px',
        textShadow: '2px 2px 0px #fc0019, 4px 4px 0px #1927e6',
      },
      'h1': {
        fontSize: '1.75rem',
        my: 4,
      }
    },
  },
  components: {
    Panel: {
      baseStyle: {
        bg: 'black.800',
        border: '3px solid white',
        borderRadius: '0',
        p: 4,
        boxShadow: '0 0 0 3px black, 0 0 0 6px white, 0 0 0 9px black',
      },
    },
    Button: {
      baseStyle: {
        fontFamily: 'heading',
        fontWeight: 'normal',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        transition: 'all 0.1s',
        borderRadius: '0px',
        lineHeight: '1.2',
        height: 'auto',
        py: 3,
        _hover: {
          transform: 'scale(1.05)',
        },
        _active: {
          transform: 'scale(0.95)',
        },
      },
      variants: {
        solid: (props) => ({
          bg: `${props.colorScheme}.500`,
          color: 'white',
          border: '3px solid white',
          boxShadow: '0 0 0 3px black',
          fontWeight: 'normal',
          px: 6,
          py: 3,
          _hover: {
            bg: `${props.colorScheme}.600`,
          },
        }),
        outline: (props) => ({
          bg: 'transparent',
          color: 'white',
          border: '3px solid white',
          boxShadow: '0 0 0 3px black',
          _hover: {
            bg: `${props.colorScheme}.900`,
          },
        }),
      },
    },
    Card: {
      baseStyle: {
        bg: 'black.800',
        borderRadius: '0',
        p: 4,
        border: '3px solid white',
        boxShadow: '0 0 0 3px black, 0 0 0 6px white, 0 0 0 9px black',
      },
    },
    Progress: {
      baseStyle: {
        track: {
          bg: 'black.700',
          borderRadius: '0',
          border: '2px solid white',
          boxShadow: '0 0 0 2px black',
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
          bg: 'black.700',
          borderRadius: '0',
          height: '1rem',
          border: '2px solid white',
          boxShadow: '0 0 0 2px black',
        },
        thumb: {
          border: '2px solid white',
          bg: 'black.900',
          boxSize: '1.5rem',
          boxShadow: '0 0 0 2px black',
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
        letterSpacing: '2px',
      },
    },
    Badge: {
      baseStyle: {
        borderRadius: '0',
        textTransform: 'uppercase',
        fontFamily: 'heading',
        px: 2,
        py: 1,
        border: '1px solid white',
      },
    },
  },
});

export default arcadeTheme;