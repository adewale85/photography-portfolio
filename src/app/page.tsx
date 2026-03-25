"use client"

import HeroeSection from './component/HeroeSection'
import Navbar from './component/Navbar/Navbar'

function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#000000] bg-cover bg-center bg-fixed bg-no-repeat w-full '>
    <div className='py-12'>
     <Navbar/>
    <div className=''><HeroeSection/></div>
    </div>
    </main>
  )
}

export default Home