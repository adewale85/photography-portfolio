import Image from 'next/image'
import React from 'react'

function SubmitForm() {
  return (
    <main className='Wrapper lg:px-0 px-4 py-12 flex justify-between '>
        <div className='text-white'>
            <h1 className='w-[530] text-[80px] font-glinter font-bold text-[#D0B8AC]'>Submit your application</h1>
            <div className='absolute w-[665px] h-[410px] bg-[#363636] pace-y-12 flex items-center justify-center'>
               <div className='space-y-8 '>
                <div className='flex gap-16 py-4 '> 
                 <input type="Your Name" placeholder ="Name" className='p-2 text-white w-[250px] h-12 border  border-white'/>
                <input type="Your Name" placeholder ="Email" className='p-2 text-white w-[250px] h-12 border  border-white'/>
               </div>
               <div>
                <input type="Your Name"  placeholder ="Email" className='p-4 text-white w-[565px] h-50 border  border-white'/>
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
        <div className=''>
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