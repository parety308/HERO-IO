import React from 'react';
import { useLoaderData } from 'react-router';
import TrendingApps from '../../TrendingApps/TrendingApps';
import TrendingApp from '../TrendingApp/TrendingApp';
const AllApps = () => {
    const trendindApps =useLoaderData();
    return (
        <div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2  lg:w-full   gap-4 p-6 auto'>
                {
                    trendindApps.map(tapp => <TrendingApp tapp={tapp} key={tapp.id}></TrendingApp>)
                }
            </div>
        </div>
    );
};

export default AllApps;