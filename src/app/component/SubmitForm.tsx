import Image from 'next/image'
import React from 'react'

function SubmitForm() {
  return (
    <main id="contact" className='Wrapper py-22 flex lg:flex-row flex-col-reverse justify-between '>
        <div className='z-20
         text-white w-full'> {/* Added w-full here */}
            <h1 className='lg:w-[530px] w-full lg:text-[80px] text-[30px] font-glinter font-bold text-[#D0B8AC]'>Submit your application</h1>
            <div className='lg:absolute my-5 lg:w-[765px] w-full py-5 bg-[#363636] space-y-12 flex items-center justify-center'> {/* Fixed typo 'pace' to 'space' */}
               <div className='space-y-8 w-full p-4 flex-1'> {/* Added w-full and slight padding for mobile edges */}
                <div className='flex lg:flex-row flex-col gap-16 py-4 w-full'> 
                 {/* Corrected width logic below */}
                 <input type="text" placeholder ="Name" className='p-2 text-white lg:w-[350px] w-full h-12 border border-white bg-transparent'/>
                 <input type="email" placeholder ="Email" className='p-2 text-white lg:w-[350px] w-full h-12 border border-white bg-transparent'/>
                </div>
                <div className='w-full'>
                 <input type="text" placeholder ="Message" className='p-4 text-white lg:w-[732px] w-full h-32 border border-white bg-transparent'/>
                </div>
                <h4 className='text-center flex items-center justify-center gap-2 cursor-pointer'>
                 Send Message
                 <Image
                    src="/images/right-arrow1.svg"
                    alt="Arrow"
                    width={24}
                    height={12}
                    className="w-auto"
                  />
                </h4>
               </div>
            </div>
        </div>
        <div className='relative lg:py-0 py-12 '> {/* Added relative positioning and padding for mobile */}
            <Image
                src="/images/Submit-image.svg"
                alt="Illustration"
                width={900} 
                height={900}
                className=""
            />
        </div>
    </main>
  )
}

export default SubmitForm