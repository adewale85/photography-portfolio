import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {

  const Navlinks = [
        {name: "Portfolio", href:"/"},
        {name: "Service & Price", href:"/Service & Price"},
        {name: "Info", href:"/Info"},
        {name: "Contact", href:"/Contact"}
    ]

  return (
    <main className='lg:px-0 px-4 Wrapper py-12'>
    <div className='relative flex items-center justify-between w-full h-16 '>
        <ul className='flex items-center gap-12 text-white font'>
            
          {Navlinks.map((link)=>(
            <li key={link.name}>
            <Link href={link.href}>
            {link.name}
            </Link>
            </li>
          ))}

        </ul>
        <h3 className='text-white'> PHOTOGRAPHY</h3>

            <div className="flex gap-8">
                        <a href="https://twitter.com" target="_blank">
                          <Image src="/images/twitter.svg" alt="Twitter" width={20} height={20} />
                        </a>
                        <a href="https://facebook.com" target="Odusola Adewale">
                          <Image src="/images/facebook.svg" alt="Facebook" width={20} height={20} />
                        </a>
                        <a href="https://instagram.com" target="_blank">
                          <Image src="/images/instagram.svg" alt="Instagram" width={20} height={20} />
                        </a>
                        <a href="https://Email.com" target="_blank">
                          <Image src="/images/email.svg" alt="Instagram" width={20} height={20} />
                        </a>
            </div>
    </div>
    <div className='border-b-2 border-[#D0B8AC] py-8 '>
        <h4 className='text-[#D0B8AC] text-center font-glinter font-normal text-3xl'>Monica Johnson</h4>
    </div>
    <p className='font-roboto font-normal text-[15px] text-white text-center py-12'>2023 ©Monica Johnson. All Rights Reserved.</p>
    </main>
  )
}

export default Footer