import React, { useState } from "react";

import Info from './components/Info'
import About from './components/About'
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(prevTheme => !prevTheme)
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <div className="flex justify-center">
        <div className="w-[400px] dark:bg-[#1A1B21] rounded-t-3xl border shadow-lg">
          <Info />
          <div className="p-4 dark:text-white text-justify">
            <About />
            <Interests />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
