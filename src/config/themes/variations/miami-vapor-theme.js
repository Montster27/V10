// /Users/montysharma/Documents/V10/simplified/src/config/themes/variations/miami-vapor-theme.js
import { extendTheme } from '@chakra-ui/react';

const miamiVaporTheme = extendTheme({
  colors: {
    brand: {
      50: '#ffeaff',
      100: '#f8c2ff',
      200: '#f29aff',
      300: '#ec72ff',
      400: '#e64aff',
      500: '#d031e6', // Primary brand color
      600: '#a227b3',
      700: '#751c82',
      800: '#471250',
      900: '#1a0720',
    },
    energy: {
      50: '#dafcff',
      100: '#aef1ff',
      200: '#7febff',
      300: '#50e4ff',
      400: '#23ddff',
      500: '#00c5e6', // Energy resource
      600: '#009ab3',
      700: '#006f80',
      800: '#00444e',
      900: '#001a1d',
    },
    stress: {
      50: '#ffe9e9',
      100: '#ffc2c2',
      200: '#ff9a9a',
      300: '#ff7272',
      400: '#ff4a4a',
      500: '#e63131', // Stress resource
      600: '#b32727',
      700: '#821c1c',
      800: '#501212',
      900: '#200707',
    },
    money: {
      50: '#eaffda',
      100: '#c7ffae',
      200: '#a4ff7f',
      300: '#80ff50',
      400: '#5dff21',
      500: '#44e600', // Money resource
      600: '#35b300',
      700: '#268000',
      800: '#174d00',
      900: '#081c00',
    },
    knowledge: {
      50: '#eaedff',
      100: '#c2caff',
      200: '#9aa7ff',
      300: '#7284ff',
      400: '#4a61ff',
      500: '#3148e6', // Knowledge resource
      600: '#2738b3',
      700: '#1c2980',
      800: '#12194d',
      900: '#070a1c',
    },
    social: {
      50: '#fff0da',
      100: '#ffd8ae',
      200: '#ffc17e',
      300: '#ffa94d',
      400: '#ff921c',
      500: '#e67903', // Social resource
      600: '#b35e00',
      700: '#804300',
      800: '#4d2800',
      900: '#1c0e00',
    },
    // Vaporwave palette
    vapor: {
      pink: '#ff71ce',
      blue: '#01cdfe',
      purple: '#7f00ff',
      teal: '#05ffa1',
      yellow: '#ffff00',
      coral: '#ff6e61',
      bg: '#f5f5fa',
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
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
    mono: `'Space Mono', monospace`,
  },
  styles: {
    global: {
      body: {
        bg: 'linear-gradient(135deg, #f5f5fa 0%, #f0f0f5 100%)',
        color: 'gray.800',
        backgroundAttachment: 'fixed',
      },
      'h1, h2, h3, h4': {
        color: 'gray.800',
        fontWeight: '700',
      },
      'h1': {
        fontSize: '2.5rem',
        backgroundImage: 'linear-gradient(90deg, #ff71ce, #01cdfe, #7f00ff)',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }
    },
  },
  components: {
    Panel: {
      baseStyle: {
        bg: 'white',
        borderRadius: '0',
        boxShadow: '15px 15px 0 #01cdfe',
        p: 6,
        border: '2px solid',
        borderColor: 'vapor.pink',
        position: 'relative',
        zIndex: 1,
        _before: {
          content: '""',
          position: 'absolute',
          bottom: '-10px',
          right: '-10px',
          width: '100%',
          height: '100%',
          border: '2px solid',
          borderColor: 'vapor.purple',
          zIndex: -1,
        }
      },
    },
    Button: {
      baseStyle: {
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        transition: 'all 0.2s',
      },
      variants: {
        solid: (props) => ({
          bg: `${props.colorScheme}.500`,
          color: 'white',
          borderRadius: '0',
          border: '2px solid',
          borderColor: 'gray.800',
          boxShadow: '4px 4px 0 black',
          _hover: {
            transform: 'translate(-2px, -2px)',
            boxShadow: '6px 6px 0 black',
          },
          _active: {
            transform: 'translate(0px, 0px)',
            boxShadow: '2px 2px 0 black',
          },
        }),
        outline: (props) => ({
          bg: 'transparent',
          color: `${props.colorScheme}.500`,
          borderRadius: '0',
          border: '2px solid',
          borderColor: `${props.colorScheme}.500`,
          boxShadow: '4px 4px 0 black',
          _hover: {
            transform: 'translate(-2px, -2px)',
            boxShadow: '6px 6px 0 black',
          },
        }),
      },
    },
    Card: {
      baseStyle: {
        bg: 'white',
        borderRadius: '0',
        border: '2px solid',
        borderColor: 'vapor.teal',
        boxShadow: '10px 10px 0 #7f00ff',
        p: 5,
      },
    },
    Progress: {
      baseStyle: {
        track: {
          bg: 'gray.100',
          borderRadius: '0',
          border: '1px solid',
          borderColor: 'gray.800',
          h: 3,
        },
      },
      variants: {
        resourceBar: (props) => ({
          filledTrack: {
            background: 'linear-gradient(90deg, #01cdfe, #7f00ff)',
            borderRadius: '0',
          },
        }),
      },
    },
    Slider: {
      baseStyle: {
        track: {
          bg: 'gray.100',
          borderRadius: '0',
          border: '1px solid',
          borderColor: 'gray.800',
          h: '6px',
        },
        thumb: {
          border: '2px solid',
          borderColor: 'gray.800',
          bg: 'white',
          boxSize: '18px',
          _focus: {
            boxShadow: '0px 0px 0px 3px rgba(01, 205, 254, 0.5)',
          }
        },
        filledTrack: {
          borderRadius: '0',
          background: 'linear-gradient(90deg, #ff71ce, #01cdfe)',
        },
      },
    },
    Badge: {
      baseStyle: {
        borderRadius: '0',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: '0.05em',
        boxShadow: '2px 2px 0 black',
      },
    },
  }
});

export default miamiVaporTheme;