# Middle Age Multiverse - Setup Instructions

This is a simplified version of the Middle Age Multiverse game built with React and Redux.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Navigate to the project directory:
```
cd /Users/montysharma/Documents/V10/simplified
```

2. Install dependencies:
```
npm install
```
or
```
yarn install
```

## Running the Game

Start the development server:
```
npm start
```
or
```
yarn start
```

This will open the game in your browser at http://localhost:3000

## Game Controls

- Use the sliders to allocate your weekly time between different activities
- Click "Play" to start the game time (3 seconds = 1 game day)
- Make choices during events to influence your character's path
- Spend skill points to unlock new abilities that affect your resource gains

## Game Mechanics

1. **Time Allocation**: Distributing your weekly time between study, work, social, rest, and exercise
2. **Resource Management**: Balancing energy, stress, money, knowledge, and social connections
3. **Event System**: Responding to events that present choices and consequences
4. **Skill System**: Unlocking abilities that improve efficiency and resource gains

## Saving & Loading

- Click the "Save Game" button to save your progress
- The game automatically loads your previous save when you return

## Simplified Architecture

This simplified version uses:
- React for UI components
- Redux for state management
- Local storage for saving game state
- No backend required

The code is organized into:
- `/src/components`: UI components
- `/src/slices`: Redux slices for state management
- `/src/services`: Game loop and utility functions
