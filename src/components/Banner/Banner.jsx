import React from 'react';
import PlayImg from '../../assets/playstore.png';
import AppImg from '../../assets/AppStore.png';
import BanImg from '../../assets/hero.png';
const Banner = ({ handleClick }) => {
    return (
        <div>
            <div className="hero bg-base-200 ">
                <div className="hero-content text-center">
                    <div className="min-w-full">
                        <h1 className="text-5xl font-bold text-[#9F62F2]">We Build <br /> Productive Apps</h1>
                        <p className="py-6">
                            At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                        <div className='flex justify-center items-center gap-5'>
                            <button onClick={()=>handleClick('https://play.google.com')} className="btn"><img className='w-6' src={PlayImg} alt="" /> Google Play</button>
                            <button onClick={()=>handleClick("https://www.apple.com/app-store")} className="btn "><img className='w-6' src={AppImg} alt="" /> App Store</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center mt-7'>
                <img className='w-1/2' src={BanImg} alt="" />
            </div>
            <div className=" text-sm  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
                <h1 className='text-3xl font-bold text-center py-5'>Trusted by Millions, Built for You</h1>
                <div className='lg:px-50 lg:flex justify-between items-center lg:pb-5'>
                    <div className='mx-20 flex flex-col justify-center items-center p-5 mb-5 shadow-md rounded-xl lg:mx-0'> 
                        <p className='text-xl'>Total Downloads</p>
                        <h1 className='text-3xl font-bold'>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className='flex flex-col justify-center items-center mb-5 p-5 mx-20 shadow-md rounded-xl lg:mx-0'> 
                        <p className='text-xl'>Total Reviews</p>
                        <h1 className='text-3xl font-bold'>906K</h1>
                        <p>46% more than last month</p>
                    </div>
                    <div className='flex flex-col justify-center items-center  mb-5 p-5 mx-20 shadow-md rounded-xl lg:mx-0'>
                         <p className='text-xl'>Active Apps</p>
                        <h1 className='text-3xl font-bold'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;