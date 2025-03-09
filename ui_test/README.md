# Middle Age Multiverse - Theme Tester

This directory contains a theme testing utility for the Middle Age Multiverse game. The theme tester allows you to cycle through different 80's-inspired UI themes to visualize how they would look in the game.

## Themes Included

1. **Default** - The current game theme
2. **Synthwave Neon** - Neon colors with dark backgrounds inspired by 80's synth aesthetics
3. **Digital Grid** - Terminal-like green-on-black with grid patterns
4. **Miami Vice** - Vibrant pastel colors from 80's Miami style
5. **Retro Arcade** - Classic arcade styling with thick borders and pixelated aesthetics
6. **Wireframe Hologram** - Futuristic holographic/wireframe interface with blue tones

## How to Use

There are two ways to incorporate the theme tester into your project:

### Option 1: Add to existing React app (Recommended)

1. Import ThemeTester in your App.js or create a new route:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ThemeTester from './ui_test/ThemeTester';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/theme-tester" element={<ThemeTester />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
```

2. Start your React application:

```bash
cd /Users/montysharma/Documents/V10/simplified
npm start
```

3. Navigate to `/theme-tester` in your browser (e.g., http://localhost:3000/theme-tester)

### Option 2: Create a standalone theme tester app

1. Create a modified version of the React app specifically for theme testing:

```bash
# In your project directory
mkdir -p theme-tester/src
cp -r src/config theme-tester/src/
cp -r src/components theme-tester/src/
cp ui_test/ThemeTester.js theme-tester/src/
```

2. Create a new package.json and index.js in the theme-tester directory to create a minimal React app

3. Install dependencies and start the app:

```bash
cd theme-tester
npm install
npm start
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

## Font Requirements

Make sure to include the following Google Fonts in your application for all themes to display properly:

- Press Start 2P
- Orbitron
- Share Tech Mono
- VT323
- IBM Plex Mono