# Chakra UI Implementation

The Middle Age Multiverse game now uses Chakra UI for enhanced styling and user experience.

## Features

- **Consistent Styling**: All components use Chakra UI's design system for a unified look and feel
- **Improved Accessibility**: Built-in accessibility features make the game more inclusive
- **Resource-Specific Colors**: Each resource (energy, stress, money, knowledge, social) has its own color scheme
- **Responsive Design**: Better layout and component behavior across different screen sizes
- **Enhanced Interactions**: Improved sliders, buttons, and visual feedback
- **Toast Notifications**: Instead of browser alerts for a better user experience
- **Custom Typography**: Fonts that enhance readability and visual appeal

## Installation

If you're starting fresh, simply run:

```bash
chmod +x install-chakra.sh
./install-chakra.sh
```

This script will install all required dependencies and start the application.

## Component Structure

The Chakra UI implementation maintains the same component structure as before, with all UI components now using Chakra UI:

- **Panel**: Base container component with consistent styling
- **ResourceBar**: Visual representation of resources with progress bars
- **Button**: Enhanced button component with different variants
- **Card**: New component for content presentation
- **Slider**: Improved slider for time allocation

## Theme Customization

A custom theme has been created in `src/config/theme.js` that defines:

- Color schemes for all game resources
- Typography settings with custom fonts
- Component style overrides
- Global style defaults

## Additional Components

- **Fonts Component**: Loads and manages custom typography
- **Toast Notifications**: Replace browser alerts for save confirmations

## Best Practices

When extending the UI:

1. Use existing Chakra components when possible
2. Follow the established color schemes for resources
3. Maintain consistent spacing using Chakra's spacing scale
4. Use responsive props for layout adjustments
5. Leverage the theme for new component styling

For more information about Chakra UI, visit [Chakra UI Documentation](https://chakra-ui.com/docs/getting-started).
