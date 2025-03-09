# Components Organization

## Chakra UI Implementation

This application uses Chakra UI for styling and component structure. Here's how it's organized:

### Component Directory Structure

```
src/
├── components/           # React UI components
│   ├── ui/               # Reusable Chakra UI components
│   │   ├── Button.js     # Custom button component
│   │   ├── Card.js       # Card component for content presentation
│   │   ├── Fonts.js      # Typography setup for the application
│   │   ├── Panel.js      # Panel container with consistent styling
│   │   ├── ResourceBar.js # Visual representation of resources
│   │   └── Slider.js     # Enhanced slider for time allocation
│   │
│   ├── skills/           # Skill-related components
│   │   ├── SkillCard.js  # Card for individual skills
│   │   └── SkillCategory.js # Category grouping for skills
│   │
│   ├── EventPanel.js     # Event display and interaction
│   ├── ResourcePanel.js  # Resource management display
│   ├── SkillsPanel.js    # Skills overview panel
│   ├── TimeAllocationPanel.js # Time allocation controls
│   └── TimeControls.js   # Game time controls
├── config/               # Configuration files
│   └── theme.js          # Chakra UI theme configuration
```

### Key Design Patterns

1. **Consistent Styling**: All components use Chakra UI theme variables for consistent styling
2. **Color Schemes**: Each resource type has a dedicated color scheme defined in the theme
3. **Responsive Design**: Components use responsive arrays for different screen sizes
4. **Component Composition**: UI is built from smaller, reusable components
5. **Props Standardization**: Common prop patterns across similar components

### Extending the UI

When creating new components:

1. Use existing Chakra UI components as building blocks
2. Follow the established patterns for props and composition
3. Use theme colors and spacing to maintain consistency
4. For resource-related components, use the appropriate color schemes:
   - Energy: 'energy'
   - Stress: 'stress'
   - Money: 'money'
   - Knowledge: 'knowledge'
   - Social: 'social'

### Theme Configuration

The Chakra UI theme in `config/theme.js` defines:

- Custom color schemes for all game resources
- Typography settings with custom Google Fonts
- Component style overrides for consistent appearance
- Global style defaults

Refer to [Chakra UI Documentation](https://chakra-ui.com/docs/getting-started) for more information about using the framework.
