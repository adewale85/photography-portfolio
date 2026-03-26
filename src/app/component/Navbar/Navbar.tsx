import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdClose, IoMdMenu } from 'react-icons/io'

export default function Navbar() {


    const [isOpen, setIsOpen] = useState (false)

    const Navlinks = [
        {name: "Portfolio", href:"/"},
        {name: "Service & Price", href:"/Service & Price"},
        {name: "Info", href:"/Info"},
        {name: "Contact", href:"/Contact"}
    ]

  return (
    <div className='relative flex items-center w-full h-16 lg:px-0 px-4 Wrapper'>
        {/* <div className='text-white '>
            PHOTOGRAPHY
        </div> */}
    
        <ul className=' lg:flex hidden gap-22 text-white font'>
            <h1 className='text-white'> PHOTOGRAPHY</h1>
          {Navlinks.map((link)=>(
            <li key={link.name}>
            <Link href={link.href}>
            {link.name}
            </Link>
            </li>
          ))}
        </ul>

       <div className='flex justify-between w-full lg:hidden'>
             <div className='text-white'> PHOTOGRAPHY</div>
          <button className='lg:hidden text-3xl text-white z-50 '
           onClick={()=> setIsOpen (!isOpen)}>
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>

          {isOpen && (
            <div className='lg:hidden absolute top-full left-0 bg-[#000000] w-full  text-black z-50 shadow-lg flex flex-col items-center justify-center'>
            
        <ul className='flex flex-col items-center gap-8 text-black'>
          {Navlinks.map((link)=>(
            <li key={link.name} className='text-white'>
            <Link href={link.href}>
            {link.name}
            </Link>
            </li>
          ))}
        </ul>
            </div>
          )}
       </div>

    </div>
  )
}
