# Content Expansion Branch

This branch focuses on expanding the narrative content and game mechanics for the Middle Age Multiverse game.

## Branch Purpose

The Content Expansion branch builds upon the foundation established in the miami-retro and resource-calculation branches. It focuses on:

1. Developing the conspiracy storyline
2. Implementing a relationship system
3. Adding an achievement system
4. Enhancing the user experience

## New Features

### Conspiracy Storyline

The main narrative of the game revolves around a conspiracy that the player uncovers throughout their college experience. Key elements include:

- Time travel elements tied to a corporate conspiracy
- Characters with hidden agendas
- Multiple narrative branches based on player choices
- Progressive revelation of the conspiracy through events

### Relationship System

A new relationship system will track the player's connections with other characters:

- Friendship levels with key NPCs
- Relationship effects on resource gains
- Special events triggered by relationship milestones
- Character traits that affect relationship development

### Achievement System

An achievement system to reward progress and exploration:

- Academic achievements (knowledge milestones, grades)
- Social achievements (relationships, events)
- Personal achievements (balanced resources, skill development)
- Hidden achievements for discovering conspiracy elements

### Enhanced User Experience

Improvements to make the game more engaging:

- Animations for resource changes
- Sound effects for key interactions
- Tutorial overlay for new players
- Visual indicators for important events

## Implementation Details

### New Redux Slice

```javascript
// relationships slice structure
{
  characters: {
    "character1": {
      name: "Character 1",
      relationship: 0, // -100 to 100
      traits: ["friendly", "academic"],
      events: ["intro_complete", "coffee_date"],
      status: "acquaintance" // changes based on relationship level
    },
    // additional characters...
  },
  achievements: {
    unlocked: ["first_day", "made_friend"],
    progress: {
      "dean's_list": {
        current: 80,
        required: 100
      }
      // additional progress trackers...
    }
  }
}
```

### New Components

1. `RelationshipPanel.js` - Displays current relationships
2. `CharacterCard.js` - Individual character display
3. `AchievementPanel.js` - Shows unlocked and in-progress achievements
4. `TutorialOverlay.js` - Guides new players through the game

### Updated Existing Components

1. `EventPanel.js` - Add relationship effects to choices
2. `ResourcePanel.js` - Add animations for resource changes
3. `TimeAllocationPanel.js` - Show relationship bonuses

## Getting Started

To start working on this branch:

```bash
# Clone the repository (if you haven't already)
git clone https://github.com/Montster27/V10.git

# Navigate to the simplified directory
cd V10/simplified

# Create and switch to the content-expansion branch
chmod +x create-content-expansion-branch.sh
./create-content-expansion-branch.sh

# Install dependencies
npm install

# Start the development server
npm start
```

## Development Priorities

1. **Week 1-2:** Implement conspiracy storyline and events
2. **Week 3-4:** Develop relationship system and character interactions
3. **Week 5:** Create achievement system
4. **Week 6:** Add animations, sound effects, and tutorial overlay

## Commit Guidelines

- Use descriptive commit messages
- Prefix commits with the feature area:
  - `[STORY]` for conspiracy storyline changes
  - `[REL]` for relationship system changes
  - `[ACH]` for achievement system changes
  - `[UI]` for user experience enhancements
