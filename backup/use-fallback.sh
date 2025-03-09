#!/bin/bash
# Script to use the fallback App.js without Chakra UI

echo "Applying fallback version without Chakra UI..."

# Copy the fallback App.js to App.js
cp ./src/App.fallback.js ./src/App.js

echo "Fallback version applied. You can now start the application with:"
echo "npm start"
echo ""
echo "Note: This is a temporary solution. To install Chakra UI and use the enhanced version:"
echo "npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion"
