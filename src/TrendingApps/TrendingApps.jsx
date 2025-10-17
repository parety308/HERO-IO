import React from 'react';
import TrendingApp from '../components/TrendingApp/TrendingApp';
import { Link } from 'react-router';
const TrendingApps = ({ trendindApps }) => {
    return (

        <div className='flex flex-col justify-center items-center my-8'>
            <h1 className='text-3xl text-[#001931] font-semibold'>Trending Apps</h1>
            <p className='text-[#627382] text-sm'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-2  lg:w-full   gap-4 p-6 auto'>
                {
                    trendindApps.map(tapp => <TrendingApp tapp={tapp} key={tapp.id}></TrendingApp>)
                }
            </div>
           <Link to='/apps'> <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-xl">Show All</a></Link>
        </div>
    );
};

export default TrendingApps;