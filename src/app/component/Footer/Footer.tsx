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
    <main className='lg:px-0 px-4 Wrapper lg:py-12 lg:mt-12 mt-0 py-0'>
    <div className='relative flex items-center justify-between w-full h-16 '>
        <ul className='flex items-center lg:gap-12 gap-8 text-white font'>
            
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
    </div>
    <div className='border-b-2 border-[#D0B8AC] py-8 flex items-center justify-center'>
         <div>
           
         <div className="flex lg:hidden gap-8 justify-center mb-8">
             <h3 className='text-white flex lg:hidden text-center'> PHOTOGRAPHY</h3>
                       {SocialMedia.map((social)=>(
                        <a key={social.name} href={social.href} target="_blank">
                          <Image src={social.icon} alt={social.name} width={20} height={20} />
                        </a>
                      ))}

            </div>
        <h4 className='text-[#D0B8AC] text-center font-glinter font-normal text-3xl'>Monica Johnson</h4>
         </div>
    </div>
    <p className='font-roboto font-normal text-[15px] text-white text-center py-12'>2023 ©Monica Johnson. All Rights Reserved.</p>
    </main>
  )
}

export default Footer