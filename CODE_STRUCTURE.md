# Code Structure Guide

This document provides an overview of the folder structure and key files in this simplified implementation of Middle Age Multiverse.

## Folder Structure

```
simplified/
├── public/                 # Static files
│   └── index.html          # HTML entry point
│
├── src/                    # Source code
│   ├── components/         # React components
│   │   ├── EventPanel.js       # Event display and choices
│   │   ├── ResourcePanel.js    # Resource display bars
│   │   ├── SkillsPanel.js      # Skill tree and unlock interface
│   │   ├── TimeAllocationPanel.js  # Time allocation sliders
│   │   ├── TimeControls.js     # Game time controls (play/pause)
│   │   └── skills.css          # CSS for skills interface
│   │
│   ├── services/           # Game logic services
│   │   └── gameLoop.js         # Core game loop and timing
│   │
│   ├── slices/             # Redux state slices
│   │   ├── eventsSlice.js      # Event state management
│   │   ├── resourcesSlice.js   # Resource state management
│   │   ├── skillsSlice.js      # Skill system state
│   │   ├── timeAllocationSlice.js  # Time allocation state
│   │   └── timeSlice.js        # Game time management
│   │
│   ├── App.js              # Main app component
│   ├── index.css           # Global styles
│   ├── index.js            # App entry point
│   └── store.js            # Redux store configuration
│
├── CODE_STRUCTURE.md       # This file
├── package.json            # Project dependencies and scripts
├── README.md               # Project overview
├── SETUP.md                # Setup instructions
├── SIMPLIFIED_SPEC.md      # Game specification
└── SIMPLIFICATION_SUMMARY.md  # Explanation of simplifications
```

## Key System Components

### 1. Game Loop (services/gameLoop.js)
- Controls the core game timing (3 seconds = 1 day)
- Handles day processing logic
- Manages save/load functionality

### 2. Redux Store (store.js)
- Central state management
- Combines all feature slices
- Configures Redux middleware

### 3. Time System (slices/timeSlice.js)
- Tracks game days and date
- Manages pause/play state
- Provides time control actions

### 4. Resource System (slices/resourcesSlice.js)
- Manages player resources (energy, stress, money, etc.)
- Handles resource updates based on activities
- Implements resource limits and validation

### 5. Time Allocation System (slices/timeAllocationSlice.js)
- Manages percentage allocation between activities
- Provides normalization to ensure 100% total
- Controls how time is distributed

### 6. Event System (slices/eventsSlice.js)
- Manages game events and choices
- Handles event triggering based on game day
- Processes event resolution and effects

### 7. Skill System (slices/skillsSlice.js)
- Tracks skill points and unlocked skills
- Manages skill tree progression
- Implements skill requirements and costs

## State Flow

The core game loop operates as follows:

1. **Time Progression**:
   - gameLoop.js → advanceDay action → timeSlice reducer

2. **Resource Updates**:
   - gameLoop.js → applyDailyUpdate action → resourcesSlice reducer

3. **Skill Point Generation**:
   - gameLoop.js → addSkillPoints action → skillsSlice reducer

4. **Event Checking**:
   - gameLoop.js → checkForEvents action → eventsSlice reducer

## UI Component Relationships

- **App.js**: Main container that determines whether to show event or main game UI
- **TimeControls.js**: Shows day/date and handles game flow control
- **ResourcePanel.js**: Displays current resource values
- **TimeAllocationPanel.js**: Allows adjusting time allocation percentages
- **SkillsPanel.js**: Shows skill trees and allows unlocking skills
- **EventPanel.js**: Displays active events and handles choices

## Extension Points

If you want to extend the game, here are the key places to modify:

1. **Add New Resources**: Modify resourcesSlice.js initial state and reducers
2. **Add New Activities**: Update timeAllocationSlice.js and ResourcePanel.js
3. **Add New Events**: Extend the available events array in eventsSlice.js
4. **Add New Skills**: Add to the skillDefinitions object in skillsSlice.js
5. **Change Time Scale**: Modify DAY_DURATION_MS in gameLoop.js
