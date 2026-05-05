import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {

  const FooterLink = [
       {name: "Home", href: "/"},
        {name: "Portfolio", href: "#portfolio"},
        {name: "Service & Price", href: "#prices"},
        {name: "About", href: "#about"},
        {name: "Contact", href: "#contact"}
    ]

    const SocialMedia = [
        {name: "Twitter", href:"https://twitter.com", icon:"/images/twitter.svg"},
        {name: "Facebook", href:"https://facebook.com", icon:"/images/facebook.svg"},
        {name: "Instagram", href:"https://instagram.com", icon:"/images/instagram.svg"},
        {name: "Email", href:"https://Email.com", icon:"/images/email.svg"}
    ]

  return (
    <main className=' Wrapper lg:py-12 lg:mt-12 mt-0 py-0'>
    <div className='relative flex items-center justify-between w-full h-16 '>
        <ul className='grid lg:grid-cols-4 grid-cols-3 text-center lg:gap-12 gap-3 text-white font-medium font-open lg:text-[20px] text-[16px]'>
            
          {FooterLink.map((link)=>(
            <li key={link.name}>
            <Link href={link.href}>
            {link.name}
            </Link>
            </li>
          ))}

        </ul>
        <div className='flex gap-8'>
          <h3 className='text-white lg:flex hidden'> PHOTOGRAPHY</h3>

            <div className="lg:flex hidden gap-8">
                        <a href="https://twitter.com" target="_blank">
                          <Image src="/images/twitter.svg" alt="Twitter" width={20} height={20} />
                        </a>
                        <a href="https://facebook.com/Odusola.Adewale" target="">
                          <Image src="/images/facebook.svg" alt="Facebook" width={20} height={20} />
                        </a>
                        <a href="https://instagram.com/Shollystarphotography" target="_blank">
                          <Image src="/images/instagram.svg" alt="Instagram" width={20} height={20} />
                        </a>
                        <a href="mailto:iseoluwaodu85@gmail.com" target="iseoluwaodu85@gmail.com">
                          <Image src="/images/email.svg" alt="Email" width={20} height={20} />
                        </a>
            </div>
        </div>
    </div>
    <div className='border-b-2 border-[#D0B8AC] py-8 flex items-center justify-center'>
         <div>
           
         <div className="flex lg:hidden gap-20 items-center justify-between mb-8">
             <h3 className='text-white flex lg:hidden text-center'> PHOTOGRAPHY</h3>
                      <div className='flex gap-5'>
                         {SocialMedia.map((social)=>(
                        <a key={social.name} href={social.href} target="_blank">
                          <Image src={social.icon} alt={social.name} width={20} height={20} />
                        </a>
                      ))}
                      </div>

            </div>
        <h4 className='text-[#D0B8AC] text-center font-glinter font-normal text-3xl'>Sholly Star </h4>
         </div>
    </div>
    <p className='font-roboto font-normal text-[15px] text-white text-center py-12'>2023 ©Sholly Star. All Rights Reserved.</p>
    </main>
  )
}

export default Footer