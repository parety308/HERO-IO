import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { getToLC, removeToLC } from '../AddToLC/AddToLC';
import InstalledApp from '../InstalledApp/InstalledApp';

const Instalation = () => {
    const apps = useLoaderData();
    const installedAppId = getToLC();
    const [installedApps, setInstalledApps] = useState(apps.filter(a => installedAppId.includes(a.id)));
    const [sortBy, setSortBy] = useState('');

    const handleRemove = (id) => {
        removeToLC(id);
        setInstalledApps(prev => prev.filter(app => app.id !== id));
    };

    const handleSort = (e) => {
        setSortBy(e.target.value);
    };

    let sortedApps = [...installedApps];
    if (sortBy === 'high-to-low') {
        sortedApps.sort((a, b) => b.downloads - a.downloads);
    } else if (sortBy === 'low-to-high') {
        sortedApps.sort((a, b) => a.downloads - b.downloads);
    }

    return (
        <div>
            <div className='flex flex-col justify-center items-center my-6'>
                <h1 className='text-3xl'>Your Installed Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center mx-15'>
                <h1 className='text-2xl font-semibold'>{sortedApps.length} App Found</h1>
                <select onChange={handleSort} defaultValue="" className="select border border-gray-400 p-1 rounded-md">
                    <option value="" disabled>Sort By Downloads</option>
                    <option value="high-to-low">High to Low</option>
                    <option value="low-to-high">Low to High</option>
                </select>
            </div>
            <div className='shadow-lg mx-15 my-5 p-5 rounded-xl border border-gray-300'>
                {sortedApps.map(app => (
                    <InstalledApp key={app.id} app={app} handleRemove={handleRemove} />
                ))}
            </div>
        </div>
    );
};

export default Instalation;
