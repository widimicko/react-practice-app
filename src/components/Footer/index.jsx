import React from "react";

import { Facebook, Twitter, Github, Instagram } from 'react-bootstrap-icons';


function Footer() {
  return (
   <div className="bg-[#161619] flex justify-center text-white p-3 gap-5 text-2xl">
     <Facebook />
     <Twitter />
     <Github />
     <Instagram />
   </div>
  )
}

export default Footer