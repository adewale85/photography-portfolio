


import Navbar from './component/Navbar/Navbar'
import HeroSection from './component/HeroSection'
import About from './component/About'
import Porfolio from './component/Portfolio'
import LatestWork from './component/LatestWork'
import Prices from './component/Prices'
import Review from './component/Review'
import SubmitForm from './component/SubmitForm'
import Footer from './component/Footer/Footer'

function Home() {
  return (
    <div>
       <main className='flex min-h-screen flex-col bg-[#000000] bg-cover bg-center bg-fixed bg-no-repeat w-full '>
      <div className='mt-12'>
        <Navbar />
        <div>
          {/* This now works because the parent is a Server Component */}
          <HeroSection/>
        </div>
        <About />
        <div>
          <Porfolio />
          <LatestWork />
          <Prices />
          <Review />
          <SubmitForm />
          <Footer />
        </div>
      </div>
    </main>
    </div>
  )
}

export default Home