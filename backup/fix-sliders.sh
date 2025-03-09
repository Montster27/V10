#!/bin/bash
# Script to fix slider visibility issues and install Chakra UI dependencies

echo "Installing Chakra UI and its dependencies..."
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion

echo "Clearing npm cache to prevent stale modules..."
npm cache clean --force

echo "Installation complete. Starting the application..."
npm start
