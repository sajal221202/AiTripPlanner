import React from 'react';
import { useTheme } from './contexts/ThemeContext';
import Hero from './components/custom/Hero';
import './App.css'

function App() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`} style={{ backgroundColor: 'var(--background)' }}>
      {/* hero section */}
      <Hero/>
    </div>
  )
}

export default App
