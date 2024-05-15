import React from 'react'
import "../globals.css"
const Btn = (props) => {
 if(props.main === true) {
   return <button className='min-w-44 min-h-12 rounded-xl text-white font-semibold px-4 py-3  bg-gradient-to-tr from-[#4f46e5] to-[#1d4ed8] hover:scale-110 transition-all duration-500'>{props.text}</button>
 } else {
   return <button className='min-w-44 min-h-12 rounded-xl text-black font-semibold px-4 py-3 border-2 border-blue-700  hover:scale-110 transition-all duration-500'>{props.text}</button>

 }
}

export default Btn