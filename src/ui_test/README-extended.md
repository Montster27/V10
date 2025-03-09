# Middle Age Multiverse - Extended Theme Collection

This directory contains an extended theme testing utility for the Middle Age Multiverse game. The theme tester allows you to cycle through 15 different 80's-inspired UI themes to visualize how they would look in the game.

## Theme Categories

### Base Themes
1. **Default** - The current game theme
2. **Synthwave Neon** - Neon colors with dark backgrounds inspired by 80's synth aesthetics
3. **Digital Grid** - Terminal-like green-on-black with grid patterns
4. **Miami Vice** - Vibrant pastel colors from 80's Miami style
5. **Retro Arcade** - Classic arcade styling with thick borders and pixelated aesthetics
6. **Wireframe Hologram** - Futuristic holographic/wireframe interface with blue tones

### Synthwave Variations
7. **Synthwave Sunset** - Orange and purple gradient theme with sunset aesthetics
8. **Synthwave Outrun** - Classic outrun theme with horizontal lines and retro sunset grid
9. **Synthwave Cyberpunk** - Cyberpunk-inspired neon theme with glitchy elements

### Miami Vice Variations
10. **Miami Pastel** - Soft pastel colors with rounded elements
11. **Miami Vapor** - Bold vaporwave aesthetic with geometric elements
12. **Miami Retro** - Art deco-inspired Miami design with elegant styling

### Hologram Variations
13. **Hologram Blue** - Blue-tinted futuristic holographic interface
14. **Hologram Green** - Terminal-inspired green holographic styling
15. **Hologram Purple** - Purple sci-fi holographic interface with geometric accents

## Quick Setup

The simplest way to use the theme tester with all variations is:

1. Make the toggle script executable:
```bash
chmod +x toggle-theme-tester-updated.sh
```

2. Run the toggle script to switch to theme tester mode:
```bash
./toggle-theme-tester-updated.sh
```

3. Start your React application:
```bash
npm start
```

4. After you're done, run the toggle script again to restore your original app:
```bash
./toggle-theme-tester-updated.sh
```

## Required Fonts

For all themes to display properly, the toggle script will automatically add these Google Fonts to your public/index.html:

- Press Start 2P
- Orbitron
- Share Tech Mono
- VT323
- IBM Plex Mono
- Rajdhani
- Exo 2
- DM Sans
- Poppins
- Work Sans
- Playfair Display

## Implementing a Theme in Your App

To apply any of these themes to your main application:

1. Choose your desired theme from the theme tester
2. In `src/index.js`, update the ChakraProvider to use your preferred theme:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { themeVariations } from './config/themes/variations';

// Use whichever theme you prefer
const selectedTheme = themeVariations.synthwaveCyberpunk.theme; // Change this to your preferred theme

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={selectedTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
```

## About the Themes

Each theme is a complete Chakra UI theme that includes:

- Custom color schemes for all resources (energy, stress, money, knowledge, social)
- Styled UI components (Panel, Button, Card, Progress, Slider, Badge)
- Typography settings with specialized fonts
- Global styles and background effects
- Detailed hover and active states

## Customization

All themes are located in `src/config/themes/variations/` and can be further customized to suit your specific needs.
