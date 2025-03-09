#!/bin/bash
# Script to install Chakra UI dependencies

echo "==============================================="
echo "Installing Chakra UI for Middle Age Multiverse"
echo "==============================================="

echo "\n📦 Installing Chakra UI and its dependencies..."
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion

if [ $? -ne 0 ]; then
  echo "\n❌ Installation failed. Please try again or install manually with:"
  echo "npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion"
  exit 1
fi

echo "\n🧹 Clearing npm cache to prevent stale modules..."
npm cache clean --force

echo "\n✅ Installation complete!\n"
echo "🚀 Starting the application..."
npm start
