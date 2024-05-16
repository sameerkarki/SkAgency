"use client";
import Image from 'next/image'
import React from 'react'
import logo from '@/public/lg.png'
import Btn from './Btn'
const Navbar = () => {
  return (
    <nav className='flex justify-between mx-6 mr-6 items-center w-full fixed bg-slate-50 top-0  z-50'>
      <div className="logo">
        <Image src={logo} width={100} alt='logo' />
      </div>

      <ul className=' gap-8 font-semibold hidden lg:flex '>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#work">Our Process</a></li>
      </ul>
      <div className="">
<button className='min-w-44 min-h-12 rounded-xl text-white font-semibold px-4 py-3  bg-gradient-to-tr from-[#4f46e5] to-[#1d4ed8] hover:scale-110 transition-all duration-500' onClick={()=>document.getElementById('my_modal_1').showModal()} >Contact Us</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-center">Contact form</h3>
<form action="https://form.taxi/s/te4bypf6" method='POST' className='flex flex-col gap-8 text-center'>
  <input type="text" name="Name" placeholder='enter your Name' className='border-2 border-indigo-400 p-2 rounded-xl'/>
  <input type="email" name="Email" placeholder='enter your email' className='border-2 border-indigo-400 p-2 rounded-xl'/>
  <textarea name="Message" id="" placeholder='enter your message' className='border-2 border-indigo-500 p-5 rounded-xl'></textarea>
  <div className="btns">
  <input type="submit"  value="Send" className=' rounded-xl text-black font-semibold px-4 py-3 border-2 border-blue-700  hover:scale-110 transition-all duration-500' />

  </div>
</form>


    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
      </div>
    </nav>

)
}

export default Navbar
