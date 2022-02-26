import React from "react";

import logo from '../../assets/logo192.png'

function Header() {
 return (
   <header className="p-3 border-b-1 shadow">
    <nav className="flex justify-between">
      <img src={logo} className="w-[40px]" alt="" />
      <ul className="flex gap-5">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
   </header>
 )
}

export default Header