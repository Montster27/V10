# Middle Age Multiverse: Simplified Specification

## Core Concept
A single-player RPG where players in their 50s+ can relive their college days with the wisdom they have now. Set in a 1980s college campus with time travel elements and a conspiracy storyline.

## Game Systems

### 1. Time System
- **Scale**: 3 seconds of real time = 1 day of game time
- **Controls**: Simple play/pause button
- **Display**: Day counter and date shown in corner of screen

### 2. Resource System
- **Core Resources**:
  - Energy (0-100)
  - Stress (0-100) 
  - Money (0-10,000)
  - Knowledge (0-1,000)
  - Social (0-100)
- **Regeneration**: Resources naturally regenerate or deplete based on activities

### 3. Time Allocation System
- **Weekly Planning**: Players allocate time using percentage sliders
- **Activities**: Study, Work, Social, Rest, Exercise
- **Effects**: Each activity affects resources differently

### 4. Event System
- **Types**: 
  - Random events based on current activities
  - Story events that advance the conspiracy plot
- **Structure**: Events present a situation and 2-4 choices
- **Consequences**: Choices affect resources and unlock future events

### 5. Skill System
- **Acquisition**: Gain 24 skill points per game day
- **Structure**: Three simple skill trees (Academic, Social, Physical)
- **Costs**: Higher-tier skills cost exponentially more points

## Game Architecture

### Frontend
- Simple React app with functional components
- Basic Redux store with slices for:
  - Resources
  - Time
  - Activities
  - Events
  - Skills

### Backend
- Simple JSON storage for game state
- No server-side processing needed

## Game Flow
1. Player sets weekly time allocation using percentage sliders
2. Time progresses automatically (or manually if paused)
3. Resources update based on time allocation
4. Events trigger based on time or state conditions
5. Player makes choices during events
6. Conspiracy storyline gradually unfolds through events

## Technical Implementation

### State Management
```javascript
// Main game state
{
  resources: {
    energy: { current: 100, max: 100 },
    stress: { current: 0, max: 100 },
    money: 500,
    knowledge: 0,
    social: 50
  },
  timeAllocation: {
    study: 20,    // percentages
    work: 20,
    social: 20,
    rest: 30,
    exercise: 10
  },
  gameTime: {
    day: 1,
    paused: false
  },
  events: {
    active: [],
    completed: []
  },
  skills: {
    points: 0,
    unlocked: []
  }
}
```

### Game Loop
```javascript
// Simple game loop
function gameLoop() {
  if (!gameState.gameTime.paused) {
    // Update resources based on time allocation
    updateResources();
    
    // Check for new events
    checkForEvents();
    
    // Generate skill points
    gameState.skills.points += 1; // 1 point per hour, 24 per day
    
    // Advance game time
    gameState.gameTime.day += 1;
  }
  
  // Schedule next update (3 seconds = 1 day)
  setTimeout(gameLoop, 3000);
}
```

### Event Handling
```javascript
// Simple event structure
const event = {
  id: "freshman_party",
  title: "Freshman Welcome Party",
  description: "You're invited to the freshman welcome party...",
  choices: [
    {
      text: "Attend and socialize",
      effects: {
        energy: -10,
        stress: +5,
        social: +15
      }
    },
    {
      text: "Skip and study instead",
      effects: {
        knowledge: +10,
        social: -5
      }
    }
  ]
};
```

## User Interface
- **Main Screen**: Shows resource bars and time allocation sliders
- **Event Screen**: Appears when events trigger, showing choices
- **Skills Screen**: Simple skill tree with unlock buttons
- **Time Controls**: Play/pause button for game progression

## Development Approach
1. Create basic UI layout with React components
2. Implement core game loop with time progression
3. Add resource system with basic calculations
4. Implement time allocation sliders
5. Add simple event system
6. Create basic skill system
7. Add saving/loading game state
