# Merging Branches and Starting a New Section

This document provides instructions for merging our development branches into main and beginning a new section of work.

## Current Branches

We currently have two feature branches that need to be merged into main:

1. **miami-retro branch** - Contains the Miami Retro theme implementation
2. **resource-calculation branch** - Contains improvements to the resource calculation system

## Merging Process

Follow these steps to merge both branches into main:

1. Make the merge script executable:
   ```bash
   cd /Users/montysharma/Documents/V10/simplified
   chmod +x merge-branches.sh
   ```

2. Run the merge script:
   ```bash
   ./merge-branches.sh
   ```

3. Follow the prompts in the script. When asked if you want to delete the merged branches, choose based on whether you need to continue working on those branches.

## Beginning a New Section

After merging, we'll begin a new section focusing on content development and game mechanics enhancements:

### New Section: Content Expansion and Game Mechanics

#### Goals for this Section:

1. **Narrative Development**
   - Implement the conspiracy storyline elements
   - Add 10+ new events with meaningful choices
   - Create story progression triggers

2. **Advanced Game Mechanics**
   - Implement friendship/relationship system
   - Add character traits that affect resource gains
   - Create achievement system

3. **Enhanced User Experience**
   - Add animations for resource changes
   - Implement sound effects for key interactions
   - Create a tutorial overlay for new players

#### Implementation Plan:

1. Create a new branch for this work:
   ```bash
   git checkout -b content-expansion
   ```

2. Focus first on implementing the conspiracy storyline:
   - Update events.js with new conspiracy-related events
   - Add trigger conditions based on player actions
   - Create narrative branches with consequences

3. Implement the friendship/relationship system:
   - Add a new relationships slice to the Redux store
   - Create UI components for relationship management
   - Connect relationship status to resource effects

4. Add the achievement system:
   - Define achievement criteria and rewards
   - Create achievement UI components
   - Implement tracking and notification system

5. Enhance the user experience:
   - Add CSS animations for resource changes
   - Implement sound effects for important actions
   - Create an onboarding tutorial for new players

#### Files to Modify:

- src/data/events.js - Add new events
- src/slices/ - Add relationships slice
- src/components/ - Add relationship and achievement components
- src/services/gameLoop.js - Update to track achievements
- src/utils/ - Add animation and sound utility functions

## Timeline

- Merge Branches: Immediate
- Content Expansion: 2 weeks
- Game Mechanics: 2 weeks
- User Experience Enhancements: 1 week
- Testing and Refinement: 1 week

Total Estimated Time: 6 weeks
