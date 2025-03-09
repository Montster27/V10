// /Users/montysharma/Documents/V10/simplified/src/config/themes/variations/synthwave-outrun-theme.js
import { extendTheme } from '@chakra-ui/react';

const synthwaveOutrunTheme = extendTheme({
  colors: {
    brand: {
      50: '#ffdcee',
      100: '#ffb5dc',
      200: '#ff8dcb',
      300: '#ff66b9',
      400: '#ff3ea8',
      500: '#e61f8e', // Primary brand color
      600: '#b31770',
      700: '#800f51',
      800: '#4d0831',
      900: '#1a0110',
    },
    energy: {
      50: '#e0fffc',
      100: '#b8fff7',
      200: '#8efff3',
      300: '#64ffee',
      400: '#3affea',
      500: '#00e6d4', // Energy resource
      600: '#00b3a5',
      700: '#008077',
      800: '#004d47',
      900: '#001a18',
    },
    stress: {
      50: '#ffdce0',
      100: '#ffb5bc',
      200: '#ff8d97',
      300: '#ff6673',
      400: '#ff3e4e',
      500: '#e61f32', // Stress resource
      600: '#b31727',
      700: '#800f1c',
      800: '#4d0810',
      900: '#1a0105',
    },
    money: {
      50: '#d4fffa',
      100: '#a9fff1',
      200: '#7effe8',
      300: '#53fede',
      400: '#28fed5',
      500: '#0fe5bc', // Money resource
      600: '#0bb392',
      700: '#078069',
      800: '#034e3f',
      900: '#001c16',
    },
    knowledge: {
      50: '#dce5ff',
      100: '#bacbff',
      200: '#97b0ff',
      300: '#7595ff',
      400: '#537aff',
      500: '#3961e6', // Knowledge resource
      600: '#2d4cb3',
      700: '#203680',
      800: '#14214d',
      900: '#070b1a',
    },
    social: {
      50: '#ffe2fe',
      100: '#ffb2fd',
      200: '#ff81fb',
      300: '#ff51fa',
      400: '#ff20f9',
      500: '#e607df', // Social resource
      600: '#b305ad',
      700: '#80037c',
      800: '#4d024a',
      900: '#1a0019',
    },
    // Outrun backgrounds  
    outrun: {
      900: '#000033', // Deepest background
      800: '#000e4d',
      700: '#001866',
      600: '#002280',
      500: '#002c99',
      400: '#0036b3',
      300: '#0040cc',
      200: '#004ae6',
      100: '#0055ff',
    },
    horizon: {
      500: '#ff2a6d',
      400: '#05d9e8',
      300: '#005678',
      200: '#ff1177',
      100: '#01ffc3',
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
        bg: 'outrun.900',
        color: 'white',
        backgroundImage: `
          linear-gradient(180deg, #000033 0%, #00008b 100%),
          repeating-linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30%, rgba(1,255,195,0.08) 50%, rgba(0,0,0,0) 70%, rgba(0,0,0,0) 100%)
        `,
        backgroundAttachment: 'fixed',
        backgroundSize: '100% 100%, 100% 300px',
      },
      'h1, h2, h3, h4': {
        color: 'white',
        textShadow: '0 0 8px #ff2a6d, 0 0 15px rgba(255,42,109,0.5)',
        letterSpacing: '2px',
      },
      'h1': {
        fontSize: '2.5rem',
        color: '#05d9e8',
        textTransform: 'uppercase',
        textShadow: '3px 3px 0 #ff2a6d',
      },
    },
  },
  components: {
    Panel: {
      baseStyle: {
        bg: 'rgba(0,0,51,0.8)',
        borderRadius: '0.25rem',
        border: '2px solid',
        borderImage: 'linear-gradient(to right, #05d9e8, #ff2a6d) 1',
        p: 4,
        position: 'relative',
        overflow: 'hidden',
        _after: {
          content: '""',
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          height: '4px',
          background: 'linear-gradient(to right, #05d9e8, #ff2a6d)',
        }
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        textShadow: '0 0 4px currentColor',
        transition: 'all 0.2s',
      },
      variants: {
        solid: (props) => ({
          bg: `${props.colorScheme}.500`,
          color: 'white',
          borderBottom: '4px solid',
          borderColor: 'horizon.500',
          borderRadius: '0',
          _hover: {
            bg: `${props.colorScheme}.400`,
            transform: 'translateY(-2px)',
          },
          _active: {
            borderBottom: '2px solid',
            marginTop: '2px',
            transform: 'translateY(0)',
          }
        }),
        outline: (props) => ({
          bg: 'transparent',
          color: `${props.colorScheme}.400`,
          border: '2px solid',
          borderColor: `${props.colorScheme}.500`,
          borderRadius: '0',
          _hover: {
            bg: `rgba(255,42,109,0.1)`,
          },
        }),
      },
    },
    Card: {
      baseStyle: {
        bg: 'rgba(0,0,51,0.8)',
        borderRadius: '0',
        border: '2px solid',
        borderColor: 'horizon.400',
        overflow: 'hidden',
        p: 4,
        position: 'relative',
        _before: {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          height: '4px',
          background: 'linear-gradient(to right, #05d9e8, #01ffc3)',
        }
      },
    },
    Progress: {
      baseStyle: {
        track: {
          bg: 'outrun.800',
          border: '1px solid',
          borderColor: 'horizon.400',
          borderRadius: '0',
        },
      },
      variants: {
        resourceBar: (props) => ({
          filledTrack: {
            background: 'linear-gradient(to right, #05d9e8, #01ffc3)',
            borderRadius: '0',
          },
        }),
      },
    },
    Badge: {
      baseStyle: {
        borderRadius: '0',
        textTransform: 'uppercase',
        fontWeight: 'bold',
      }
    }
  }
});

export default synthwaveOutrunTheme;