import React from 'react'
import { CgWebsite } from "react-icons/cg";

const LitupBorders = () => {
  return (
    <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="rounded-lg flex items-center justify-center gap-2 px-8 py-2 bg-black relative group transition duration-200 text-white hover:bg-transparent">
            <span>Show My Projects</span>
            <CgWebsite />
        </div>
   </button>
  )
}

export default LitupBorders