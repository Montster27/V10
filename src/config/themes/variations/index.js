// /Users/montysharma/Documents/V10/simplified/src/config/themes/variations/index.js
import defaultTheme from '../../theme';
import synthwaveTheme from '../synthwave-theme';
import digitalGridTheme from '../digital-grid-theme';
import miamiViceTheme from '../miami-vice-theme';
import arcadeTheme from '../arcade-theme';
import wireframeTheme from '../wireframe-theme';

// Import Synthwave Variations
import synthwaveSunsetTheme from './synthwave-sunset-theme';
import synthwaveOutrunTheme from './synthwave-outrun-theme';
import synthwaveCyberpunkTheme from './synthwave-cyberpunk-theme';

// Import Miami Vice Variations
import miamiPastelTheme from './miami-pastel-theme';
import miamiVaporTheme from './miami-vapor-theme';
import miamiRetroTheme from './miami-retro-theme';

// Import Hologram Variations
import hologramBlueTheme from './hologram-blue-theme';
import hologramGreenTheme from './hologram-green-theme';
import hologramPurpleTheme from './hologram-purple-theme';

// Export all theme variations
export const themeVariations = {
  // Main Themes
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
  },
  
  // Synthwave Variations
  synthwaveSunset: {
    name: "Synthwave Sunset",
    theme: synthwaveSunsetTheme,
    category: "Synthwave"
  },
  synthwaveOutrun: {
    name: "Synthwave Outrun",
    theme: synthwaveOutrunTheme,
    category: "Synthwave"
  },
  synthwaveCyberpunk: {
    name: "Synthwave Cyberpunk",
    theme: synthwaveCyberpunkTheme,
    category: "Synthwave"
  },
  
  // Miami Vice Variations
  miamiPastel: {
    name: "Miami Pastel",
    theme: miamiPastelTheme,
    category: "Miami Vice"
  },
  miamiVapor: {
    name: "Miami Vapor",
    theme: miamiVaporTheme,
    category: "Miami Vice"
  },
  miamiRetro: {
    name: "Miami Retro",
    theme: miamiRetroTheme,
    category: "Miami Vice"
  },
  
  // Hologram Variations
  hologramBlue: {
    name: "Hologram Blue",
    theme: hologramBlueTheme,
    category: "Hologram"
  },
  hologramGreen: {
    name: "Hologram Green",
    theme: hologramGreenTheme,
    category: "Hologram"
  },
  hologramPurple: {
    name: "Hologram Purple",
    theme: hologramPurpleTheme,
    category: "Hologram"
  }
};

export default themeVariations;