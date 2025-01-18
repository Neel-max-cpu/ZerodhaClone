import React from 'react'
import img from "../assets/images/logo.svg"
import { Button } from './ui/button'

import { Menu } from 'lucide-react';


const Navbar = () => {
    return (
        <div className='p-2 h-[60px] items-center border-b-2 border-gray-100 w-full'>
            <div className='flex item-center justify-between px-4 py-1 mx-16'>
                <div className='flex items-center justify-center ml-11'>
                    <img className='h-4 w-auto' src={img} alt="" />
                </div>
                <div className='flex items-center space-x-2'>
                    <Button className="bg-white text-gray-500 hover:bg-white hover:text-blue-500 shadow-none">Signup</Button>
                    <Button className="bg-white text-gray-500 hover:bg-white hover:text-blue-500 shadow-none">About</Button>
                    <Button className="bg-white text-gray-500 hover:bg-white hover:text-blue-500 shadow-none">Products</Button>
                    <Button className="bg-white text-gray-500 hover:bg-white hover:text-blue-500 shadow-none">Pricing</Button>
                    <Button className="bg-white text-gray-500 hover:bg-white hover:text-blue-500 shadow-none">Support</Button>
                    <Menu size='24' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
