import Image from 'next/image'
import React from 'react'
import logo from '@/public/lg.png'
import Btn from './Btn'
const Navbar = () => {
  return (
<div className="navbar  fixed w-full bg-slate-50 top-0 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Services</a></li>
      <li><a>How we work</a></li>
      </ul>
    </div>
  <Image src={logo} width={80}/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Services</a></li>
      <li><a>How we work</a></li>

    </ul>
  </div>
  <div className="navbar-end">
  <Btn main={true} text="Get Proposal"/>
  </div>
</div>
)
}

export default Navbar