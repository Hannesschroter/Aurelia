import  Hero  from "./components/Hero";
import Map from "./components/Map";

export default function Home() {
  return (
    <main >
      <div className='h-screen snap-y snap-mandatory overflow-scroll z-0'>
        {/* <section className="bg-slate-700 text-7xl text-gray-100 min-h-screen flex gap-4 justify-center items-center snap-start">
          <div>Test</div>
          <div>2</div>
        </section>

        <section className="bg-gray-300 text-7xl text-slate-700 min-h-screen flex gap-4 justify-center items-center snap-center">
          <div>Test</div>
          <div>2</div>
        </section> */}

{/* 6db6e78475ac9616e969e41d41689404d8f36046 */}


        <Hero />
        <Map />
      </div>
      

      
    </main>
  )
}
