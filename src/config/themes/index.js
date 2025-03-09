// /Users/montysharma/Documents/V10/simplified/src/config/themes/index.js
import defaultTheme from '../theme';
import synthwaveTheme from './synthwave-theme';
import digitalGridTheme from './digital-grid-theme';
import miamiViceTheme from './miami-vice-theme';
import arcadeTheme from './arcade-theme';
import wireframeTheme from './wireframe-theme';

// Export all themes with descriptive names
export const themes = {
  default: {
    name: "Default",
    theme: defaultTheme
  },
  synthwave: {
    name: "Synthwave Neon",
    theme: synthwaveTheme
  },
  digital: {
    name: "Digital Grid",
    theme: digitalGridTheme
  },
  miami: {
    name: "Miami Vice",
    theme: miamiViceTheme
  },
  arcade: {
    name: "Retro Arcade",
    theme: arcadeTheme
  },
  wireframe: {
    name: "Wireframe Hologram",
    theme: wireframeTheme
  }
};

export default themes;