import React from "react";

import image from '../../assets/image1.png'

function Info() {
 return (
   <div>
    <img src={image} alt="" className="w-full" />
    <div className="text-center mb-4">
      <p className="dark:text-white font-bold text-2xl">Laura Smith</p>
      <p className="text-orange-500">Frontend Developer</p>
      <p className="dark:text-white">laurasmith.website</p>
    </div>
    <div className="flex justify-center gap-7 mb-5">
      <button className="dark:bg-white dark:text-black rounded-lg w-[115px] h-[34px] border dark:border-0">Email</button>
      <button className="bg-blue-400 text-white rounded-lg text-center w-[115px] h-[34px] border dark:border-0"> Linkedin</button>
    </div>
   </div>
 )
}

export default Info