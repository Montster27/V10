// /Users/montysharma/Documents/V10/simplified/src/ChakraSwitch.js
import React from 'react';

// This is a helper component to check if Chakra UI is available
// and switch between Chakra and non-Chakra versions
const ChakraSwitch = ({ children }) => {
  const [chakraAvailable, setChakraAvailable] = React.useState(true);

  React.useEffect(() => {
    // Check if @chakra-ui/react is available
    const checkChakra = async () => {
      try {
        // Try to import Chakra UI
        await import('@chakra-ui/react');
        
        // Also check for emotion/react which is required for Fonts
        try {
          await import('@emotion/react');
        } catch (emotionError) {
          console.warn('Emotion not available. Using fallback version.');
          setChakraAvailable(false);
          return;
        }
        
        setChakraAvailable(true);
      } catch (error) {
        console.warn('Chakra UI not available. Using fallback version.');
        setChakraAvailable(false);
      }
    };

    checkChakra();
  }, []);

  if (!chakraAvailable) {
    return (
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#f8d7da', 
        color: '#721c24', 
        margin: '20px', 
        borderRadius: '5px', 
        maxWidth: '800px',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <h3 style={{ marginTop: 0 }}>Chakra UI Not Installed</h3>
        <p>
          This application has been upgraded to use Chakra UI for an enhanced user interface.
          To see the improved version, you need to install the Chakra UI dependencies.
        </p>
        <p>
          <strong>Option 1:</strong> Install Chakra UI (recommended):
          <br />
          <code style={{ backgroundColor: '#f0f0f0', padding: '3px 6px', borderRadius: '3px' }}>
            npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
          </code>
        </p>
        <p>
          <strong>Option 2:</strong> Use the fallback version:
          <br />
          <code style={{ backgroundColor: '#f0f0f0', padding: '3px 6px', borderRadius: '3px' }}>
            ./use-fallback.sh
          </code>
          <br />
          (Make sure to make the script executable with <code>chmod +x use-fallback.sh</code>)
        </p>
        <p>
          See <strong>QUICK_FIX.md</strong> or <strong>CHAKRA_INSTALLATION.md</strong> for detailed instructions.
        </p>
      </div>
    );
  }

  return children;
};

export default ChakraSwitch;
