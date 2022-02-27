import React from "react";
import Info from './components/Info'
import About from './components/About'
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-[400px] bg-[#1A1B21] rounded-t-3xl">
        <Info />
        <div className="p-4 text-white text-justify">
          <About />
          <Interests />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
