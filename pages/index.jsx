import Header from '../components/Header'
import Hero from '../components/Hero'
import BigCard from '../components/BigCard'
import SmallCard from '../components/SmallCard'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      {/* Header */}
      <Header/>

      {/* Hero section */}
      <Hero/>

      {/* Info section */}
      <section className='h-96 bg-slate-100 grid grid-cols-1 space-y-5 gap-x-10 md:grid-cols-3 items-center px-12 py-8'>
          <div>
             <h1 className='text-3xl md:text-4xl font-semibold'>The amazing NFT art of the world here</h1>
          </div>
          <div>
            <div className='flex'>
              <img src="/card-tick.svg"/>
              <h2 className='ml-3 font-semibold'>Fast Transaction</h2>
            </div>
            <p className="ml-12 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
          </div>
          <div>
          <div>
            <div className='flex'>
              <img src="/chart-square.svg"/>
              <h2 className='ml-3 font-semibold'>Growth Transaction</h2>
            </div>
            <p className="ml-12 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
          </div>
          </div>
      </section>
      <section className='bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-x-3 md:space-x-9 h-120 mx-auto max-w-6xl px-5 py-28'>
        <BigCard />
        <div className="space-y-5 items-center mt-3">
          <SmallCard art="avatar1.jpg" bg="smallCard.svg"/>
          <SmallCard art="avatar2.jpg" bg="smallCard1.svg"/>
          <SmallCard art="avatar3.jpg" bg="smallCard3.svg"/>
        </div>
        <div>
           <h2 className='text-2xl font-bold'>TOP COLLECTIONS OVER</h2>
           <p className='text-lg text-blue-800 font-semibold'>Last 7 days</p>
           <div>

           </div>
        </div>
      </section>
    </main>
  )
}