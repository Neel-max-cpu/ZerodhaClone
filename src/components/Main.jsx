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
import logo from "../assets/images/logo.svg"



// lucid icons ---
import { MoveRight, MoveLeft } from 'lucide-react';

// font icon
import x from "../assets/icons/x-twitter-brands-solid.svg"
import fb from "../assets/icons/square-facebook-brands-solid.svg"
import ig from "../assets/icons/instagram-brands-solid.svg"
import li from "../assets/icons/linkedin-in-brands-solid.svg"
import yt from "../assets/icons/youtube-brands-solid.svg"
import wa from "../assets/icons/whatsapp-brands-solid.svg"
import te from "../assets/icons/telegram-brands-solid.svg"



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


            <div className='flex flex-row items-center p-14 justify-center'>
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




            <div className='flex flex-row justify-center items-center p-14 space-x-20 my-10'>
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


            <div className='my-10 flex flex-col justify-center items-center'>
                <div className=' space-y-4 flex flex-col justify-center items-center mb-12'>
                    <h1 className='text-3xl text-gray-700 font-semibold'>Open a Zerodha account</h1>
                    <h2 className='text-gray-500'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</h2>
                </div>
                <Button className="px-8 py-4 text-lg bg-[#387ed1] text-white rounded-sm hover:bg-gray-950">
                    Sign up for free
                </Button>
            </div>

            <div className='flex flex-row space-x-28 justify-center my-20 border-t-2 py-4 border-gray-100 w-full'>
                {/* first part */}
                <div className='flex flex-col space-y-4 mt-5'>
                    <div className=''>
                        <img className='h-4 w-auto' src={logo} alt="" />
                    </div>
                    <div className='text-gray-500 text-sm font-medium'>
                        <p>© 2010 - 2025, Zerodha Broking Ltd. <br />All rights reserved.</p>
                    </div>
                    <div className='space-y-4'>
                        <div className='flex space-x-4'>
                            <img className='h-5 w-5 text-gray-500' src={x} alt="" />
                            <img className='h-5 w-5 text-gray-500' src={fb} alt="" />
                            <img className='h-5 w-5 text-gray-500' src={ig} alt="" />
                            <img className='h-5 w-5 text-gray-500' src={li} alt="" />

                        </div>
                        <div className='flex space-x-4'>
                            <img className='h-5 w-5 text-gray-500' src={yt} alt="" />
                            <img className='h-5 w-5 text-gray-500' src={wa} alt="" />
                            <img className='h-5 w-5 text-gray-500' src={te} alt="" />
                        </div>
                    </div>
                </div>

                {/* second part */}
                <div className='flex flex-col space-y-2 mt-3'>
                    <h1 className='text-gray-800 font-semibold text-lg'>Company</h1>
                    <div className='flex flex-col hover:text-blue-500'>
                        <a href='' className='hover:text-blue-500 text-gray-500 font-semibold text-base'>About</a>
                        <a href='' className='hover:text-blue-500 text-gray-500 font-semibold text-base'>Products</a>
                        <a href='' className='hover:text-blue-500 text-gray-500 font-semibold text-base'>Pricing</a>
                        <a href='' className='hover:text-blue-500 text-gray-500 font-semibold text-base'>Referral programme</a>
                        <a href='' className='hover:text-blue-500 text-gray-500 font-semibold text-base'>Carrers</a>
                        <a href='' className='hover:text-blue-500 text-gray-500 font-semibold text-base'>Zerodha.tech</a>
                        <a href='' className='hover:text-blue-500 text-gray-500 font-semibold text-base'>Open source</a>
                        <a href='' className='hover:text-blue-500 text-gray-500 font-semibold text-base'>Press & media</a>
                        <a href='' className='hover:text-blue-500 text-gray-500 font-semibold text-base'>Zerodh Cares (CSR)</a>
                    </div>
                </div>

                {/* third part */}
                <div className='flex flex-col space-y-2 mt-3'>
                    <h1 className='text-gray-800 font-semibold text-lg'>Support</h1>
                    <div className='flex flex-col hover:text-blue-500'>
                        <a href='' className='text-gray-500 font-semibold text-base hover:text-blue-500'>Contact us</a>
                        <a href='' className='text-gray-500 font-semibold text-base hover:text-blue-500'>Support portal</a>
                        <a href='' className='text-gray-500 font-semibold text-base hover:text-blue-500'>Z-Connect blog</a>
                        <a href='' className='text-gray-500 font-semibold text-base hover:text-blue-500'>List of charges</a>
                        <a href='' className='text-gray-500 font-semibold text-base hover:text-blue-500'>Downloads & resources</a>
                        <a href='' className='text-gray-500 font-semibold text-base hover:text-blue-500'>Videos</a>
                        <a href='' className='text-gray-500 font-semibold text-base hover:text-blue-500'>Market overview</a>
                        <a href='' className='text-gray-500 font-semibold text-base hover:text-blue-500'>How to file a complaint?</a>
                        <a href='' className='text-gray-500 font-semibold text-base hover:text-blue-500'>Status of your complaints</a>
                    </div>
                </div>

                {/* fourth part */}
                <div className='flex flex-col space-y-2 mt-3'>
                    <h1 className='text-gray-800 font-semibold text-lg'>Account</h1>
                    <div className='flex flex-col'>
                        <a href="https://zerodha.com/open-account/" className='text-gray-500 font-semibold text-base hover:text-blue-500'>Open an account</a>
                        <a href="https://zerodha.com/fund-transfer/#tab-deposit_funds" className='text-gray-500 font-semibold text-base hover:text-blue-500'>Fund transfer</a>                       
                    </div>
                </div>
            </div>


            {/* last footer */}
            <div className='flex flex-col justify-center mx-7 space-y-3'>
                <div className='text-gray-400 font-medium text-[11px]'>
                    <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a className='text-blue-500 hover:text-gray-950' href="">complaints@zerodha.com</a>, for DP related to <a className='text-blue-500 hover:text-gray-950' href="">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                </div>
                <div className='text-gray-400 font-medium text-[11px] '>
                    <p>Procedure to file a complaint on   <a href="https://scores.sebi.gov.in" className='text-blue-500 hover:text-gray-950'> SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                </div>
                <div className='text-gray-400 font-medium text-[11px] flex space-x-1 '>
                    <a href="https://smartodr.in/login" className='text-blue-500 hover:text-gray-950'>Smart Online Dispute Resolution</a>
                    <p>|</p>
                    <a href="https://zerodha-common.s3.ap-south-1.amazonaws.com/Downloads-and-resources/Smart%20ODR%20info.pdf" className='text-blue-500 hover:text-gray-950'>Grievances Redressal Mechanism</a>
                </div>
                <div className='text-gray-400 font-medium text-[11px] '>
                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                </div>
                <div className='text-gray-400 font-medium text-[11px] '>
                    <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                </div>
                <div className='text-gray-400 font-medium text-[11px] '>
                    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-place-a-complaint-at-zerodha" className='text-blue-500 hover:text-gray-950'>create a ticket here</a>.</p>
                </div>
            </div>

            {/* last note in footer */}
            <div className='flex flex-row space-x-4 text-sm text-gray-400 font-semibold my-4 justify-center items-center'>
                <a href="https://www.nseindia.com/" className='hover:text-blue-500'>NSE</a>
                <a href="https://www.bseindia.com/" className='hover:text-blue-500'>BSE</a>
                <a href="https://www.mcxindia.com/" className='hover:text-blue-500'>MCX</a>
                <a href="https://zerodha.com/terms-and-conditions/" className='hover:text-blue-500'>Terms & conditions</a>
                <a href="https://zerodha.com/policies-and-procedures/" className='hover:text-blue-500'>Policies & procedures</a>
                <a href="https://zerodha.com/privacy-policy/" className='hover:text-blue-500'>Privacy policy</a>
                <a href="https://zerodha.com/disclosure/" className='hover:text-blue-500'>Disclosure</a>
                <a href="https://zerodha.com/investor-attention/" className='hover:text-blue-500'>For investor's attention</a>
                <a href="https://zerodha.com/tos/investor-charter/" className='hover:text-blue-500'>Investor charter</a>
            </div>



        </div>
    )
}

export default Main
