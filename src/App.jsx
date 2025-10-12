import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import Home from './pages/Home'; // Corrected import path
import Contact from './pages/Contact'
import About from './pages/About'
import { HelmetProvider } from "react-helmet-async";
import SEO from './components/layout/SEO';
import Enquiry from './components/layout/Enquiry';

function App() {
  return (
    <HelmetProvider>
<SEO/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path='/enquiry' element={<Enquiry/>}/>
     
      </Routes>
    </Router>
    </HelmetProvider>
  );
}

export default App;





// Vibrant & Classic Mango
// Primary Color (Mango Flesh): #FFA500 (Orange) - A classic, bright mango orange. This is your main attention-grabbing color, used for key elements like buttons, headings, or calls to action. A slightly more saturated variant like #FF9933 can also work.
// Secondary Color (Mango Skin - Yellowish): #FFDA61 (Pastel Yellow) - A softer, more yellow-toned color representing the lighter parts of the mango skin or a slightly underripe mango. Use this for backgrounds, less prominent text, or borders. It complements the orange without being overpowering.
// Accent Color (Mango Skin - Greenish): #A4D49D (Light, muted Green) - A touch of green to represent the unripe parts of the mango or the leaves. Use this sparingly, perhaps for small icons, subtle underlines, or hover states. It adds a touch of freshness.
// Text Color (Dark): #333333 (Very Dark Gray) - A near-black, but not pure black, for maximum readability against the lighter backgrounds. Avoid pure black (#000000) as it can be too harsh.
// Background Color (Light):rgb(237, 220, 165) (Very Pale Yellow/Cream) - A very, very light off-white with a hint of yellow. This provides a warm, inviting background that won't compete with the other colors. It's much softer than pure white. Alternatively, a very light tint of the #FFDA61 (pastel yellow) could be used.
// Font Pairing:
// Heading Font: "Poppins" (Sans-serif, available on Google Fonts) - Friendly, rounded, and modern. It has good readability in various weights. Use a heavier weight (e.g., SemiBold or Bold) for headings.
// Body Font: "Open Sans" (Sans-serif, also on Google Fonts) - Highly readable, neutral, and works well for body text. Use Regular or Light weight.