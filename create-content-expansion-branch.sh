#!/bin/bash

# Script to create a new branch named content-expansion

# Navigate to the simplified directory
cd /Users/montysharma/Documents/V10/simplified

# Make sure we're on the main branch
git checkout main

# Create and checkout the new branch
git checkout -b content-expansion

# Show the current branch
echo "Current branch:"
git branch --show-current

# Instructions for the user
echo ""
echo "The 'content-expansion' branch has been created."
echo "You can now continue development on this branch."
echo ""
echo "This branch will focus on:"
echo "1. Implementing conspiracy storyline and events"
echo "2. Adding friendship/relationship system"
echo "3. Creating achievement system"
echo "4. Enhancing the user experience"
echo ""
echo "To switch back to the main branch later, use:"
echo "git checkout main"
echo ""
echo "To push this branch to remote, use:"
echo "git push -u origin content-expansion"
