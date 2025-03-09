#!/bin/bash

# Make this file executable with: chmod +x setup-theme-tester.sh

# Script to set up the theme tester in the Middle Age Multiverse project
# This script temporarily modifies the main app to show the theme tester

echo "Setting up Theme Tester for Middle Age Multiverse..."

# Create a backup of the original index.js file
cp ../src/index.js ../src/index.js.backup

# Create a modified index.js that loads the theme tester
cat > ../src/index.js.temp << EOL
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import ThemeTester from '../ui_test/ThemeTester';
import defaultTheme from './config/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={defaultTheme}>
      <ThemeTester />
    </ChakraProvider>
  </React.StrictMode>
);
EOL

# Replace the current index.js with our temporary one
mv ../src/index.js.temp ../src/index.js

# Ensure Google Fonts are available
if ! grep -q "Press Start 2P" ../public/index.html; then
  # Make a backup of the original index.html
  cp ../public/index.html ../public/index.html.backup
  
  # Add font links to the head section
  sed -i '' '/<\/head>/i \
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Orbitron:wght@400;500;700&family=Share+Tech+Mono&family=VT323&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">' ../public/index.html
fi

echo "Theme Tester setup complete!"
echo "Start your React app with 'npm start' to see the Theme Tester"
echo ""
echo "To restore your original app, run:"
echo "mv ../src/index.js.backup ../src/index.js"
echo "mv ../public/index.html.backup ../public/index.html"
