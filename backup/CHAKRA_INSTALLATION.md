# Installing Chakra UI Dependencies

We've updated the project to use Chakra UI for enhanced styling and user experience. To get the application running with Chakra UI, you'll need to install the required dependencies.

## Option 1: Using the Installation Script

Run the provided installation script:

```bash
# Make the script executable
chmod +x install-chakra.sh

# Run the script
./install-chakra.sh
```

## Option 2: Manual Installation

Alternatively, you can install the dependencies manually:

```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

## Option 3: Using package.json

Since we've already updated the package.json file with the required dependencies, you can simply run:

```bash
npm install
```

This will install all dependencies listed in package.json, including Chakra UI.

## Option 4: Use the Fallback Version (Temporary Solution)

If you want to use the application without Chakra UI while you decide whether to install it:

```bash
# Make the script executable
chmod +x use-fallback.sh

# Run the script
./use-fallback.sh
```

This will copy the fallback version of App.js that doesn't require Chakra UI.

## After Installation

Once the dependencies are installed, start the application as usual:

```bash
npm start
```

The application should now work with the new Chakra UI components.

## Benefits of Chakra UI

The Chakra UI integration provides:

- More consistent styling across the application
- Improved accessibility for users
- Better responsive design for different screen sizes
- Enhanced visual feedback for user actions
- Theme-based design with custom colors for game resources
- Toast notifications instead of browser alerts
- Consistent typography with custom fonts
