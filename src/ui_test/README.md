# Middle Age Multiverse - Theme Tester

This directory contains a theme testing utility for the Middle Age Multiverse game. The theme tester allows you to cycle through different 80's-inspired UI themes to visualize how they would look in the game.

## Themes Included

1. **Default** - The current game theme
2. **Synthwave Neon** - Neon colors with dark backgrounds inspired by 80's synth aesthetics
3. **Digital Grid** - Terminal-like green-on-black with grid patterns
4. **Miami Vice** - Vibrant pastel colors from 80's Miami style
5. **Retro Arcade** - Classic arcade styling with thick borders and pixelated aesthetics
6. **Wireframe Hologram** - Futuristic holographic/wireframe interface with blue tones

## Quick Setup

The simplest way to use the theme tester is:

1. Make a backup of your current index.js file:
```bash
cp src/index.js src/index.js.backup
```

2. Replace your index.js with the theme tester version:
```bash
cp src/index.js.theme-tester src/index.js
```

3. Start your React application:
```bash
npm start
```

4. After you're done, restore your original index.js:
```bash
cp src/index.js.backup src/index.js
```

## Adding Google Fonts

For the themes to display properly, add these Google Fonts to your public/index.html:

```html
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Orbitron:wght@400;500;700&family=Share+Tech+Mono&family=VT323&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

## Theme Implementation Guide

To apply one of these themes to the main application:

1. Select your desired theme from the theme tester
2. In `src/index.js`, update the ChakraProvider to use your preferred theme:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import themes from './config/themes';

// Use whichever theme you prefer
const selectedTheme = themes.synthwave.theme; // Change this to your preferred theme

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={selectedTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
```

## Customizing Themes

Each theme is defined in its own file in `src/config/themes/`. You can modify these files to adjust colors, fonts, and component styles.