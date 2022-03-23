import Image from 'next/image'


function Hero() {
    return (
        <section style={{"backgroundImage":"url('./Dot.png')"}} className='grid grid-cols-1 md:grid-cols-2 h-120 bg-white mx-auto max-w-6xl px-20 py-28 bg-no-repeat bg-left-bottom'>
        <div className='mt-3'>
          <h2 className='font-bold md:text-4xl text-3xl mb-3'>Discover, and collect digital art NFTS</h2>
          <p className='text-gray-500 md:text-md mb-8'>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets</p>
          <button className='primary-button mb-8'>Explore Now</button>
          <div className='flex space-x-5'>
            <div>
                <h2 className='text-3xl font-semibold'>98k+</h2>
                <p className='text-gray-600 text-sm'>Artwork</p>
            </div>
            <div>
                <h2 className='text-3xl font-semibold'>12k+</h2>
                <p className='text-gray-600 text-sm'>Auction</p>
            </div>
            <div>
                <h2 className='text-3xl font-semibold'>15k+</h2>
                <p className='text-gray-600 text-sm'>Artist</p>
            </div>
          </div>
        </div>
        <div className='hidden relative md:inline-flex mt-3'>
          <Image
            src="/banner.svg"
            objectFit="fill"
            layout="fill"
          />
        </div>
    </section>
    )
}

export default Hero