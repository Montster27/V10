#!/bin/bash

# Make this file executable with: chmod +x toggle-theme-tester.sh

# Check if we have a backup of the original index.js
if [ -f src/index.js.backup ]; then
  # We're currently in theme tester mode, switch back to normal
  echo "Switching back to regular app..."
  cp src/index.js.backup src/index.js
  rm src/index.js.backup
  
  # If we also backed up index.html, restore it too
  if [ -f public/index.html.backup ]; then
    cp public/index.html.backup public/index.html
    rm public/index.html.backup
  fi
  
  echo "✅ Regular app restored! Run 'npm start' to see the regular app."
else
  # We're in normal mode, switch to theme tester
  echo "Switching to theme tester mode..."
  
  # Backup the original files
  cp src/index.js src/index.js.backup
  cp public/index.html public/index.html.backup
  
  # Replace index.js with theme tester version
  cp src/index.js.theme-tester src/index.js
  
  # Add Google Fonts to index.html if they're not there already
  if ! grep -q "Press Start 2P" public/index.html; then
    sed -i '' '/<\/head>/i \
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Orbitron:wght@400;500;700&family=Share+Tech+Mono&family=VT323&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">' public/index.html
  fi
  
  echo "✅ Theme tester enabled! Run 'npm start' to see the theme tester."
fi
