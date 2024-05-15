import Image from 'next/image'
import React from 'react'
import logo from '@/public/lg.png'
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-slate-100 text-black ">
    <aside>
        <Image src={logo} width={100}/>
      <p className="font-bold ">
        Sk Digital Agency
      </p> 
      <p>Copyright © 2024 - All right reserved</p>
    </aside> 

  </footer>
  )
}

export default Footer