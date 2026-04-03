"use client"

import About from './component/About'
import HeroeSection from './component/HeroeSection'
import LatestWork from './component/LatestWork'
import Navbar from './component/Navbar/Navbar'
import Porfolio from './component/Portfolio'
import Prices from './component/Prices'
import Review from './component/Review'
import SubmitForm from './component/SubmitForm'


function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#000000] bg-cover bg-center bg-fixed bg-no-repeat w-full '>
    <div className='mt-12'>
     <Navbar/>
    <div className=''><HeroeSection/></div>
    <About/>
    <div>
    <Porfolio/>
    <LatestWork/>
    <Prices/>
    <Review/>
    <SubmitForm/>
  
    </div>
    </div>
    </main>
  )
}

export default Home