


import Navbar from './component/Navbar/Navbar'
import HeroSection from './component/HeroSection'
import About from './component/About'
import LatestWork from './component/LatestWork'
import Footer from './component/Footer/Footer'
import Prices from './component/Prices'
import Contact from './component/Contact'
import Portfolio from './component/Portfolio'
import ReviewServer from './component/ReviewServer'


function Home() {
  return (
    <div>
       <main className='flex min-h-screen flex-col bg-[#000000] 
       bg-cover bg-center bg-fixed bg-no-repeat w-full '>
      <div className=''>
        <Navbar />
        <div>
          <HeroSection/>
        </div>
        <About />
        <div>
          <Portfolio />
          <LatestWork />
          <Prices />
          <ReviewServer />
          <Contact/>
          <Footer />
          
        </div>
      </div>
    </main>
    </div>
  )
}

export default Home