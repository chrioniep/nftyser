import Image from 'next/image'

function BigCard() {
    return (

            <div className='hover:shadow-lg transition transform duration-300 py-2 cursor-pointer hover:scale-105 bg-white'>
                <Image 
                  src="/bigCard.svg"
                  objectFit='cover'
                  height={424}
                  width={400}
                />
                <div className='flex justify-between items-center px-5 py-5'>
                    <div className='flex'>
                        <img className='h-[48px] w-[48px] rounded-full mr-3' src="/avatar2.jpg"/>
                        <div className='mt-1'>
                            <h2 className='font-semibold'>The Futr Abstr</h2>
                            <p className='text-xs text-gray-600'>10 in the stock</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-xs text-gray-600 mb-1'>Highest Bid</p>
                        <div className='flex items-center'>
                            <img src="/black_inter.svg" className='h-[21px] w-[13px] mr-2'/>
                            <h2 className='font-semibold text-gray-700'>0.25 ETH</h2>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default BigCard