// /Users/montysharma/Documents/V10/simplified/src/config/themes/variations/miami-retro-theme.js
import { extendTheme } from '@chakra-ui/react';

const miamiRetroTheme = extendTheme({
  colors: {
    brand: {
      50: '#ffe5ee',
      100: '#ffb8d1',
      200: '#ff8ab5',
      300: '#ff5c98',
      400: '#ff2e7b',
      500: '#e60062', // Primary brand color
      600: '#b3004c',
      700: '#800036',
      800: '#4d0020',
      900: '#1a000a',
    },
    energy: {
      50: '#e0ffff',
      100: '#b8f8ff',
      200: '#8ef4ff',
      300: '#64efff',
      400: '#3beaff',
      500: '#00d0e6', // Energy resource
      600: '#00a3b3',
      700: '#007580',
      800: '#00474e',
      900: '#001a1d',
    },
    stress: {
      50: '#ffece0',
      100: '#ffd0b3',
      200: '#ffb485',
      300: '#ff9857',
      400: '#ff7b2a',
      500: '#e65f00', // Stress resource
      600: '#b34a00',
      700: '#803500',
      800: '#4e2000',
      900: '#1c0a00',
    },
    money: {
      50: '#e0ffe5',
      100: '#b3ffbe',
      200: '#85ff96',
      300: '#57ff6e',
      400: '#2aff46',
      500: '#00e61f', // Money resource
      600: '#00b318',
      700: '#008012',
      800: '#004d0a',
      900: '#001a03',
    },
    knowledge: {
      50: '#e5f4ff',
      100: '#b8e3ff',
      200: '#8ad2ff',
      300: '#5cc1ff',
      400: '#2eafff',
      500: '#0096e6', // Knowledge resource
      600: '#0075b3',
      700: '#005480',
      800: '#00334d',
      900: '#00111a',
    },
    social: {
      50: '#fff5e0',
      100: '#ffe4b3',
      200: '#ffd485',
      300: '#ffc457',
      400: '#ffb32a',
      500: '#e69900', // Social resource
      600: '#b37700',
      700: '#805500',
      800: '#4d3300',
      900: '#1a1100',
    },
    // Retro deco colors
    retro: {
      teal: '#00A5A5',
      salmon: '#FF6B6B',
      navy: '#004E66',
      pink: '#FF70A6',
      mint: '#7BE495',
      cream: '#FFF9E0',
      mustard: '#FFD166',
      burgundy: '#9E0059',
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
    heading: `'Playfair Display', serif`,
    body: `'Work Sans', sans-serif`,
    mono: `'IBM Plex Mono', monospace`,
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.800',
        backgroundImage: 'radial-gradient(circle at 100% 0%, #FFF9E0 0%, white 20%)',
        backgroundAttachment: 'fixed',
      },
      'h1, h2, h3, h4': {
        color: 'retro.navy',
        fontWeight: '700',
        letterSpacing: '-0.02em',
      },
      'h1': {
        fontSize: '3rem',
        fontFamily: 'heading',
        color: 'retro.navy',
        borderBottom: '4px solid',
        borderColor: 'retro.teal',
        paddingBottom: '0.5rem',
        marginBottom: '1.5rem',
      }
    },
  },
  components: {
    Panel: {
      baseStyle: {
        bg: 'white',
        borderRadius: '0',
        overflow: 'hidden',
        boxShadow: 'lg',
        border: '2px solid',
        borderColor: 'retro.teal',
        p: 6,
        position: 'relative',
        _before: {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '6px',
          background: 'repeating-linear-gradient(90deg, #00A5A5, #00A5A5 20px, #FF6B6B 20px, #FF6B6B 40px)',
        }
      },
    },
    Button: {
      baseStyle: {
        fontWeight: '600',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        borderRadius: '0',
        transition: 'all 0.3s',
      },
      variants: {
        solid: (props) => ({
          bg: 'retro.teal',
          color: 'white',
          padding: '1.2rem 2rem',
          _hover: {
            bg: 'retro.navy',
            transform: 'translateY(-2px)',
          },
          _active: {
            transform: 'translateY(0)',
          },
        }),
        outline: (props) => ({
          bg: 'transparent',
          color: 'retro.navy',
          border: '2px solid',
          borderColor: 'retro.teal',
          padding: '1.2rem 2rem',
          _hover: {
            bg: 'retro.cream',
            color: 'retro.burgundy',
            borderColor: 'retro.burgundy',
          },
        }),
      },
    },
    Card: {
      baseStyle: {
        bg: 'white',
        borderRadius: '0',
        overflow: 'hidden',
        boxShadow: 'md',
        border: '1px solid',
        borderColor: 'retro.navy',
        p: 6,
        position: 'relative',
        _after: {
          content: '""',
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: '30px',
          height: '30px',
          borderLeft: '30px solid transparent',
          borderBottom: '30px solid',
          borderBottomColor: 'retro.salmon',
        }
      },
    },
    Progress: {
      baseStyle: {
        track: {
          bg: 'gray.100',
          borderRadius: '0',
          height: '8px',
          border: '1px solid',
          borderColor: 'gray.300',
        },
      },
      variants: {
        resourceBar: (props) => ({
          filledTrack: {
            bg: 'retro.teal',
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(0,0,0,0.1) 5px, rgba(0,0,0,0.1) 10px)',
          },
        }),
      },
    },
    Slider: {
      baseStyle: {
        track: {
          bg: 'gray.200',
          borderRadius: '0',
          height: '10px',
          border: '1px solid',
          borderColor: 'gray.300',
        },
        thumb: {
          border: '2px solid',
          borderColor: 'retro.navy',
          bg: 'white',
          boxSize: '20px',
          _focus: {
            boxShadow: '0px 0px 0px 3px rgba(0,78,102,0.3)',
          }
        },
        filledTrack: {
          bg: 'retro.teal',
          borderRadius: '0',
        },
      },
    },
    Badge: {
      baseStyle: {
        borderRadius: '0',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: '0.1em',
        px: 3,
        py: 1,
      },
    },
  }
});

export default miamiRetroTheme;