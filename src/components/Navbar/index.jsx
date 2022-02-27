import React from "react";

import logo from '../../assets/logo192.png'

function Navbar() {
 return (
   <header className="p-3 border-b-1 shadow bg-[#21222A]">
    <nav className="px-5 flex justify-between align-middle">
      <div className="flex gap-2 text-[#61DAFB]">
        <img src={logo} className="w-[40px]" alt="" />
        <h4>React Facts</h4>
      </div>
      <p className="text-white">React Course - Project 1</p>
    </nav>
   </header>
 )
}

export default Navbar