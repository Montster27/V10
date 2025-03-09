// /Users/montysharma/Documents/V10/simplified/src/components/ui/Fonts.js
import { Global } from '@emotion/react';

export const Fonts = () => (
  <Global
    styles={`
      /* Playfair Display - Serif */
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
      
      /* Work Sans - Sans Serif */
      @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap');
      
      /* IBM Plex Mono - Monospace */
      @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap');
    `}
  />
);

export default Fonts;
