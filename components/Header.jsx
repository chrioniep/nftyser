import {
    SearchIcon,
    MenuIcon,
    XIcon
} from "@heroicons/react/outline"
import { useState } from "react";

function Header() {
    const [menu, setMenu ] = useState(false)

    return (
        <><header className="bg-white py-7 top-0 z-50 border-b-2 sticky grid grid-cols-2 px-10">
            {/* Logo and Menus */}
            <div className="flex items-center space-x-8">
                <h1 className="relative my-auto text-3xl font-bold text-blue-800">NFTyser</h1>
                <p className="menu">Marketplace</p>
                <p className="menu">Ressources</p>
                <p className="menu">About</p>
            </div>
            {/* Search input and button */}
            <div className="hidden items-center justify-around md:inline-flex">
                <div className="flex items-center rounded-full border-2 py-2 text-sm placeholder-gray-600">
                    <input
                        type="text"
                        className="pl-5 flex-grow bg-transparent outline-none"
                        placeholder="search..." />
                    <SearchIcon className="h-8 pr-2 text-gray-400 cursor-pointer" />
                </div>
                <button className="rounded-full bg-blue-800 text-sm text-white py-3 px-7">Upload</button>
                <button className="rounded-full bg-blue-white text-sm text-blue-800 py-3 px-7 border-2 border-blue-800">Connect Wallet</button>
            </div>
            <div className="md:hidden items-center">
                {!menu && <MenuIcon onClick={() => setMenu(true)} className="text-gray-800 h-8 cursor-pointer float-right border-2 border-gray-600 p-1" />}
                {menu && <XIcon onClick={() => setMenu(false)} className="text-gray-800 h-8 cursor-pointer float-right border-2 border-gray-600 p-1" />}
            </div>
        </header>
        {menu && <div className="bg-white h-62 shadow-lg pt-3 transition duration-400 transform ease-in">
            <div className="mb-3 divide-y">
                <p className="p-3 cursor-pointer text-gray-700">Marketplace</p>
                <p className="p-3 cursor-pointer text-gray-700">Ressources</p>
                <p className="p-3 cursor-pointer text-gray-700">About</p>
                <hr />
            </div>
            <div className="p-3">
                <div className="flex px-3 items-center rounded-full border-2 py-2 text-sm placeholder-gray-600">
                    <input
                        type="text"
                        className="mx-3 flex-grow bg-transparent outline-none justify-center"
                        placeholder="search..." />
                    <SearchIcon className="h-8 pr-2 text-gray-400 cursor-pointer" />
                </div>
                <div className="space-x-3 mt-5 flex justify-center">
                <button className="primary-button">Upload</button>
                <button className="rounded-full bg-blue-white text-sm text-blue-800 py-3 px-7 border-2 border-blue-800 active:scale-95">Connect Wallet</button>
                </div>
            </div>
        </div>}
        </>
    )
}

export default Header;