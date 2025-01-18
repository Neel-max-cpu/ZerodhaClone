import React from 'react'
import { Button } from './ui/button';
import Navbar from './Navbar';


// images --- 
import landingpage from "../assets/images/landing-page.png";
import ecosystem from "../assets/images/ecosystem.png";
import presslogo from "../assets/images/press-logos.png"
import price0 from "../assets/images/pricing-eq.svg"
import price20 from "../assets/images/other-trades.svg"
import education from "../assets/images/index-education.svg"



// icons ---
import { MoveRight, MoveLeft } from 'lucide-react';



const Main = () => {
    return (
        <div className='w-full justify-center content-center'>
            {/* navbar */}
            <div>
                <Navbar />
            </div>


            <div className='flex justify-center items-center my-10'>
                <img className='h-72 w-auto' src={landingpage} alt="" />
            </div>
            <div className='my-10 flex flex-col justify-center items-center'>
                <div className=' space-y-4 flex flex-col justify-center items-center mb-12'>
                    <h1 className='text-5xl text-gray-900 font-semibold'>Invest in everything</h1>
                    <h2 className='text-gray-800'>Online Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</h2>
                </div>
                <Button className="px-8 py-4 text-lg bg-[#387ed1] text-white rounded-sm hover:bg-gray-950">
                    Sign up for free
                </Button>
            </div>

            <div className='flex flex-row justify-center items-center p-14 '>
                {/* Text Section */}
                <div className='flex-1 pr-8'>
                    <h1 className='text-3xl text-gray-900 font-semibold'>Trust with confidence</h1>

                    <h2 className='text-gray-800 mt-4 font-semibold'>Customer-first always</h2>
                    <h3 className='text-gray-600 mt-2'>
                        That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                    </h3>

                    <h2 className='text-gray-800 mt-6 font-semibold'>No spam or gimmicks</h2>
                    <h3 className='text-gray-600 mt-2'>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
                    </h3>

                    <h2 className='text-gray-800 mt-6 font-semibold'>The Zerodha universe</h2>
                    <h3 className='text-gray-600 mt-2'>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </h3>

                    <h2 className='text-gray-800 mt-6 font-semibold'>Do better with money</h2>
                    <h3 className='text-gray-600 mt-2'>
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                    </h3>
                </div>

                {/* Image Section */}
                <div className='flex-1'>
                    <img className='h-auto w-full object-contain' src={ecosystem} alt="Ecosystem" />
                    <div className='flex justify-center items-center space-x-3'>
                        <Button className="bg-white shadow-none text-blue-500 hover:bg-white hover:text-gray-900">Explore our products <MoveRight /></Button>

                        <Button className="bg-white shadow-none text-blue-500 hover:bg-white hover:text-gray-900">Try kit demo <MoveRight /></Button>
                    </div>
                </div>
            </div>

            <div className='h-full w-full flex justify-center items-center my-4'>
                <img src={presslogo} alt="" />
            </div>


            <div className='flex flex-row justify-center items-center p-14 '>
                {/* Text Section */}
                <div className='flex-1 pr-8'>
                    <h1 className='text-3xl text-gray-900 font-semibold'>Unbetable pricing</h1>
                    <h3 className='text-gray-700 mt-2'>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </h3>
                    <Button className="bg-white shadow-none p-0 text-blue-500 hover:bg-white hover:text-gray-900">See pricing <MoveRight /></Button>
                </div>

                {/* Image Section */}
                <div className='flex flex-row items-center space-x-2'>
                    {/* Each image with its description */}
                    <div className='flex flex-row items-center'>
                        <img className='h-28 w-28 object-contain' src={price0} alt="Free account opening" />
                        <p className='text-gray-700 text-xs'>Free account<br />opening</p>
                    </div>

                    <div className='flex flex-row items-center'>
                        <img className='h-28 w-28 object-contain' src={price0} alt="Free equity delivery" />
                        <p className='w-auto text-gray-700 text-xs'>Free equity delivery<br />and direct mutual funds</p>
                    </div>

                    <div className='flex flex-row items-center'>
                        <img className='h-28 w-28 object-contain' src={price20} alt="Intraday and F&O" />
                        <p className='text-gray-700 text-xs'>Intraday and<br />F&O</p>
                    </div>
                </div>
            </div>




            <div className='flex flex-row justify-center items-center p-14 space-x-10 '>

                {/* Image Section */}
                <div className='flex-1'>
                    <img className='h-72 w-full object-contain' src={education} alt="Ecosystem" />
                </div>


                {/* Text Section */}
                <div className='flex-1 pr-8 space-y-8'>
                    <h1 className='text-3xl text-gray-900 font-semibold'>Free and open market education</h1>

                    <div className='space-y-3'>
                        <h3 className='text-gray-600 mt-2'>
                            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                        </h3>
                        <Button className="bg-white shadow-none p-0 text-blue-500 hover:bg-white hover:text-gray-900">Varsity<MoveRight /></Button>
                    </div>

                    <div className='space-y-3'>
                        <h3 className='text-gray-600 mt-2'>
                            TradingQ&A, the most active trading and investment community in India for all your market related queries.
                        </h3>
                        <Button className="bg-white shadow-none p-0 text-blue-500 hover:bg-white hover:text-gray-900">TradingQ&A<MoveRight /></Button>
                    </div>
                </div>


            </div>





        </div>
    )
}

export default Main
