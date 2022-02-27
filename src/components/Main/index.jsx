import React from "react";

function Main() {
  return (
    <main className="bg-[#282D35] p-5 text-white h-screen">
      <h1 className="text-lg font-bold">Fun facts about React</h1>
      <ul className="ml-8 list-disc marker:text-sky-400">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}

export default Main