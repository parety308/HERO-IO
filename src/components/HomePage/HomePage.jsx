import React from 'react';
import Banner from '../Banner/Banner';
import TrendingApps from '../../TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';

const HomePage = () => {
    const trendindApps=useLoaderData();
    return (
        <div>
           <Banner></Banner>
           <TrendingApps trendindApps={trendindApps}></TrendingApps>
        </div>
    );
};

export default HomePage;