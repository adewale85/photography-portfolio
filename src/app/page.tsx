

function Home() {
  return (
    <div>
       <main className='flex min-h-screen flex-col bg-[#000000] bg-cover bg-center bg-fixed bg-no-repeat w-full '>
      <div className='mt-12'>
        {/* <Navbar /> */}
        <div>
          {/* This now works because the parent is a Server Component */}
          {/* <HeroSection/> */}
        </div>
        {/* <About /> */}
        <div>
          {/* <Porfolio />
          <LatestWork />
          <Prices />
          <Review />
          */}
          {/* <Contact/>
          <Footer /> */}

          <h1>It works!</h1>;
        </div>
      </div>
    </main>
    </div>
  )
}

export default Home