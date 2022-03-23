function SmallCard({bg, art}) {
    return (
        <div className="flex items-center cursor-pointer hover:scale-105 hover:shadow-lg transition transform duration-300 p-2 rounded-lg">
            <img src={`/${bg}`} className="w-[147px] h-[147px] rounded-lg"/>
            <div className="ml-3 space-y-4 w-[200px]">
                <h2 className="font-semibold pr-1">The Futr Abstr</h2>
                <div className="flex space-x-3 items-center">
                    <img className="h-[34px] w-[34px] rounded-full" src={`/${art}`}/>
                    <div className="flex items-center border border-green-500 space-x-1 p-2 rounded-lg">
                        <img className="h-[14px] w-[18px]" src="/green_inter.svg"/>
                        <p className="text-green-500 text-xs">0.25</p>
                        <p className="text-green-500 text-xs">ETH</p>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="flex space-x-1">
                        <p className="text-xs text-gray-500">1</p>
                        <p className="text-xs text-gray-500">of</p>
                        <p className="text-xs text-gray-500">8</p>
                    </div>
                </div>
                <button className="second-button-sm">Place Bid</button>
            </div>
        </div>
    )
}

export default SmallCard