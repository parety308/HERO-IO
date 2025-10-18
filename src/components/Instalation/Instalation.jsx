import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { getToLC, removeToLC } from '../AddToLC/AddToLC';
import InstalledApp from '../InstalledApp/InstalledApp';

const Instalation = () => {
    const apps = useLoaderData();
    const installedAppId = getToLC();
    const [installedApps, setInstalledApps] = useState(apps.filter(a => installedAppId.includes(a.id)));
    const handleRemove = (id) => {
        removeToLC(id);
        setInstalledApps(prev => prev.filter(app => app.id !== id));
    }
    return (
        <div>
            <div className='flex flex-col justify-center items-center my-6'>
                <h1 className='text-3xl'>Your Installed Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='shadow-lg mx-15 my-5 p-5 rounded-xl'>
                {
                    installedApps.map(app => <InstalledApp app={app} handleRemove={handleRemove}></InstalledApp>)
                }
            </div>
        </div>
    );
};

export default Instalation;