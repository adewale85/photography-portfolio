import Link from 'next/link'
import React from 'react'

export default function Navbar() {

    const Navlinks = [
        {name: "Portfolio", href:"/"},
        {name: "Service & Price", href:"/Service & Price"},
        {name: "Info", href:"/Info"},
        {name: "Contact", href:"/Contact"}
    ]

  return (
    <div className=''>
        <ul className='Wrapper flex gap-22 text-white font'>
          {Navlinks.map((link)=>(
            <li key={link.name}>
            <Link href={link.href}>
            {link.name}
            </Link>
            </li>
          ))}
        </ul>

    </div>
  )
}
