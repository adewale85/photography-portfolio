import Image from 'next/image'
import React from 'react'

function SubmitForm() {
  return (
    <main className='Wrapper lg:px-0 px-4 py-12 flex lg:flex-row flex-col-reverse  justify-between '>
        <div className='text-white'>
            <h1 className='lg:w-[530] w-full lg:text-[80px] text-[30px] font-glinter font-bold text-[#D0B8AC]'>Submit your application</h1>
            <div className='lg:absolute lg:w-[665px] w-full bg-[#363636] pace-y-12 flex items-center justify-center'>
               <div className='space-y-8 '>
                <div className='flex lg:flex-row flex-col gap-16 py-4 '> 
                 <input type="Your Name" placeholder ="Name" className='p-2 text-white lg:w-[250px] w-full h-12 border  border-white'/>
                <input type="Your Name" placeholder ="Email" className='p-2 text-white lg:w-[250px] w-full  h-12 border  border-white'/>
               </div>
               <div>
                <input type="Your Name"  placeholder ="Email" className='p-4 text-white lg:w-[565px] w-full h-50 border border-white'/>
               </div>
               <h4 className='text-center flex items-center justify-center gap-2'>
                Send Message
                <Image
                            src="/images/right-arrow1.svg"
                            alt="Arrow"
                            width={24}
                            height={12}
                            className="w-auto "
                            />
               </h4>
               </div>
            </div>
        </div>
        <div className='lg:py-0 py-12'>
            <Image
                            src="/images/Submit-image.svg"
                            alt="Arrow"
                            width={24}
                            height={12}
                            className="w-auto "
                            />
        </div>

    </main>
  )
}

export default SubmitForm