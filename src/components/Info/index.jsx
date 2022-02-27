import React from "react";

import image from '../../assets/image1.png'
// import { EnvelopeFill, Linkedin } from 'react-bootstrap-icons';

function Info() {
 return (
   <div className="rounded-t-lg">
    <img src={image} alt="" className="" />
    <div className="text-center mb-4">
      <p className="text-white font-bold text-2xl">Laura Smith</p>
      <p className="text-orange-500">Frontend Developer</p>
      <p className="text-white">laurasmith.website</p>
    </div>
    <div className="flex justify-center gap-7 mb-5">
      <button className="bg-white text-black rounded-lg w-[115px] h-[34px]">Email</button>
      <button className="bg-blue-400 text-white rounded-lg text-center w-[115px] h-[34px]"> Linkedin</button>
    </div>
   </div>
 )
}

export default Info