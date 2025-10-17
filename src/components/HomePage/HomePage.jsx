import React from 'react';
import Banner from '../Banner/Banner';
import TrendingApps from '../../TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';
const HomePage = () => {
    const trendindApps = useLoaderData();
    const handleClick = (url) => {
        window.location.href = url;
    };
    return (
        <div>
            <Banner handleClick={handleClick}></Banner>
            <TrendingApps trendindApps={trendindApps}></TrendingApps>
        </div>
    );
};

export default HomePage;