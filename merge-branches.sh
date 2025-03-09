#!/bin/bash

# Script to merge both branches into main

# Navigate to the simplified directory
cd /Users/montysharma/Documents/V10/simplified

# Store the current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

# Commit any pending changes
echo "Committing any pending changes..."
git add .
git commit -m "Commit changes before merging branches" || echo "No changes to commit"

# Switch to main branch
echo "Switching to main branch..."
git checkout main

# Merge miami-retro branch
echo "Merging miami-retro branch into main..."
git merge miami-retro -m "Merge miami-retro branch into main"

# Merge resource-calculation branch
echo "Merging resource-calculation branch into main..."
git merge resource-calculation -m "Merge resource-calculation branch into main"

# Push changes to remote repository
echo "Pushing changes to remote repository..."
git push origin main

# Clean up branches (optional)
echo ""
echo "Do you want to delete the merged branches? (y/n)"
read delete_branches

if [ "$delete_branches" = "y" ]; then
    echo "Deleting miami-retro branch..."
    git branch -d miami-retro
    
    echo "Deleting resource-calculation branch..."
    git branch -d resource-calculation
    
    echo "Pushing branch deletions to remote..."
    git push origin --delete miami-retro
    git push origin --delete resource-calculation
fi

# Switch back to the original branch or stay on main
if [ "$CURRENT_BRANCH" != "main" ] && [ "$delete_branches" != "y" ]; then
    echo "Switching back to $CURRENT_BRANCH branch..."
    git checkout $CURRENT_BRANCH
else
    echo "Staying on main branch..."
fi

echo ""
echo "Branch merging complete!"
echo "You are now ready to begin a new section."
