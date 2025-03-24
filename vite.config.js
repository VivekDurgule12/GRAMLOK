import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFA500',      // Mango Flesh
        secondary: '#FFDA61',    // Mango Skin (Yellowish)
        accent: '#A4D49D',       // Mango Skin (Greenish)
        dark: '#333333',         // Text Color (Dark)
        light: 'rgb(237, 220, 165)', // Background Color (Light)
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
       backgroundImage: {
        'hero-pattern': "url('/src/assets/logo.png')", // Replace with your actual image path
      },
    },
  },
  plugins: [react() ,tailwindcss()],
})
