#!/bin/bash

# Script to create a new branch named miami-retro
git checkout -b miami-retro

# Show the current branch
echo "Current branch:"
git branch --show-current

# Instructions for the user
echo ""
echo "The 'miami-retro' branch has been created."
echo "You can now continue development on this branch."
echo ""
echo "To switch back to the main branch later, use:"
echo "git checkout main"
echo ""
echo "To push this branch to remote, use:"
echo "git push -u origin miami-retro"
